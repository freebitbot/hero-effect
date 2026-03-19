# Архітектура TLS/HTTP2/TCP Fingerprinting у Hero

> **Дата:** 2026-03-19
> **Мета:** Зрозуміти як реалізовано TLS/HTTP2/TCP fingerprinting у поточному проекті

---

## Огляд архітектури

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     HERO TLS/HTTP2/TCP FINGERPRINTING                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────┐         ┌──────────────┐         ┌─────────────────┐    │
│   │   Browser   │ ──────> │  MITM Proxy  │ ──────> │   Target Site   │    │
│   │ (Chromium)  │   HTTP  │ (Node.js +   │  TLS +  │                 │    │
│   │             │         │    Go addon) │  HTTP/2 │                 │    │
│   └─────────────┘         └──────────────┘         └─────────────────┘    │
│          │                        │                                         │
│          │ --proxy-server          │ uTLS (Go)                              │
│          │ localhost:port          │ TCP config                             │
│          ▼                        ▼                                         │
│   ┌──────────────────────────────────────────────────────────────────┐    │
│   │                    NETWORK LAYERS                                │    │
│   │                                                                  │    │
│   │   HTTP Headers ────> HeadersHandler.ts (Node.js)                │    │
│   │   TLS ClientHello -> emulate_tls.go (Go/uTLS)                   │    │
│   │   TCP Settings ───> configure_tcp.go (Go/syscall)               │    │
│   │   HTTP/2 Settings > IHttp2ConnectSettings (Node.js)             │    │
│   └──────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Ключовий інсайт: Це НЕ змінює browser fingerprint!

**Важливо розуміти:** Весь TLS/HTTP2/TCP fingerprinting відбувається **НЕ** на рівні браузера, а на рівні **MITM Proxy**, який діє як посередник між браузером і цільовим сайтом.

### Як це працює:

1. **Браузер** робить HTTP запит до `localhost:proxyPort`
2. **MITM Proxy** перехоплює запит
3. **Proxy** відкриває **окреме з'єднання** до цільового сайту
4. **Proxy** налаштовує TLS/TCP/HTTP2 параметри цього з'єднання
5. **Proxy** передає дані між браузером і сервером

---

## Детальна архітектура

### 1. Браузер + Proxy

```typescript
// apps/ulixee/unblocked-agent/lib/Browser.ts:417-422

// Браузер запускається з proxy флагом
if (!launchArgs.some((x) => x.startsWith("--proxy-server"))) {
  launchArgs.push(
    "--proxy-bypass-list=<-loopback>",
    `--proxy-server=localhost:${options.proxyPort}`,
  );
}
```

**Що це означає:**
- Chromium налаштовується використовувати локальний проксі
- Весь HTTP/HTTPS трафік йде через `localhost:proxyPort`
- Проксі працює на порту, який виділяє MitmProxy

---

### 2. MITM Proxy (Node.js + Go)

#### Node.js частина

```typescript
// apps/ulixee/unblocked-agent-mitm/lib/MitmProxy.ts

export default class MitmProxy {
  // Три сервери для різних протоколів
  private readonly httpServer: http.Server;      // HTTP/1.1
  private readonly httpsServer: https.Server;    // HTTPS/1.1
  private readonly http2Server: http2.Http2SecureServer; // HTTP/2

  constructor(options: IMitmProxyOptions) {
    // HTTP сервер
    this.httpServer = http.createServer({ insecureHTTPParser: true });
    this.events.on(this.httpServer, "request", this.onHttpRequest.bind(this, false));

    // HTTPS сервер
    this.httpsServer = https.createServer({ insecureHTTPParser: true });
    this.events.on(this.httpsServer, "request", this.onHttpRequest.bind(this, true));

    // HTTP/2 сервер
    this.http2Server = http2.createSecureServer({ allowHTTP1: true });
    this.events.on(this.http2Server, "request", this.onHttpRequest.bind(this, true));
  }
}
```

#### Go частина (unblocked-agent-mitm-socket)

Go addon відповідає за низькорівневе налаштування з'єднань:

```
apps/ulixee/unblocked-agent-mitm-socket/
├── go/
│   ├── connect.go           # Головний процес, IPC з Node.js
│   ├── emulate_tls.go       # TLS ClientHello емуляція (uTLS)
│   ├── configure_tcp.go     # TCP TTL/Window налаштування
│   ├── dialer.go            # Встановлення з'єднання
│   └── domain_socket.go     # IPC між Node.js і Go
```

---

### 3. TLS Fingerprinting (JA3)

#### Реалізація через uTLS

