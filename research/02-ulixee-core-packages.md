# Ulixee Core Packages (Детальний аналіз)

Це основні пакети для браузерної автоматизації та веб-скрапінгу.

---

## Архітектура зависностей

```
Hero (Client API)
    ↓
HeroCore (Core Engine)
    ↓
UnblockedAgent (Browser Automation)
    ↓
UnblockedAgentMitm (MITM Proxy)
    ↓
UnblockedSpecification (Interfaces)
```

---

## 1. @ulixee/hero

### Призначення
Клієнтський інтерфейс для Hero. Це те, що використовує розробник у своєму коді.

### Бізнес-функція
- Надає зручний API для браузерної автоматизації
- Підтримка async/await патерну для DOM взаємодії (awaited-dom)
- Можливість підключення до локального або віддаленого HeroCore

### Ключові експорти
```typescript
// Основні класи
Hero          // Головний клас для створення сесії
HeroReplay    // Відтворення записаних сесій
Tab           // Робота з вкладками
FrameEnvironment // Робота з фреймами
Resource      // Робота з ресурсами
WebsocketResource // WebSocket ресурси
DetachedElement // Відокремлені елементи

// Конфігурація
ConnectionToHeroCore // Підключення до ядра
IHeroCreateOptions // Опції створення Hero
IUserProfile // Профіль користувача

// Константи
BlockedResourceType // Типи блокованих ресурсів
LoadStatus // Статус завантаження
LocationStatus // Статус локатора
InteractionCommand // Команди взаємодії
KeyboardKey // Клавіші клавіатури
MouseButton // Кнопки миші
```

### Залежності
- `@ulixee/awaited-dom` - Async DOM взаємодія
- `@ulixee/commons` - Спільні утиліти
- `@ulixee/hero-interfaces` - Інтерфейси
- `@ulixee/hero-plugin-utils` - Утиліти плагінів
- `@ulixee/js-path` - Шляхи JavaScript
- `@ulixee/net` - Мережеві утиліти
- `@ulixee/unblocked-specification` - Специфікації
- `linkedom` - Легковажна DOM імплементація

---

## 2. @ulixee/hero-core

### Призначення
Ядро браузерної автоматизації. Керує сесіями, пулами браузерів, підключеннями.

### Бізнес-функція
- Оркестрація браузерних сесій
- Управління пулом браузерів (Pool)
- Збереження сесій у SQLite базу даних
- Інтеграція з плагінами (Browser Emulator, Human Emulator)
- Підтримка remote connections

### Ключові класи
```typescript
HeroCore {
  // Налаштування
  dataDir: string
  pool: Pool
  sessionRegistry: ISessionRegistry
  connections: Set<ConnectionToHeroClient>

  // Методи
  addConnection(transport): ConnectionToHeroClient
  start(): Promise<void>
  close(): Promise<void>
  use(PluginObject): void  // Підключення плагінів
  getUtilityContext(): Promise<BrowserContext>

  // Статичні методи
  HeroCore.start(options): Promise<HeroCore>
  HeroCore.shutdown(): Promise<void>
  HeroCore.addConnection(transport): ConnectionToHeroClient
  HeroCore.use(PluginObject): void
}

Session {
  // Управління сесією браузера
  id: string
  tabsById: Map<number, Tab>
  agent: Agent
  browserContext: BrowserContext
  commands: CommandRecorder
  plugins: CorePlugins

  // Методи
  createTab(): Promise<Tab>
  close(): Promise<void>
  exportUserProfile(): Promise<IUserProfile>
  getDetachedElements(): Promise<any>
  flush(): Promise<void>
}

Tab {
  // Управління вкладкою
  id: number
  page: Page
  session: Session
  frameEnvironmentsById: Map<number, FrameEnvironment>

  // Методи
  goto(url): Promise<Resource>
  waitForLoad(status): Promise<void>
  focus(): Promise<void>
  close(): Promise<void>
  mainFrameEnvironment: FrameEnvironment
}
```

### Залежності
- `@ulixee/unblocked-agent` - Браузерна автоматизація
- `@ulixee/unblocked-agent-mitm` - MITM проксі
- `@ulixee/default-browser-emulator` - Емуляція браузера
- `@ulixee/default-human-emulator` - Емуляція людини
- `@ulixee/hero-timetravel` - Відтворення сесій
- `better-sqlite3` - Локальна база даних
- `ws` - WebSocket

