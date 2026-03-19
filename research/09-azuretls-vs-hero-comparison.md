# Порівняльний аналіз: azuretls-client vs Hero (unblocked-agent-mitm-socket)

> **Дата:** 2026-03-20
> **Мета:** Порівняти два підходи до TLS/HTTP2/HTTP3 fingerprinting

---

## Огляд рішень

### azuretls-client (Noooste)
Самодостатній HTTP клієнт на Go з вбудованим TLS/HTTP2/HTTP3 fingerprinting.

### Hero (unblocked-agent-mitm-socket)
MITM Proxy архітектура: Node.js + Go addon для TLS fingerprinting.

---

## Архітектурне порівняння

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ARCHITECTURE COMPARISON                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  azuretls-client                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │   Your App ──> azuretls.Session ──> uTLS ──> Target Server         │   │
│  │                    │                                               │   │
│  │                    └── HTTP/1.1, HTTP/2, HTTP/3 built-in           │   │
│  │                                                                     │   │
│  │   ALL IN ONE GO PROCESS                                            │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  Hero (unblocked-agent-mitm-socket)                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │   Browser ──> MITM Proxy ──> Go addon ──> uTLS ──> Target Server   │   │
│  │      │           │              │                                   │   │
│  │      │      Node.js         Go process                              │   │
│  │      │         │               │                                    │   │
│  │      │    HTTP handling    TLS/TCP                                  │   │
│  │      │         │               │                                    │   │
│  │      └─────────┴───────────────┘                                    │   │
│  │            IPC via Unix Sockets                                     │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Функціональне порівняння

| Функція | azuretls-client | Hero (unblocked-agent) |
|---------|-----------------|------------------------|
| **TLS Fingerprint (JA3)** | ✅ Full control via ClientHelloSpec | ✅ Full control via uTLS |
| **HTTP/2 Fingerprint (Akamai)** | ✅ ApplyHTTP2() method | ✅ IHttp2ConnectSettings hooks |
| **HTTP/3 / QUIC** | ✅ Native support | ❌ Not implemented |
| **TCP Settings (TTL, Window)** | ❌ Not exposed | ✅ ConfigureSocket() via syscall |
| **Browser Presets** | ✅ Chrome, Firefox, Safari, Edge, iOS | ✅ Chrome, Safari (hardcoded) |
| **JA3 String Input** | ✅ ApplyJa3(ja3String) | ❌ Requires recompilation |
| **Custom ClientHelloSpec** | ✅ GetClientHelloSpec function | ✅ Via sessionArgs.ClientHelloId |
| **Proxy Support** | ✅ HTTP, HTTPS, SOCKS4, SOCKS5, Chaining | ✅ Basic proxy support |
| **Header Ordering** | ✅ OrderedHeaders type | ✅ HeadersHandler |
| **WebSocket** | ✅ Built-in | ✅ Via MITM |
| **SSL Pinning** | ✅ PinManager | ❌ Not implemented |
| **CFFI (Multi-language)** | ✅ Python, Node.js, C, TypeScript | ❌ Go only |

---

## Код: Використання

### azuretls-client

```go
package main

import (
    "github.com/Noooste/azuretls-client"
)

func main() {
    session := azuretls.NewSession()
    defer session.Close()

    // Варіант 1: Browser preset
    session.Browser = azuretls.Chrome  // або Firefox, Safari, Edge

    // Варіант 2: JA3 string
    session.ApplyJa3("771,4865-4866-4867-1961-...", "chrome")

    // Варіант 3: HTTP/2 Akamai fingerprint
    session.ApplyHTTP2("1:65536;2:0;3:1000;4:6291456;6:262144|15663105|0|m,s,a,p")

    // Варіант 4: HTTP/3
    session.ApplyHTTP3("1:16383;7:100;GREASE|m,s,a,p")

    // Custom ClientHello
    session.GetClientHelloSpec = azuretls.GetLastChromeVersion

    response, err := session.Get("https://tls.peet.ws/api/all")
}
```

### Hero (unblocked-agent-mitm-socket)

