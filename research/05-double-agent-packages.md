# Double-Agent Packages (Детальний аналіз)

Double-Agent - це система для збору та аналізу browser fingerprint даних. Критично важлива для обходу bot detection.

> **Оновлено:** 2026-03-19
> **Аналіз версії:** hero-effect fork

---

## Огляд архітектури

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        DOUBLE AGENT SYSTEM                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────────┐         ┌─────────────────┐         ┌───────────────┐ │
│  │     COLLECT     │ ──────> │     ANALYZE     │ ──────> │   EMULATOR    │ │
│  │ (Збір даних)    │         │ (Аналіз даних)  │         │ (Використання)│ │
│  └────────┬────────┘         └────────┬────────┘         └───────────────┘ │
│           │                           │                                     │
│           ▼                           ▼                                     │
│  ┌─────────────────┐         ┌─────────────────┐                           │
│  │ Collect Plugins │         │ Analyze Plugins │                           │
│  │ (14 плагінів)   │         │ (12 плагінів)   │                           │
│  └─────────────────┘         └─────────────────┘                           │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Структура пакетів

### Основні пакети (apps/double-agent/)

| Пакет | Призначення | Залежності |
|-------|-------------|------------|
| `@double-agent/collect` | Збір fingerprint даних | config, interfaces, tls-server, @ulixee/commons |
| `@double-agent/analyze` | Аналіз даних та генерація правил | config, interfaces, @ulixee/commons, @ulixee/real-user-agents |
| `@double-agent/interfaces` | Спільні інтерфейси | @ulixee/real-user-agents |
| `@double-agent/config` | Конфігурація системи | @ulixee/commons, @ulixee/real-user-agents |
| `@double-agent/collect-controller` | HTTP сервер управління збором | collect, config |
| `@double-agent/runner` | Оркестрація запуску | analyze, collect, collect-controller, config |
| `@double-agent/tls-server` | TLS сервер для збору handshake даних | - |

### Collect Plugins (apps/double-agent-collect-plugins/)

| Пакет | Що збирає |
|-------|-----------|
| `browser-codecs` | Підтримка audio/video кодеків, MIME types |
| `browser-dom-environment` | DOM властивості, navigator, screen, window |
| `browser-fingerprints` | Canvas, WebGL, Audio fingerprint (FingerprintJS) |
| `browser-fonts` | Список доступних шрифтів |
| `browser-speech` | Speech Synthesis API |
| `http-assets` | Завантаження ресурсів (зображення, CSS, JS, шрифти) |
| `http-basic-cookies` | Cookie поведінка |
| `http-basic-headers` | HTTP заголовки, порядок, значення |
| `http-ua-hints` | Sec-CH-UA Client Hints |
| `http-websockets` | WebSocket handshake |
| `http-xhr` | XMLHttpRequest паттерни |
| `http2-session` | HTTP/2 SETTINGS, WINDOW_UPDATE |
| `tcp` | TCP TTL, window size |
| `tls-clienthello` | TLS handshake, cipher suites, extensions, JA3 |

### Analyze Plugins (apps/double-agent-analyze-plugins/)

| Пакет | Що аналізує |
|-------|-------------|
| `browser-codecs` | Консистентність кодеків |
| `browser-dom-environment` | DOM властивості vs очікувані |
| `browser-fingerprints` | Консистентність fingerprint в сесії |
| `http-assets` | Правильність завантаження ресурсів |
| `http-basic-cookies` | Cookie паттерни |
| `http-basic-headers` | Порядок та значення заголовків |
| `http-websockets` | WebSocket заголовки |
| `http-xhr` | XHR паттерни |
| `http2-session` | HTTP/2 налаштування |
| `tcp-ttl` | TCP параметри |
| `tls-clienthello` | TLS fingerprint відповідність |

---

## 1. @double-agent/collect

### Призначення
Основний модуль для збору fingerprint даних з реальних браузерів.

### Бізнес-функція
1. Створення сесій збору даних
2. Запуск HTTP/HTTPS/HTTP2/TLS серверів
3. Реєстрація маршрутів для плагінів
4. Збереження profile даних у JSON