### Підсистеми
- `lib/Session.ts` - Управління сесіями
- `lib/Tab.ts` - Управління вкладками
- `lib/CommandRecorder.ts` - Запис команд
- `lib/CorePlugins.ts` - Плагіни ядра
- `dbs/` - Бази даних (SessionDb, Resources, etc.)
- `connections/` - Підключення до клієнтів

---

## 3. @ulixee/unblocked-agent

### Призначення
Програмований браузер на основі Chrome DevTools Protocol.

### Бізнес-функція
- Пряме управління Chrome через DevTools Protocol
- Управління браузерними контекстами
- Обробка сторінок та фреймів
- Інтерцепція запитів через MITM

### Ключові класи
```typescript
Pool {
  // Пул браузерів
  maxConcurrentAgents: number
  plugins: IUnblockedPluginClass[]

  // Методи
  start(): Promise<void>
  close(): Promise<void>
  getBrowser(emulator, id): Promise<Browser>
  createAgent(options): Agent
}

Browser {
  // Керування браузером
  id: string
  browserContexts: Map<string, BrowserContext>

  // Методи
  newContext(options): Promise<BrowserContext>
  close(): Promise<void>
}

BrowserContext {
  // Контекст браузера (incognito)
  id: string
  browser: Browser
  pages: Map<number, Page>
  resources: Resources
  websocketMessages: WebsocketMessages

  // Методи
  newPage(options): Promise<Page>
  close(): Promise<void>
}

Page {
  // Сторінка браузера
  id: number
  browserContext: BrowserContext
  devtoolsSession: DevtoolsSession
  mainFrame: Frame
  popupInitializeFn: Function

  // Методи
  goto(url): Promise<IHttpResourceLoadDetails>
  evaluate<T>(expression): Promise<T>
  addNewDocumentScript(script): Promise<void>
  interact(...interactions): Promise<void>
  close(): Promise<void>
}

Agent {
  // Агент автоматизації
  browserContext: BrowserContext
  mitmRequestSession: RequestSession
  plugins: Plugins

  // Методи
  open(): Promise<void>
  close(): Promise<void>
  newPage(options): Promise<Page>
  hook(hooks): void  // Хуки для плагінів
}
```

### Залежності
- `@ulixee/chrome-139-0` - Chrome binary
- `@ulixee/chrome-app` - Chrome application
- `@ulixee/unblocked-agent-mitm` - MITM проксі
- `devtools-protocol` - Типи CDP
- `ws` - WebSocket
- `tough-cookie` - Робота з cookie
- `nanoid` - Генерація ID

---

## 4. @ulixee/unblocked-agent-mitm

### Призначення
Man-in-the-middle проксі для перехоплення та модифікації HTTP запитів.

### Бізнес-функція
- Перехоплення всіх HTTP/HTTPS/WebSocket запитів
- Модифікація заголовків
- Кешування ресурсів
- Обробка SSL/TLS сертификатів
- Підтримка HTTP/2

### Ключові класи
```typescript
MitmProxy {
  // MITM проксі сервер
  // Перехоплення запитів

  // Методи
  start(): Promise<void>
  close(): Promise<void>
}

RequestSession {
  // Сесія запитів
  bypassResourceRegistrationForHost: Set<string>

  // Методи
  registerResource(resource): void
  modifyHeaders(resource): boolean
  blockResource(resource): void
}
```

### Залежності
- `@ulixee/unblocked-agent-mitm-socket` - Socket рівень
- `@ulixee/unblocked-specification` - Специфікації
- `dns-packet` - DNS пакети
- `moment` - Робота з датами

---

## 5. @ulixee/unblocked-specification

### Призначення
Спільні інтерфейси та типи для всього стеку Unblocked.

### Ключові експорти
```typescript
// Браузерні інтерфейси
interface IBrowser {
  id: string
  name: string
  fullVersion: string
}

interface IBrowserContext {
  id: string
  browserId: string
  isIncognito: boolean
}

interface IPage {
  id: number
  url: string
  parentId?: number
}

// Мережеві інтерфейси
interface IHttpResourceLoadDetails {
  url: URL
  method: string
  requestHeaders: IHttpHeaders
  responseHeaders?: IHttpHeaders
  resourceType: IResourceType
  body?: Buffer
}

interface IResourceType {
  Document: string
  Stylesheet: string
  Image: string
  Media: string
  Font: string
  Script: string
  XHR: string
  Fetch: string
  // ...
}

// Інтерфейси взаємодії
interface IInteraction {
  command: InteractionCommand
  mouseX?: number
  mouseY?: number
  keyboardKey?: KeyboardKey
}

// Плагін інтерфейси
interface IUnblockedPlugin {
  id: string
  type: PluginTypes

  onBrowserBeforeLaunch?(browser): void
  onNewPage?(page): Promise<void>
  onNewFrameProcess?(frame): Promise<void>
  // ...
}
```