```go
// Go addon (emulate_tls.go)
func EmulateTls(dialConn net.Conn, addr string, sessionArgs SessionArgs, connectArgs ConnectArgs) (*tls.UConn, error) {
    var spec tls.ClientHelloSpec

    // Тільки hardcoded версії
    if strings.HasPrefix(sessionArgs.ClientHelloId, "chrome-") {
        chromeVersion, _ := strconv.ParseInt(chromeVersionBit, 10, 0)
        if chromeVersion < 83 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_72)
        } else if chromeVersion < 91 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_83)
        }
        // ... більше версій
    }

    tlsConn := tls.UClient(dialConn, &tlsConfig, tls.HelloCustom)
    tlsConn.ApplyPreset(&spec)
    tlsConn.Handshake()
    return tlsConn, nil
}
```

---

## Детальне порівняння по категоріях

### 1. TLS Fingerprint (JA3)

#### azuretls-client
```go
// Три способи налаштування:

// 1. Browser preset (найпростіший)
session.Browser = azuretls.Chrome

// 2. JA3 string (гнучкий)
session.ApplyJa3("771,4865-4866-4867-1961-49196-49195-...", "chrome")

// 3. Повний контроль
session.GetClientHelloSpec = func() *tls.ClientHelloSpec {
    return &tls.ClientHelloSpec{
        CipherSuites: []uint16{
            tls.GREASE_PLACEHOLDER,
            tls.TLS_AES_128_GCM_SHA256,
            // ...
        },
        Extensions: []tls.TLSExtension{
            &tls.SNIExtension{ServerName: "example.com"},
            &tls.SupportedVersionsExtension{
                Versions: []uint16{tls.VersionTLS13, tls.VersionTLS12},
            },
            // ...
        },
    }
}
```

#### Hero
```go
// Тільки один спосіб: ClientHelloId string

sessionArgs.ClientHelloId = "chrome-120"  // або "Safari13"

// Вибір spec базується на рядку (hardcoded логіка)
if strings.HasPrefix(sessionArgs.ClientHelloId, "chrome-") {
    // version parsing та UTLSIdToSpec
}
```

**Переможець:** azuretls-client (3 способи vs 1)

---

### 2. HTTP/2 Fingerprint

#### azuretls-client
```go
// Akamai fingerprint формат
session.ApplyHTTP2("1:65536;2:0;3:1000;4:6291456;6:262144|15663105|0|m,s,a,p")

// Розшифровка:
// 1:65536 - SETTINGS_HEADER_TABLE_SIZE
// 2:0     - SETTINGS_ENABLE_PUSH
// 3:1000  - SETTINGS_MAX_CONCURRENT_STREAMS
// 4:6291456 - SETTINGS_INITIAL_WINDOW_SIZE
// 6:262144 - SETTINGS_MAX_HEADER_LIST_SIZE
// 15663105 - Window update
// 0 - Stream ID
// m,s,a,p - Priority frames order
```

#### Hero
```typescript
// Через hooks
interface IHttp2ConnectSettings {
    settings: http2.Settings;
    localWindowSize: number;
}

// INetworkHooks.onHttp2SessionConnect()
onHttp2SessionConnect(request, settings) {
    settings.settings.headerTableSize = 65536;
    settings.settings.enablePush = false;
    settings.settings.initialWindowSize = 6291456;
    // ...
}
```

**Переможець: Нічия** - обидва дають повний контроль, але різні інтерфейси

---

### 3. HTTP/3 / QUIC

#### azuretls-client
```go
// Повна підтримка HTTP/3
session.ApplyHTTP3("1:16383;7:100;GREASE|m,s,a,p")

// Використовує refraction-networking/utls + quic-go
response, err := session.Get("https://example.com")  // Автоматично обирає h3

// Примусовий HTTP/3
req := &azuretls.Request{
    Method:     "GET",
    Url:        "https://example.com",
    ForceHTTP3: true,
}
```

#### Hero
```
❌ Не підтримується
```

**Переможець:** azuretls-client (єдина підтримка HTTP/3)

---

### 4. TCP Settings

#### azuretls-client
```
❌ Не надає доступу до TCP налаштувань (TTL, Window Size)
```

#### Hero
```go
// configure_tcp.go
func ConfigureSocket(ttl int, windowSize int) func(network string, addr string, c syscall.RawConn) error {
    return func(network string, addr string, c syscall.RawConn) error {
        c.Control(func(fd uintptr) {
            if ttl > 0 {
                ConfigureTcpTtl(fd, ttl)  // setsockopt IP_TTL
            }
            if windowSize > 0 {
                ConfigureTcpWindowSize(fd, windowSize)  // setsockopt SO_RCVBUF
            }
        })
        return nil
    }
}
```

