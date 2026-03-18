# Double-Agent Packages (Детальний аналіз)

Double-Agent - це система для збору та аналізу browser fingerprint даних. Критично важлива для обходу bot detection.

---

## Огляд архітектури

```
┌──────────────────────────────────────────────────────────────────┐
│                     DOUBLE AGENT SYSTEM                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌─────────────────┐         ┌─────────────────┐                 │
│  │     COLLECT     │ ──────> │     ANALYZE     │                 │
│  │ (Збір даних)    │         │ (Аналіз даних)  │                 │
│  └────────┬────────┘         └────────┬────────┘                 │
│           │                           │                           │
│           ▼                           ▼                           │
│  ┌─────────────────┐         ┌─────────────────┐                 │
│  │ Collect Plugins │         │ Analyze Plugins │                 │
│  │                 │         │                 │                 │
│  │ • TLS           │         │ • TLS           │                 │
│  │ • HTTP Headers  │         │ • HTTP Headers  │                 │
│  │ • Browser DOM   │         │ • Fingerprints  │                 │
│  │ • WebSockets    │         │ • Codecs        │                 │
│  │ • Fonts         │         │ • Assets        │                 │
│  │ • Fingerprints  │         │                 │                 │
│  └─────────────────┘         └─────────────────┘                 │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ Browser Emulator │
                    │ (Використовує   │
                    │  дані аналізу)  │
                    └─────────────────┘
```

---

## 1. @double-agent/collect

### Призначення
Основний модуль для збору fingerprint даних з браузерів.

### Бізнес-функція
- Запуск тестових браузерів
- Збір даних про browser fingerprint
- Збереження профілів для різних User Agent

### Ключові класи

```typescript
class Session {
  // Сесія збору даних
  id: string
  userAgentId: string
  plugins: Plugin[]

  // Методи
  async run(): Promise<void>
  savePluginProfileData<T>(plugin, data): void
  generatePages(): IPluginPage[]
}

class Plugin {
  // Базовий клас для плагінів збору
  id: string
  routes: IRoute[]

  // Методи
  initialize(): void
  registerRoute(path, handler): void
  registerPages(pages): void
}

class CollectRunner {
  // Запуск збору даних
  async run(config): Promise<IProfile[]>
}
```

### Збережені дані
```
profiles/
├── chrome-120-windows/
│   ├── browser-dom-environment.json
│   ├── browser-fingerprints.json
│   ├── http-basic-headers.json
│   ├── tls-clienthello.json
│   └── ...
└── chrome-119-macos/
    └── ...
```

---

## 2. @double-agent/analyze

### Призначення
Аналіз зібраних даних та генерація правил для емуляції.

### Бізнес-функція
- Порівняння fingerprint даних між браузерами
- Виявлення аномалій
- Генерація правил для Browser Emulator
- Створення scored checks

### Ключові класи

```typescript
class Analyzer {
  // Аналізатор даних
  plugins: IAnalyzePlugin[]

  // Методи
  async analyze(profiles): Promise<IAnalysisResult>
  generateChecks(): ICheck[]
}

interface ICheck {
  // Перевірка для емуляції
  id: string
  description: string
  matcher: IMatcher
  scorer: IScorer
}
```

### Типи перевірок

```typescript
// Базові типи перевірок
class BaseCheck {
  matcher: IMatcher
  scorer: IScorer
}

// Приклади:
class BooleanCheck extends BaseCheck { }
class StringCheck extends BaseCheck { }
class NumberCheck extends BaseCheck { }
class PathCheck extends BaseCheck { }
class StringArrayCheck extends BaseCheck { }
```

### Matchers та Scorers

```typescript
// Matchers - порівнювачі
class BaseMatcher {
  match(expected, actual): boolean
}

class PositiveMatcher extends BaseMatcher {
  // Позитивне порівняння
}

// Scorers - оцінювачі
class BaseScorer {
  score(diff: number): number
}

class DiffGradient extends BaseScorer {
  // Градієнтна оцінка різниці
}
```

---

## 3. Collect Plugins

### @double-agent/collect-browser-dom-environment

**Призначення:** Збір DOM властивостей браузера.

**Збирає:**
- window.outerWidth/outerHeight
- screen.width/height/colorDepth
- navigator.platform/language/hardwareConcurrency
- devicePixelRatio

### @double-agent/collect-browser-fingerprints

**Призначення:** Збір browser fingerprint даних.

**Збирає:**
- Canvas fingerprint
- WebGL fingerprint
- Audio fingerprint
- Font detection results

### @double-agent/collect-http-basic-headers

**Призначення:** Збір HTTP заголовків.

**Збирає:**
- Порядок заголовків
- Значення за замовчуванням
- Client Hints (Sec-CH-UA)

### @double-agent/collect-tls-clienthello

**Призначення:** Збір TLS handshake даних.

**Збирає:**
- TLS версія
- Cipher suites
- Extensions
- JA3 fingerprint

### @double-agent/collect-http2-session

**Призначення:** Збір HTTP/2 параметрів.

**Збирає:**
- SETTINGS frame
- WINDOW_UPDATE
- Priority settings

### @double-agent/collect-http-websockets