---

## 6. @ulixee/commons

### Призначення
Спільні утиліти для всього монорепозиторію.

### Ключові модулі
```typescript
// Логування
Logger {
  log(moduleId): IBoundLog
}

// Event utilities
TypedEventEmitter<T> {
  emit(event, data): void
  on(event, handler): void
  once(event, handler): void
}

// Resolvable Promise
Resolvable<T> {
  promise: Promise<T>
  resolve(value): void
  reject(error): void
}

// Utils
bindFunctions(obj): void
pickRandom<T>(arr): T
sleep(ms): Promise<void>

// Shutdown handling
ShutdownHandler {
  register(callback): void
  unregister(callback): void
}
```

---

## 7. @ulixee/net

### Призначення
Мережеві утиліти та транспортні протоколи.

### Ключові класи
```typescript
ITransport {
  // Інтерфейс транспорту
  send(message): void
  onMessage: (handler) => void
  close(): void
}

EmittingTransportToClient {
  // Транспорт для клієнта
}

ConnectionToHeroCore {
  // З'єднання з HeroCore
}
```

---

## 8. @ulixee/hero-interfaces

### Призначення
TypeScript інтерфейси для Hero.

### Ключові інтерфейси
```typescript
interface IHeroCreateOptions {
  userAgent?: string
  viewport?: IViewport
  locale?: string
  timezoneId?: string
  showChrome?: boolean
  sessionKeepAlive?: boolean
  userProfile?: IUserProfile
  // ...
}

interface IUserProfile {
  userAgentString?: string
  cookies?: ICookie[]
  storage?: IStorage[]
  deviceProfile?: IDeviceProfile
}

interface ITabOptions {
  blockedResourceTypes?: BlockedResourceType[]
  loadTimeoutMilliseconds?: number
  // ...
}

// Plugin типи
enum PluginTypes {
  BrowserEmulator = 1,
  HumanEmulator = 2,
  CorePlugin = 3,
  // ...
}
```

---

## 9. @ulixee/js-path

### Призначення
Робота з JavaScript шляхами та селекторами.

### Функціональність
- Парсинг JS виразів
- Побудова шляхів до DOM елементів
- Серіалізація/десеріалізація шляхів

---

## 10. @ulixee/hero-plugin-utils

### Призначення
Утиліти для створення та управління плагінами.

### Ключові функції
```typescript
function extractPlugins(obj): IPluginClass[]
function requirePlugins(name): IPluginClass[]
```

---

## 11. @ulixee/awaited-dom

### Призначення (зовнішня залежність)
Async DOM взаємодія. Дозволяє працювати з DOM елементами через await/async патерн.

### Концепція
Замість прямого доступу до DOM, всі операції повертають Promise:
```typescript
const element = hero.document.querySelector('.class');
const text = await element.textContent;  // Async отримання
```

---

## Діаграма архітектури

```
┌─────────────────────────────────────────────────────────────┐
│                      USER APPLICATION                        │
│                         (@ulixee/hero)                       │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                        HERO CORE                             │
│              Session | Tab | CommandRecorder                 │
│                  SQLite Session DB                           │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    UNBLOCKED AGENT                           │
│          Pool | Browser | BrowserContext | Page             │
│                      Agent | Frame                           │
└───────────┬─────────────────────────────────┬───────────────┘
            │                                 │
            ▼                                 ▼
┌───────────────────────┐     ┌───────────────────────────────┐
│   PLUGINS             │     │      MITM PROXY               │
│ - BrowserEmulator     │     │  Request interception         │
│ - HumanEmulator       │     │  Header modification          │
│ - CorePlugins         │     │  SSL certificates             │
└───────────────────────┘     └───────────────────────────────┘
            │                                 │
            └─────────────┬───────────────────┘
                          ▼
              ┌───────────────────────┐
              │   CHROME BROWSER      │
              │   (DevTools Protocol) │
              └───────────────────────┘
```