**Переможець:** Hero (повний контроль над TCP)

---

### 5. Browser Presets

#### azuretls-client
```go
// Вбудовані пресети:
azuretls.Chrome   // GetLastChromeVersion() - Chrome 133
azuretls.Firefox  // GetLastFirefoxVersion() - Firefox 138
azuretls.Safari   // GetLastSafariVersion() - Safari 18
azuretls.Edge     // Same as Chrome
azuretls.Opera    // Same as Chrome
azuretls.Ios      // GetLastIosVersion() - iOS Safari

// Кожен пресет - це функція, що повертає ClientHelloSpec
func GetLastChromeVersion() *tls.ClientHelloSpec {
    return &tls.ClientHelloSpec{
        CipherSuites: []uint16{...},
        Extensions: []tls.TLSExtension{...},
        // Повна специфікація Chrome 133
    }
}
```

#### Hero
```go
// Тільки Chrome версії + Safari13
if sessionArgs.ClientHelloId == "Safari13" {
    spec = GetSafari13Spec()
} else if strings.HasPrefix(sessionArgs.ClientHelloId, "chrome-") {
    // Парсинг версії та вибір spec
}

// Підтримувані Chrome версії: 72, 83, 96, 100, 106, 120, 120_PQ, 131, 133
```

**Переможець:** azuretls-client (більше браузерів, простіший інтерфейс)

---

### 6. Proxy Support

#### azuretls-client
```go
// Простіший API
session.SetProxy("http://user:pass@proxy:8080")
session.SetProxy("socks5://127.0.0.1:1080")
session.SetProxy("socks4://127.0.0.1:1080")

// Proxy chaining
session.SetProxy("http://proxy1:8080,socks5://proxy2:1080")

// QUIC through SOCKS5
session.SetProxy("socks5://127.0.0.1:1080")
response, _ := session.Get("https://example.com", azuretls.Request{ForceHTTP3: true})
```

#### Hero
```go
// Базова підтримка через ConnectArgs
type ConnectArgs struct {
    ProxyUrl *string
    // ...
}
```

**Переможець:** azuretls-client (proxy chaining, більше типів)

---

### 7. CFFI / Multi-language Support

#### azuretls-client
```typescript
// TypeScript/Node.js приклад з CFFI
import { FFI } from 'ffi-napi';

const azuretls = new FFI('/path/to/libazuretls.so', {
    'azuretls_session_new': ['uintptr_t', ['string']],
    'azuretls_session_do': ['pointer', ['uintptr_t', 'string']],
    'azuretls_session_apply_ja3': ['pointer', ['uintptr_t', 'string', 'string']],
    'azuretls_session_apply_http2': ['pointer', ['uintptr_t', 'string']],
    'azuretls_session_set_proxy': ['pointer', ['uintptr_t', 'string']],
});

// Python, C, Node.js bindings available
```

#### Hero
```
❌ Тільки Go addon, немає CFFI
```

**Переможець:** azuretls-client (готові біндинги для Python, Node.js, C)

---

## Бібліотеки під капотом

### Обидва використовують uTLS

```go
// azuretls-client
import tls "github.com/Noooste/utls"  // Fork of refraction-networking/utls

// Hero
import tls "github.com/refraction-networking/utls"  // Original
```

**Різниця:** azuretls-client використовує власний fork (`Noooste/utls`) з розширеними можливостями:
- HTTP/3 QUIC support
- Більше browser presets
- Регулярні оновлення

Hero використовує оригінальний `refraction-networking/utls`.

---

## Підтримка та оновлення

| Критерій | azuretls-client | Hero |
|----------|-----------------|------|
| **GitHub Stars** | 700+ | - |
| **Активність** | Активний (commits 2026) | Форк, обмежена підтримка |
| **Go Version** | 1.24 | 1.21+ |
| **Документація** | Відмінна (examples, README) | Обмежена |
| **Тести** | Comprehensive (20+ test files) | Обмежені |
| **CI/CD** | GitHub Actions | Немає |

---

## Продуктивність

### azuretls-client
```
+ Одний процес (Go)
+ Native HTTP/2, HTTP/3
+ Менше overhead
+ Connection pooling built-in
```