### Ключові класи

```typescript
// Головний клас збору (index.ts)
class Collect {
  private sessionTracker: SessionTracker = new SessionTracker();

  async createSession(
    assignmentType: IAssignmentType,
    userAgentId: string,
    expectedUserAgentString?: string
  ): Promise<Session>

  getSession(sessionId: string): Session
  async deleteSession(session: Session): Promise<void>
  async shutdown(): Promise<void>
}

// Сесія збору (lib/Session.ts)
class Session {
  id: string;
  requests: IRequestDetails[];
  identifiers: IUserIdentifier[];
  assetsNotLoaded: IAsset[];
  expectedAssets: (IAsset & { fromUrl?: string })[];
  pluginsRun: Set<string>;
  userAgentString: string;
  expectedUserAgentString: string;

  savePluginProfileData<T>(plugin, data, options?): void
  getPluginProfileData<T>(plugin, defaultValue): T
}

// Плагін збору (lib/Plugin.ts)
class Plugin {
  id: string;
  dir: string;
  summary: string;
  routes: IRoutesByPath;

  initialize(): void
  registerRoute(protocol, path, handler): void
  registerPages(...pages: IPluginPage[]): void
  registerPagesOverTime(page: IPluginPage): void
}
```

### Інтерфейси (interfaces/)

```typescript
// IRequestContext.ts - контекст запиту
interface IRequestContext {
  server: BaseServer;
  req: IncomingMessage | Http2ServerRequest;
  res: ServerResponse | Http2ServerResponse;
  url: URL;
  requestDetails: IRequestDetails;
  session: Session;
  page: IPluginPage;
  nextPageLink: string;
  buildUrl(path: string, domainType?: DomainType, protocol?: string): string;
}

// IRequestDetails.ts - деталі запиту
interface IRequestDetails {
  url: string;
  method: string;
  time: Date;
  remoteAddress: string;
  userAgentString: string;
  headers: string[];
  origin: string;
  secureDomain: boolean;
  originType: OriginType;
  resourceType: ResourceType;
  domainType: DomainType;
  bodyJson?: object;
  referer?: string;
  cookies?: { [key: string]: string };
}

// IPlugin.ts - опис плагіна
interface IPlugin {
  id: string;
  dir: string;
  summary: string;
  outputFiles: number;
  changePluginOrder?(plugins: IPlugin[]): void;
  initialize(): void;
}
```

### Enums (interfaces/)

```typescript
// HostDomain.ts
enum HostDomain {
  Sub = "Sub",
  External = "External",
  Main = "Main",
}

// ResourceType.ts
enum ResourceType {
  Document = "Document",
  WebsocketUpgrade = "WebsocketUpgrade",
  Ico = "Ico",
  Preflight = "Preflight",
  Script = "Script",
  Stylesheet = "Stylesheet",
  XHR = "XHR",
  Fetch = "Fetch",
  Image = "Image",
  Media = "Media",
  Font = "Font",
  Other = "Other",
}

// OriginType.ts (з runtime функцією)
enum OriginType {
  None = "none",
  SameOrigin = "same-origin",
  SameSite = "same-site",
  CrossSite = "cross-site",
}
function getOriginType(type: string): OriginType | null;

// UserBucket.ts (з runtime функцією)
enum UserBucket {
  IP = "IP Address",
  TLS = "TLS Fingerprint",
  Browser = "Cross-Session Browser Fingerprint",
  BrowserSingleSession = "Single-Session Browser Fingerprint",
  Font = "Fonts Fingerprint",
  IpAndPortRange = "IP Address & Port Range",
  UserAgent = "UserAgent",
  UserCookie = "UserCookie",
}
function getUserBucket(type: string): UserBucket | null;
```

---

## 2. @double-agent/analyze

### Призначення
Аналіз зібраних даних та генерація "probe" правил для виявлення аномалій.