```go
// apps/ulixee/unblocked-agent-mitm-socket/go/emulate_tls.go

import tls "github.com/refraction-network//utls"

func EmulateTls(dialConn net.Conn, addr string, sessionArgs SessionArgs, connectArgs ConnectArgs) (*tls.UConn, error) {
    var spec tls.ClientHelloSpec

    // Вибір специфікації за версією Chrome
    if strings.HasPrefix(sessionArgs.ClientHelloId, "chrome-") {
        chromeVersionBit := strings.Split(sessionArgs.ClientHelloId, "chrome-")[1]
        chromeVersion, _ := strconv.ParseInt(chromeVersionBit, 10, 0)

        if chromeVersion < 83 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_72)
        } else if chromeVersion < 91 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_83)
        } else if chromeVersion < 98 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_96)
        } else if chromeVersion < 110 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_100)
        } else if chromeVersion < 119 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_106_Shuffle)
        } else if chromeVersion < 124 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_120)
        } else if chromeVersion < 131 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_120_PQ)
        } else if chromeVersion < 133 {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_131)
        } else {
            spec, _ = tls.UTLSIdToSpec(tls.HelloChrome_133)
        }
    }

    // Створення TLS з'єднання з кастомним ClientHello
    tlsConn := tls.UClient(dialConn, &tlsConfig, tls.HelloCustom)
    err = tlsConn.ApplyPreset(&spec)
    err = tlsConn.Handshake()

    return tlsConn, nil
}
```

**Бібліотека uTLS:**
- GitHub: https://github.com/refraction-networking/utls
- Дозволяє емулювати TLS ClientHello різних браузерів
- Підтримує Chrome, Firefox, Safari, Edge
- Генерує правильний порядок cipher suites, extensions, версії

**Що емулюється:**
- Cipher suites порядок
- Extensions порядок і значення
- Supported versions
- Signature algorithms
- ALPN protocols
- Key share groups
- GREASE values (randomization)

---

### 4. TCP Settings

```go
// apps/ulixee/unblocked-agent-mitm-socket/go/configure_tcp.go

func ConfigureSocket(ttl int, windowSize int) func(network string, addr string, c syscall.RawConn) error {
    return func(network string, addr string, c syscall.RawConn) error {
        configErr := c.Control(func(fd uintptr) {
            if ttl > 0 {
                err := ConfigureTcpTtl(fd, ttl)  // IP_TTL
            }
            if windowSize > 0 {
                err := ConfigureTcpWindowSize(fd, windowSize)  // SO_RCVBUF
            }
        })
        return configErr
    }
}
```

**Що налаштовується:**
- `IP_TTL` - Time To Live пакетів
- `SO_RCVBUF` - TCP window size
- `TCP_NODELAY` - Nagle's algorithm (для websocket)
- `SO_KEEPALIVE` - Keep-alive налаштування

---

### 5. HTTP/2 Settings

```typescript
// apps/ulixee/unblocked-specification/agent/net/IHttp2ConnectSettings.ts

export default interface IHttp2ConnectSettings {
    settings: http2.Settings;
    localWindowSize: number;
}
```

**Hook для налаштування:**

```typescript
// apps/ulixee/unblocked-specification/agent/hooks/INetworkHooks.ts

export default interface INetworkHooks {
    onHttp2SessionConnect?(
        request: IHttpResourceLoadDetails,
        settings: IHttp2ConnectSettings,
    ): Promise<any> | void;
}
```

**Що можна налаштувати:**
- `settings.enablePush` (SETTINGS_ENABLE_PUSH)
- `settings.initialWindowSize` (SETTINGS_INITIAL_WINDOW_SIZE)
- `settings.maxFrameSize` (SETTINGS_MAX_FRAME_SIZE)
- `settings.maxConcurrentStreams` (SETTINGS_MAX_CONCURRENT_STREAMS)
- `settings.maxHeaderListSize` (SETTINGS_MAX_HEADER_LIST_SIZE)
- `settings.headerTableSize` (SETTINGS_HEADER_TABLE_SIZE)
- `localWindowSize` - локальний window size

---

### 6. HTTP Headers

```typescript
// apps/ulixee/unblocked-agent-mitm/handlers/HeadersHandler.ts

export default class HeadersHandler {
    public static cleanResponseHeaders(ctx, originalRawHeaders): IHttpHeaders {
        // Видаляє проблемні заголовки
        if (lowerHeaderName === "public-key-pins" ||  // HPKP
            lowerHeaderName === HTTP2_HEADER_STATUS ||
            lowerHeaderName === "http2-settings") {
            continue;
        }
        // ...
    }
}
```

---