**Призначення:** Збір WebSocket даних.

**Збирає:**
- WebSocket handshake headers
- Extensions

### @double-agent/collect-browser-fonts

**Призначення:** Визначення доступних шрифтів.

### @double-agent/collect-browser-codecs

**Призначення:** Збір інформації про кодеки.

**Збирає:**
- Audio codecs
- Video codecs
- MIME types support

---

## 4. Analyze Plugins

### @double-agent/analyze-browser-fingerprints

**Призначення:** Аналіз fingerprint даних.

**Генерує:**
- SessionFingerprintCheck - перевірка консистентності
- UniqueFingerprintCheck - перевірка унікальності

```typescript
class CheckGenerator {
  extractChecks() {
    const fingerprints = profile.data.map(x => x.browserHash);

    this.checks.push(
      new SessionFingerprintCheck(
        { userAgentId },
        { path: 'fingerprint-js' },
        fingerprints
      )
    );

    this.checks.push(
      new UniqueFingerprintCheck(
        { isUniversal: true },
        { path: 'fingerprint-js' },
        fingerprints[0]
      )
    );
  }
}
```

### @double-agent/analyze-tls-clienthello

**Призначення:** Аналіз TLS handshake.

**Генерує:**
- Перевірки cipher suites
- Перевірки extensions

### @double-agent/analyze-http-basic-headers

**Призначення:** Аналіз HTTP заголовків.

**Генерує:**
- Перевірки порядку заголовків
- Перевірки значень

### @double-agent/analyze-http-assets

**Призначення:** Аналіз завантаження ресурсів.

**Генерує:**
- Перевірки Accept заголовків
- Перевірки завантаження зображень/стилів

---

## 5. Контролер збору

### @double-agent/collect-controller

**Призначення:** HTTP сервер для управління збором даних.

**API Endpoints:**

```typescript
// Створення assignment (завдання)
POST /assign
{
  userId: string,
  userAgentsToTestPath: string
}
→ { assignments: IAssignment[] }

// Активація assignment
GET /assign?userId=x&assignmentId=y
→ { assignment: IAssignment }

// Завантаження результатів
GET /download?userId=x&assignmentId=y
→ tar.gz з результатами

// Завершення
POST /finish?userId=x
→ { finished: true }
```

---

## 6. Використання даних

### Генерація Browser Emulator

```bash
# Запуск збору даних
npx @double-agent/collect run --browsers chrome,firefox

# Аналіз даних
npx @double-agent/analyze

# Результат:
# apps/plugins/default-browser-emulator/data/
# ├── browser-fingerprints.json
# ├── http-headers.json
# ├── tls-profiles.json
# └── ...
```

### Інтеграція з Hero

```typescript
import Hero from '@ulixee/hero';
import BrowserEmulator from '@ulixee/default-browser-emulator';

// BrowserEmulator використовує дані Double-Agent
const hero = new Hero({
  userAgent: 'chrome-120',  // Вибирає відповідний профіль
});

// Всі fingerprint властивості автоматично емулюються:
// - HTTP заголовки в правильному порядку
// - navigator.userAgent, platform
// - screen dimensions
// - TLS cipher suites
// - HTTP/2 settings
```

---

## 7. Структура даних

### Profile Format

```json
{
  "userAgentId": "chrome-120-windows",
  "data": [
    {
      "browserHash": "abc123...",
      "hashType": "fingerprint-js",
      "data": {
        "canvas": "...",
        "webgl": "...",
        "audio": "..."
      }
    }
  ]
}
```

### Check Format

```json
{
  "id": "fingerprint-js-consistent",
  "description": "Fingerprint should be consistent within session",
  "matcher": {
    "type": "positive",
    "expected": ["abc123", "abc123", "abc123"]
  },
  "scorer": {
    "type": "binary",
    "score": 100
  }
}
```

---

## 8. Залежності

```json
{
  "@double-agent/collect": {
    "dependencies": [
      "@double-agent/collect-controller",
      "@double-agent/config",
      "@double-agent/tls-server",
      "@ulixee/commons",
      "axios",
      "ws",
      "p-queue"
    ]
  },
  "@double-agent/analyze": {
    "dependencies": [
      "@double-agent/collect",
      "@double-agent/config",
      "@ulixee/commons",
      "@ulixee/real-user-agents",
      "lodash",
      "humanize-string"
    ]
  }
}
```

---

## Діаграма потоку даних

```
┌───────────────┐
│ Real Browsers │
│ (Chrome, FF)  │
└───────┬───────┘
        │ Збір fingerprint
        ▼
┌───────────────────┐
│ Collect Plugins   │
│ • DOM Environment  │
│ • HTTP Headers     │
│ • TLS Handshake    │
│ • Fingerprints     │
└─────────┬─────────┘
          │ Профілі (JSON)
          ▼
┌───────────────────┐
│ Analyze Plugins   │
│ • Порівняння       │
│ • Аномалії         │
│ • Rules генерація  │
└─────────┬─────────┘
          │ Правила емуляції
          ▼
┌───────────────────┐
│ Browser Emulator  │
│ (використовує     │
│  правила)         │
└───────────────────┘
```
