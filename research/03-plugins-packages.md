# Plugins Packages (Детальний аналіз)

Плагіни для емуляції браузера та поведінки людини - ключові для обходу bot detection.

---

## 1. @ulixee/default-browser-emulator

### Призначення
Емуляція браузера для обходу fingerprint detection. Згенеровано з DoubleAgent даних.

### Бізнес-функція
- Модифікація заголовків HTTP запитів (User-Agent, Sec-CH-UA, etc.)
- Ін'єкція JavaScript для зміни navigator, screen, window властивостей
- Емуляція Chrome devtools features
- Підтримка різних версій Chrome та операційних систем

### Ключові компоненти

#### Browser Engine
```typescript
BrowserEngine {
  // Управління версією браузера
  name: string
  fullVersion: string

  // Методи
  isVersionMatch(version): boolean
  getExecutablePath(): string
}
```

#### Header Modification
```typescript
// Модифікація HTTP заголовків
modifyHeaders(
  emulationProfile: IEmulationProfile,
  data: IBrowserData,
  userAgentData: IUserAgentData,
  resource: IHttpResourceLoadDetails
): boolean {
  // Встановлення правильного порядку заголовків
  // Модифікація User-Agent, Sec-CH-UA, Accept-Language
  // Додавання Client Hints headers
}
```

#### DOM Overrides (Injected Scripts)
```typescript
DomOverridesBuilder {
  // Будівник скриптів для ін'єкції

  add(name: InjectedScript, args): void
  addPageScript(script, args, callback): void
  build(type): { script, callbacks }
}

// Приклади injected scripts:
- navigator.ts      // navigator.userAgent, platform, userAgentData
- screen.ts         // screen.width, height, devicePixelRatio
- window.ts         // window.chrome, outerWidth/Height
- webgl.ts          // WebGL renderer, vendor
- audio.ts          // AudioContext fingerprint
- canvas.ts         // Canvas fingerprint
- fonts.ts          // Font detection
- iframe.ts         // iframe contentWindow
- media.ts          // Media devices
- plugins.ts        // navigator.plugins
- polyfill.*.ts     // Browser polyfills
```

#### Data Files
```
data/
├── browser-fingerprints.json  // Browser fingerprint profiles
├── window-frame.json          // Window frame sizes
├── window-navigator.json      // Navigator properties
├── dom-boundaries.json        // DOM structure expectations
└── ...
```

### Залежності
- `@ulixee/chrome-app` - Chrome application
- `@ulixee/commons` - Спільні утиліти
- `@ulixee/real-user-agents` - Реальні user agents
- `@ulixee/unblocked-agent-mitm-socket` - Socket рівень
- `@ulixee/unblocked-specification` - Специфікації
- `compare-versions` - Порівняння версій
- `tough-cookie` - Cookie
- `ua-parser-js` - Парсинг User-Agent

### Ключовий клас
```typescript
export default class BrowserEmulator implements IBrowserEmulator {
  static id = 'default-browser-emulator';

  // Конфігурація
  configure(options: IBrowserEmulatorConfig): void

  // Хуки для CDP
  onNewPage(page: Page): Promise<void>
  onNewFrameProcess(frame: Frame): Promise<void>
  beforeHttpRequest(resource: IHttpResourceLoadDetails): void

  // Дані емуляції
  getUserAgentData(): IUserAgentData
  getDeviceProfile(): IDeviceProfile

  // Допоміжні методи
  polyfillDocumentVisibility?: (page) => Promise<void>
}
```

---

## 2. @ulixee/default-human-emulator

### Призначення
Емуляція людської поведінки для обходи поведінкових детекторів.

### Бізнес-функція
- Генерація природніх рухів миші (Bezier curves)
- Імітація людських затримок
- Випадкові відхилення в діях
- Природній скролінг

### Ключові компоненти

#### Mouse Movement (Bezier Curves)
```typescript
Bezier {
  // Крива Безьє для природніх рухів миші
  points: IPoint[]
  derivativePoints: IPoint[][]

  constructor(...points: IPoint[])

  length(): number                // Довжина кривої
  getLookupTable(points): IPoint[] // Таблиця точок
  static compute(t, points): IPoint // Обчислення точки
}

// Приклад використання:
const bezier = new Bezier(startPoint, controlPoint1, controlPoint2, endPoint);
const path = bezier.getLookupTable(100);  // 100 точок траєкторії
```

#### HumanEmulator Implementation
```typescript
export default class HumanEmulator implements IHumanEmulator, IUnblockedPlugin {
  static id = 'default-human-emulator';

  // Миша
  mouseMove(mousePosition, target): Promise<void>
  mouseMoveByPath(path): Promise<void>
  mouseDown(): Promise<void>
  mouseUp(): Promise<void>
  click(): Promise<void>

  // Клавіатура
  type(text): Promise<void>
  keyPress(key): Promise<void>

  // Скролінг
  scroll(): Promise<void>

  // Затримки
  randomDelay(minMs, maxMs): Promise<void>
}
```