## Потік даних

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           ЗАПИТ ДО САЙТУ                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. Browser                                                                 │
│     │                                                                       │
│     │ GET https://example.com/api/data                                      │
│     │ Host: localhost:8080  (proxy)                                        │
│     ▼                                                                       │
│  2. MitmProxy (Node.js)                                                     │
│     │                                                                       │
│     │ - Парсить запит                                                       │
│     │ - Визначає resource type                                             │
│     │ - Отримує browserRequestId через CDP                                 │
│     │                                                                       │
│     ▼                                                                       │
│  3. Go Process (IPC)                                                        │
│     │                                                                       │
│     │ Dial("example.com:443")                                               │
│     │ ├── Configure TCP (TTL, Window)                                       │
│     │ ├── EmulateTLS (uTLS with Chrome spec)                               │
│     │ │   └── ClientHello з правильними cipher suites, extensions          │
│     │ └── HTTP/2 Settings якщо потрібно                                     │
│     │                                                                       │
│     ▼                                                                       │
│  4. Target Server                                                           │
│     │                                                                       │
│     │ Бачить: Chrome 120 fingerprint                                        │
│     │ Не бачить: Node.js, MITM Proxy                                        │
│     ▼                                                                       │
│  5. Response → MitmProxy → Browser                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Ключові файли

| Функція | Файл | Мова |
|---------|------|------|
| Proxy сервер | `apps/ulixee/unblocked-agent-mitm/lib/MitmProxy.ts` | TypeScript |
| HTTP handler | `apps/ulixee/unblocked-agent-mitm/handlers/HttpRequestHandler.ts` | TypeScript |
| Headers модифікація | `apps/ulixee/unblocked-agent-mitm/handlers/HeadersHandler.ts` | TypeScript |
| TLS емуляція | `apps/ulixee/unblocked-agent-mitm-socket/go/emulate_tls.go` | Go |
| TCP налаштування | `apps/ulixee/unblocked-agent-mitm-socket/go/configure_tcp.go` | Go |
| IPC зв'язок | `apps/ulixee/unblocked-agent-mitm-socket/go/connect.go` | Go |
| Browser proxy config | `apps/ulixee/unblocked-agent/lib/Browser.ts` | TypeScript |
| HTTP/2 hooks | `apps/ulixee/unblocked-specification/agent/hooks/INetworkHooks.ts` | TypeScript |

---

## Відповіді на запитання

### Q: Чи правильно я розумію що запускається браузер зі всіма потрібними флагами, паралельно запускається проксі?

**A: Так, правильно!**

1. Браузер запускається з `--proxy-server=localhost:PORT`
2. Паралельно працює MitmProxy (Node.js)
3. Go process відповідає за низькорівневі з'єднання

### Q: Проксі робить всю роботу?

**A: Так!**

Proxy:
1. Перехоплює всі запити від браузера
2. Відкриває **нове** з'єднання до цільового сайту
3. Налаштовує TLS/TCP/HTTP2 параметри цього з'єднання
4. Передає дані в обох напрямках

### Q: Браузер не модифікується?

**A: Ні!**

Браузер:
- Робить стандартні HTTP запити до localhost
- Не знає про TLS fingerprinting
- Не модифікує свій network stack

Вся "магія" відбувається в Go addon, який використовує **uTLS** бібліотеку.

---

## Залежності

### Go бібліотеки

```go
import (
    tls "github.com/refraction-networking/utls"  // TLS емуляція
    "golang.org/x/net/http2"                     // HTTP/2 підтримка
)
```

### uTLS - ключова бібліотека

- **GitHub:** https://github.com/refraction-networking/utls
- **Опис:** Low-level TLS library that can mimic Chrome/Firefox/Safari ClientHello
- **Підтримувані браузери:**
  - Chrome 72-133
  - Firefox 55-133
  - Safari 13-16
  - Edge 85-120
  - iOS/Android variants

---

## Як це можна замінити?

### Варіант 1: Прямий використання uTLS

Якщо переходимо на Apify Fingerprint Suite, для TLS можна:

1. Залишити поточний Go addon
2. Або написати новий proxy на Go з uTLS

### Варіант 2: curl-impersonate

curl-impersonate теж використовує uTLS під капотом:
- Може робити запити з TLS fingerprint браузера
- Є Node.js біндинги: `node-curl-impersonate`

### Варіант 3: tls-client (Python/Go)

Бібліотека `bogdanfinn/tls-client`:
- Go/Python реалізація
- Аналог uTLS
- Підтримує JA3 емуляцію

---

## Висновок

TLS/HTTP2/TCP fingerprinting у Hero реалізовано через:

1. **MITM Proxy** (Node.js) - перехоплює запити
2. **Go addon** з **uTLS** - емулює TLS ClientHello
3. **syscall** - налаштовує TCP параметри
4. **http2 module** - налаштовує HTTP/2 settings

Це **повністю окрема** система від browser fingerprinting (який робить Apify Fingerprint Suite).

**Для заміни @double-agent потрібно зберегти:**
- Go addon з uTLS (або знайти альтернативу)
- HTTP/2 hooks
- TCP налаштування (опціонально)