### Бізнес-функція
1. Завантаження profile даних з JSON файлів
2. Запуск analyze плагінів для кожного профілю
3. Генерація probes (перевірок) з matcher та scorer
4. Обчислення humanScore (0-100) для кожногоUserAgentId

### Ключові класи

```typescript
// Головний клас аналізу (index.ts)
class Analyze {
  plugins: Plugin[] = [];

  addIndividual(individualsDir: string, userAgentId: string): IResultFlag[]
  addOverTime(sessionsDir: string, pickType: IUserAgentToTestPickType): IResult[]
  generateTestResults(): IAnalyzeScore
}

// Результат аналізу
interface IAnalyzeScore {
  total: {
    [UserAgentToTestPickType.popular]: number;
    [UserAgentToTestPickType.random]: number;
  };
  individualByUserAgentId: { [userAgentId: string]: number };
  sessionsByPickType: {
    [UserAgentToTestPickType.popular]: ISessionScore[];
    [UserAgentToTestPickType.random]: ISessionScore[];
  };
}

// Plugin (lib/Plugin.ts)
class Plugin {
  id: string;
  description: string;
  probeBuckets: ProbeBucket[];
  layers: Layer[];

  initialize(profiles: IBaseProfile[]): void
  runIndividual(profile: IBaseProfile): IResultFlag[]
  runOverTime(profile: IBaseProfile, count: number): IResultFlag[]
}
```

### Matchers та Scorers

```typescript
// Matchers - порівнювачі (lib/matchers/)
class PositiveMatcher {
  static match(expected: any, actual: any): boolean {
    return expected === actual;
  }
}

// Scorers - оцінювачі (lib/scorers/)
class DiffGradient {
  // Градієнтна оцінка: чим більше різниця, тим менше бал
  score(diff: number, maxScore: number): number
}

class BooleanScorer {
  // Бінарна оцінка: 0 або maxScore
  score(matches: boolean, maxScore: number): number
}
```

---

## 3. @double-agent/interfaces

### Призначення
Спільні інтерфейси та утиліти для всіх double-agent пакетів.

### Експорти

```typescript
// Інтерфейси
export { default as IAssignment, AssignmentType, type IAssignmentType } from "./interfaces/IAssignment";
export { default as IBaseProfile } from "./interfaces/IBaseProfile";
export { default as ISessionPage } from "./interfaces/ISessionPage";
export { default as IUserAgentToTest, type IUserAgentToTestPickType, type IUserAgentToTestUsagePercent, UserAgentToTestPickType } from "./interfaces/IUserAgentToTest";

// Утиліти
export { extractProfilePathsMap, type IProfilePath, type IProfilePathsMap, importProfile } from "./lib/ProfileUtils";
export { createUserAgentIdFromIds, createUserAgentIdFromString } from "./lib/userAgentIds";
```

---

## 4. @double-agent/config

### Призначення
Глобальна конфігурація системи, домени, порти, шляхи.

### Конфігурація

```typescript
class Config {
  static userAgentIds: string[] = [];
  static dataDir: string;
  static profilesDataDir: string;  // browser-profile-data

  static collect = {
    port: number,  // COLLECT_PORT env
    domains: {
      MainDomain: string,
      SubDomain: string,
      TlsDomain: string,
      CrossDomain: string,
    },
    shouldGenerateProfiles: boolean,  // GENERATE_PROFILES env
    pluginStartingPort: number,
    pluginMaxPort: number,
    tcpNetworkDevice: string,
    tcpDebug: boolean,
    tlsPrintRaw: boolean,
    enableLetsEncrypt: boolean,
  };

  static runner = {
    assignmentsHost: string,  // DA_COLLECT_CONTROLLER_HOST env
  };

  static probesDataDir: string;
  static probeIdsMap: IProbeIdsMap;
}
```

---

## 5. @double-agent/collect-controller

### Призначення
HTTP сервер для управління процесом збору даних.

### Workflow

```
1. POST /assign → створення assignment
2. GET /assign?userId=x&assignmentId=y → отримання завдання
3. Scraper виконує завдання, відвідує сторінки
4. GET /download?userId=x&assignmentId=y → завантаження результатів
5. POST /finish?userId=x → завершення
```