### Hero
```
- IPC overhead (Node.js ↔ Go)
- Context switching
- Unix socket overhead
+ Але: інтеграція з браузером через MITM
```

**Переможець:** azuretls-client для standalone HTTP клієнта

---

## Коли що використовувати?

### Використовувати azuretls-client коли:

1. **Потрібен standalone HTTP клієнт** - не браузерна автоматизація
2. **HTTP/3 підтримка критична**
3. **Потрібно підтримувати Python/Node.js біндинги**
4. **Простий API важливий**
5. **Proxy chaining потрібен**
6. **SSL Pinning потрібен**

### Використовувати Hero (unblocked-agent) коли:

1. **Браузерна автоматизація** - Chromium + MITM
2. **Потрібен повний контроль над TCP** (TTL, Window Size)
3. **Інтеграція з CDP** (Chrome DevTools Protocol)
4. **Human emulation** (мішинг, делей)
5. **Повна ізоляція** від browser fingerprint

---

## Гібридний підхід

Можна скомбінувати:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          HYBRID ARCHITECTURE                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Browser Automation (Hero)           HTTP Requests (azuretls-client)      │
│   ┌────────────────────────┐          ┌────────────────────────┐          │
│   │                        │          │                        │          │
│   │  Chromium ──> MITM     │          │  azuretls.Session      │          │
│   │      │          │      │          │      │                 │          │
│   │      ▼          ▼      │          │      ▼                 │          │
│   │  CDP API    Go addon   │          │  uTLS + HTTP/3         │          │
│   │                        │          │                        │          │
│   └────────────────────────┘          └────────────────────────┘          │
│                                                                             │
│   Use cases:                                                               │
│   - Hero: Page interactions, JS execution, screenshots                    │
│   - azuretls: API calls, data fetching, HTTP/3 endpoints                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Ключові відмінності

| Аспект | azuretls-client | Hero |
|--------|-----------------|------|
| **Призначення** | HTTP клієнт | Browser automation MITM |
| **Мова** | Pure Go | Node.js + Go addon |
| **Архітектура** | Single process | Multi-process IPC |
| **HTTP/3** | ✅ Full support | ❌ None |
| **TCP Control** | ❌ None | ✅ Full control |
| **CFFI** | ✅ Python, Node.js, C | ❌ Go only |
| **Browser Integration** | ❌ None | ✅ Chromium + CDP |
| **API Simplicity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Maintenance** | Active | Fork/limited |

---

## Рекомендація

### Для браузерної автоматизації (Hero форк):

1. **Залишити поточну архітектуру** для основного use case
2. **Але можна взяти ідеї з azuretls-client:**
   - Оновити uTLS версії (Chrome 133+)
   - Додати Firefox/Safari presets
   - Спростити API для налаштування JA3
   - Додати HTTP/3 підтримку (опціонально)

### Для HTTP клієнта (standalone):

**azuretls-client кращий** - простіший, швидший, більше функцій.

---

## Міграція (якщо потрібно)

### Замінити Go addon на azuretls-client:

```go
// Замість
dialConn, _ := net.Dial("tcp", addr)
uTlsConn, _ := EmulateTls(dialConn, addr, sessionArgs, connectArgs)

// Можна
session := azuretls.NewSession()
session.Browser = azuretls.Chrome
session.ApplyHTTP2(akamaiFingerprint)
response, _ := session.Get("https://" + addr)
```

**Але:** Це розриває MITM архітектуру - потребує переписування proxy logic.

---

## Висновок

| Фактор | Переможець |
|--------|------------|
| **TLS Fingerprinting** | Нічия (обидва використовують uTLS) |
| **HTTP/2 Fingerprinting** | Нічия |
| **HTTP/3 Support** | azuretls-client ✅ |
| **TCP Control** | Hero ✅ |
| **Browser Presets** | azuretls-client ✅ |
| **API Simplicity** | azuretls-client ✅ |
| **CFFI/Multi-language** | azuretls-client ✅ |
| **Browser Integration** | Hero ✅ |
| **Maintenance** | azuretls-client ✅ |

**Фінальний вердикт:**

- **Для браузерної автоматизації:** Hero архітектура правильна, але потребує оновлень
- **Для standalone HTTP:** azuretls-client значно кращий
- **Можна взяти найкраще з обох:** використовувати azuretls HTTP клієнт для API calls в межах Hero