#### Movement Generation
```typescript
// Генерація траєкторії миші
function generatePath(
  start: IPoint,
  end: IPoint,
  spreadOverride?: number
): IPoint[] {
  // Створення кривої Безьє з контрольними точками
  const spread = spreadOverride ?? 10;

  // Контрольні точки для кривої
  const anchor1 = {
    x: start.x + (end.x - start.x) / 2,
    y: start.y + (Math.random() - 0.5) * spread * 2
  };
  const anchor2 = {
    x: start.x + (end.x - start.x) / 3,
    y: end.y + (Math.random() - 0.5) * spread * 2
  };

  const curve = new Bezier(start, anchor1, anchor2, end);
  return curve.getLookupTable();
}
```

### Залежності
- `@ulixee/commons` - Спільні утиліти
- `@ulixee/unblocked-specification` - Специфікації

### Типи взаємодій
```typescript
interface IInteractionStep {
  mousePosition?: IPoint
  mouseButton?: MouseButton
  keyCode?: string
  keyup?: boolean
  keydown?: boolean
  delayMillis?: number
  scrollPosition?: IPoint
}

enum InteractionCommand {
  move = 'move',
  scroll = 'scroll',
  click = 'click',
  doubleclick = 'doubleclick',
  keypress = 'keypress',
  type = 'type',
}
```

---

## 3. @ulixee/execute-js-plugin

### Призначення
Плагін для виконання JavaScript коду на сторінці.

### Бізнес-функція
- Безпечне виконання JS коду в контексті сторінки
- Повернення результатів виконання
- Обробка помилок

### API
```typescript
interface IExecuteJsPlugin {
  execute<T>(script: string, ...args: any[]): Promise<T>
}
```

---

## Взаємодія плагінів

### Plugin Hook System
```typescript
interface IUnblockedPlugin {
  // Browser hooks
  onBrowserBeforeLaunch?(browser: IBrowser): void
  onBrowserLaunch?(browser: IBrowser, launchOptions): void
  onBrowserClose?(browser: IBrowser): void

  // Context hooks
  onNewContext?(context: IBrowserContext, page: Page): Promise<void>

  // Page hooks
  onNewPage?(page: Page): Promise<void>
  onNewFrameProcess?(frame: IFrame): Promise<void>

  // Network hooks
  beforeHttpRequest?(resource: IHttpResourceLoadDetails): void
  beforeHttpResponse?(resource: IHttpResourceLoadDetails): void

  // DOM hooks
  addDomOverride?(
    location: 'page' | 'worker' | 'shared-worker',
    script: string,
    options: IDomOverrideOptions,
    callback: (data, frame) => void
  ): void
}
```

### Порядок завантаження
1. **BrowserEmulator** - налаштовує емуляцію браузера
2. **HumanEmulator** - налаштовує емуляцію поведінки
3. **Custom Plugins** - користувацькі плагіни

---

## Діаграма плагінів

```
┌─────────────────────────────────────────────────────────────┐
│                    UNBLOCKED AGENT                          │
│                     (Plugin Host)                           │
└───────────────────────────┬─────────────────────────────────┘
                            │
            ┌───────────────┼───────────────┐
            ▼               ▼               ▼
┌───────────────────┐ ┌─────────────┐ ┌──────────────────┐
│ BrowserEmulator   │ │HumanEmulator│ │ ExecuteJsPlugin  │
├───────────────────┤ ├─────────────┤ ├──────────────────┤
│ • Headers         │ │ • Mouse     │ │ • Script exec    │
│ • DOM Overrides   │ │ • Keyboard  │ │                  │
│ • Fingerprints    │ │ • Delays    │ │                  │
│ • User-Agent      │ │ • Scroll    │ │                  │
└───────────────────┘ └─────────────┘ └──────────────────┘
            │               │
            └───────┬───────┘
                    ▼
        ┌───────────────────────┐
        │   CHROME BROWSER      │
        │   (CDP Connection)    │
        └───────────────────────┘
```

---

## Важливі файли даних

### Browser Profiles
```json
{
  "chrome": {
    "versions": {
      "120": {
        "userAgent": "Mozilla/5.0...",
        "clientHints": {
          "brands": [...],
          "platform": "Windows",
          "platformVersion": "10.0.0"
        },
        "headers": {
          "order": ["accept", "accept-language", ...],
          "defaults": {...}
        }
      }
    }
  }
}
```

### DOM Structure
```json
{
  "window": {
    "outerWidth": 1920,
    "outerHeight": 1080,
    "innerWidth": 1920,
    "innerHeight": 969,
    "devicePixelRatio": 1
  },
  "screen": {
    "width": 1920,
    "height": 1080,
    "colorDepth": 24,
    "pixelDepth": 24
  },
  "navigator": {
    "platform": "Win32",
    "language": "en-US",
    "languages": ["en-US", "en"],
    "hardwareConcurrency": 8,
    "deviceMemory": 8
  }
}
```

---

## Використання

```typescript
import Hero from '@ulixee/hero';
import BrowserEmulator from '@ulixee/default-browser-emulator';
import HumanEmulator from '@ulixee/default-human-emulator';

// Плагіни підключаються автоматично
const hero = new Hero({
  userAgent: 'chrome-120',
});

// Або явно
HeroCore.use(BrowserEmulator);
HeroCore.use(HumanEmulator);

// Результат:
// 1. Всі HTTP запити модифіковані
// 2. DOM властивості змінені
// 3. Рухи миші природні
// 4. Затримки людські
```