### Код запуску

```typescript
// index.ts
import Collect from "@double-agent/collect";
import Server from "./lib/Server";

const collect = new Collect();
const server = new Server(collect, serverPort);
await server.start();

// Скрапер вказує на http://localhost:PORT
// Отримує assignment, відвідує сторінки, зберігає дані
```

---

## 6. @double-agent/runner

### Призначення
Оркестрація запуску збору та аналізу для багатьохUserAgentId.

### Залежності

```json
{
  "@double-agent/analyze": "workspace:*",
  "@double-agent/collect": "workspace:*",
  "@double-agent/collect-controller": "workspace:*",
  "@double-agent/config": "workspace:*",
  "@double-agent/interfaces": "workspace:*",
  "@ulixee/commons": "workspace:*",
  "@ulixee/real-user-agents": "workspace:*"
}
```

---

## 7. Інтеграція з Ulixee

### Залежності Ulixee пакетів

```
@double-agent/collect
  └─> @ulixee/unblocked-browser-emulator-builder
       └─> @ulixee/default-browser-emulator
            └─> @ulixee/unblocked-agent
                 └─> @ulixee/hero-core
                      └─> @ulixee/hero

@double-agent/analyze
  └─> @ulixee/unblocked-browser-emulator-builder
       └─> генерація даних для емулятора
```

### @ulixee/unblocked-browser-emulator-builder

Використовує дані double-agent для генерації:

```json
// Залежності від collect плагінів
{
  "@double-agent/analyze": "workspace:*",
  "@double-agent/analyze-http-basic-headers": "workspace:*",
  "@double-agent/collect": "workspace:*",
  "@double-agent/collect-browser-codecs": "workspace:*",
  "@double-agent/collect-browser-dom-environment": "workspace:*",
  "@double-agent/collect-browser-fonts": "workspace:*",
  "@double-agent/collect-browser-speech": "workspace:*",
  "@double-agent/collect-http-basic-headers": "workspace:*",
  "@double-agent/collect-http-ua-hints": "workspace:*",
  "@double-agent/collect-http2-session": "workspace:*",
  "@double-agent/collect-tls-clienthello": "workspace:*"
}
```

### @ulixee/unblocked-browser-profiler

Профілювання браузерів через BrowserStack:

```json
{
  "@double-agent/collect": "workspace:*",
  "@double-agent/config": "workspace:*",
  "@double-agent/runner": "workspace:*",
  "@ulixee/chrome-app": "^1.0.3",
  "@ulixee/double-agent-stacks": "workspace:*",
  "@ulixee/real-user-agents": "workspace:*"
}
```

---

## 8. Потік даних

### Повний цикл

```
┌──────────────────────────────────────────────────────────────────────────┐
│ 1. PROFILING                                                             │
│                                                                          │
│    Real Browser ──> Collect Plugin ──> Profile JSON                      │
│    (Chrome/FF)   (browser-fingerprints)  (chrome-120-windows.json)       │
└──────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ 2. ANALYSIS                                                              │
│                                                                          │
│    Profile JSON ──> Analyze Plugin ──> Probes JSON                       │
│    (fingerprint data)  (matcher+scorer)  (probe-ids, probe-buckets)      │
└──────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ 3. EMULATION DATA GENERATION                                             │
│                                                                          │
│    Probes JSON ──> Emulator Builder ──> Emulator Data                    │
│    (rules)         (aggregation)        (window-navigator.json, etc)     │
└──────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ 4. RUNTIME EMULATION                                                     │
│                                                                          │
│    Hero ──> Unblocked Agent ──> Browser Emulator ──> Modified Request    │
│    (scraper)  (MITM proxy)     (fingerprint spoof)  (headers, TLS, etc)  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Приклад використання

### Collect Plugin

```typescript
// apps/double-agent-collect-plugins/browser-fingerprints/index.ts
import Plugin from "@double-agent/collect/lib/Plugin";
import type IRequestContext from "@double-agent/collect/interfaces/IRequestContext";

export default class BrowserFingerprintPlugin extends Plugin {
  public initialize() {
    this.registerRoute("https", "/first", this.loadFingerprint);
    this.registerRoute("https", "/save", this.save);
    this.registerPages({ route: this.routes.https["/first"], waitForReady: true });
  }

  private loadFingerprint(ctx: IRequestContext) {
    const document = new Document(ctx);
    document.injectBodyTag(fingerprintScript(ctx));
    ctx.res.end(document.html);
  }

  private async save(ctx: IRequestContext) {
    const fingerprint = ctx.requestDetails.bodyJson;
    ctx.session.savePluginProfileData(this, fingerprint);
    ctx.res.end();
  }
}
```

### Analyze Plugin

```typescript
// apps/double-agent-analyze-plugins/browser-fingerprints/index.ts
import Plugin from "@double-agent/analyze/lib/Plugin";
import { PositiveMatcher } from "@double-agent/analyze/lib/matchers";
import { DiffGradient } from "@double-agent/analyze/lib/scorers";

export default class BrowserFingerprints extends Plugin {
  initialize(profiles: IFingerprintProfile[]) {
    const checks = [];
    for (const profile of profiles) {
      const checkGenerator = new CheckGenerator(profile);
      checks.push(...checkGenerator.checks);
    }

    this.initializeProbes({
      layerKey: "FNG",
      layerName: "Fingerprints",
      checks,
      matcher: PositiveMatcher,
      scorer: DiffGradient,
    });
  }
}
```

---

## 10. Структура файлів даних

### Profile Data

```
browser-profile-data/
├── chrome-120-windows/
│   ├── browser-codecs.json
│   ├── browser-dom-environment.json
│   ├── browser-fingerprints.json
│   ├── browser-fonts.json
│   ├── browser-speech.json
│   ├── http-assets.json
│   ├── http-basic-cookies.json
│   ├── http-basic-headers.json
│   ├── http-ua-hints.json
│   ├── http-websockets.json
│   ├── http-xhr.json
│   ├── http2-session.json
│   ├── tcp.json
│   └── tls-clienthello.json
├── chrome-119-macos/
│   └── ...
└── firefox-121-windows/
    └── ...
```

### Probes Data

```
probes-data/
├── layers.json              # шари перевірок
├── probes/
│   ├── browser-fingerprints.json
│   ├── http-basic-headers.json
│   └── tls-clienthello.json
└── probe-buckets/
    ├── browser-fingerprints.json
    ├── http-basic-headers.json
    └── tls-clienthello.json
```

### Emulator Data

```
apps/ulixee/unblocked-browser-emulator-builder/data/
├── browser-engine.json      # движок браузера
┴── codecs.json              # підтримка кодеків
├── fonts.json               # шрифти
├── http-client-headers.json # HTTP заголовки
├── http2-session.json       # HTTP/2 налаштування
├── navigator.json           # navigator властивості
├── speech.json              # Speech синтез
├── user-agent-hints.json    # Sec-CH-UA
└── window.json              # window властивості
```

---

## 11. Ключові інсайти

### Архітектурні рішення

1. **Plugin System**: Кожен аспект fingerprint - окремий плагін
2. **Separation of Concerns**: Collect збирає, Analyze аналізує
3. **Data-Driven**: Всі правила емуляції базуються на реальних даних
4. **Score-Based**: Кожна перевірка має scorer для оцінки "людяності"

### Інтеграція з Hero

1. **Default Browser Emulator** використовує дані double-agent
2. **MITM Proxy** модифікує запити на льоту
3. **UserAgent Selection** за ID (наприклад, "chrome-120-windows")
4. **Automatic Fingerprint Spoofing** прозорий для користувача

### Поточний статус

- Всі типи в `.ts` файлах (не `.d.ts`)
- Enum-и з runtime функціями в interfaces/
- ~156KB imports з interfaces/ по всьому проекту
- Pre-existing TypeScript помилки в analyze plugins
