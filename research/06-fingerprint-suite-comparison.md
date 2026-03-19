# Порівняльний аналіз: @double-agent vs Apify Fingerprint Suite

> **Дата:** 2026-03-19
> **Мета:** Оцінити можливість заміни @double-agent на Apify Fingerprint Suite

---

## Огляд рішень

### @double-agent (поточне)
Система збору та аналізу fingerprint даних для генерації правил емуляції браузера.

### Apify Fingerprint Suite
Готовий набір npm пакетів для генерації та ін'єкції fingerprint.

---

## Архітектурне порівняння

### @double-agent

```
┌─────────────────────────────────────────────────────────────────────┐
│                    АРХІТЕКТУРА DOUBLE-AGENT                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────────────────┐   │
│  │   COLLECT   │   │   ANALYZE   │   │  BROWSER EMULATOR DATA  │   │
│  │  14 plugins │ → │  12 plugins │ → │   (for unblocked-agent) │   │
│  └─────────────┘   └─────────────┘   └─────────────────────────┘   │
│         │                 │                    │                   │
│         ▼                 ▼                    ▼                   │
│  Profile JSONs      Probes JSONs      Emulator JSONs              │
│  (raw data)         (rules)           (runtime data)              │
│                                                                     │
│  МАЙЖЕ 30 ПАКЕТІВ!                                                 │
│  - @double-agent/collect                                            │
│  - @double-agent/analyze                                            │
│  - @double-agent/interfaces                                         │
│  - @double-agent/config                                             │
│  - 14 collect plugins                                               │
│  - 12 analyze plugins                                               │
│  - @ulixee/real-user-agents (ще один складний пакет)               │
└─────────────────────────────────────────────────────────────────────┘
```

### Apify Fingerprint Suite

```
┌─────────────────────────────────────────────────────────────────────┐
│                АРХІТЕКТУРА FINGERPRINT SUITE                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │              5 ПАКЕТІВ (ВСЬОГО!)                             │   │
│  ├─────────────────────────────────────────────────────────────┤   │
│  │                                                             │   │
│  │  fingerprint-generator                                      │   │
│  │  ├── generative-bayesian-network (Bayesian Network AI)      │   │
│  │  └── header-generator (HTTP headers)                        │   │
│  │                                                             │   │
│  │  fingerprint-injector (Playwright/Puppeteer injection)      │   │
│  │                                                             │   │
│  │  generator-networks-creator (model training)                │   │
│  │                                                             │   │
│  │  header-order-collector (data collection)                   │   │
│  │                                                             │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  ДАНІ ВЖЕ ВКЛЮЧЕНІ В ПАКЕТИ!                                       │
│  - fingerprint-network-definition.zip                              │
│  - header-network-definition.zip                                   │
│  - browser-helper-file.json                                        │
│  - headers-order.json                                              │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Детальне порівняння

| Критерій | @double-agent | Apify Fingerprint Suite |
|----------|---------------|-------------------------|
| **Кількість пакетів** | ~30 | 5 |
| **Складність** | Висока (collect → analyze → emulator) | Низька (generator → injector) |
| **Збір даних** | Потрібен самому (BrowserStack/локально) | Вже зібрані, оновлюються автоматично |
| **Модель даних** | Probes + Matchers + Scorers | Bayesian Network (AI-based) |
| **Підтримка** | Solo розробник = неможливо | Apify команда, активно розвивається |
| **Оновлення даних** | Потрібно запускати collect/analyze | Місячні оновлення від Apify |
| **Інтеграція** | Тільки з unblocked-agent | Playwright, Puppeteer out of the box |
| **Ліцензія** | MIT | Apache-2.0 |
| **npm завантаження** | - | 100k+/тиждень |
| **GitHub stars** | - | 500+ |

---

## Функціональне порівняння

### Що генерує Fingerprint Suite

```typescript
interface Fingerprint {
  screen: {
    availHeight: number;
    availWidth: number;
    colorDepth: number;
    height: number;
    width: number;
    devicePixelRatio: number;
    // ... ще 10+ полів
  };
  navigator: {
    userAgent: string;
    userAgentData: UserAgentData; // Sec-CH-UA
    platform: string;
    hardwareConcurrency: number;
    deviceMemory: number;
    language: string;
    languages: string[];
    // ... ще 15+ полів
  };
  videoCard: {
    renderer: string;
    vendor: string;
  };
  videoCodecs: Record<string, string>;
  audioCodecs: Record<string, string>;
  pluginsData: Record<string, string>;
  multimediaDevices: string[];
  fonts: string[];
  battery?: Record<string, string>;
  mockWebRTC: boolean;
}
```

### Що НЕ генерує Fingerprint Suite

1. **TLS ClientHello** - немає JA3 fingerprint
2. **HTTP/2 Settings** - немає HTTP/2 параметрів
3. **TCP Parameters** - немає TTL, window size
4. **WebSocket Headers** - обмежена підтримка

### Чого НЕМАЄ в @double-agent

1. **Готові до використання дані** - треба збирати самому
2. **Проста інтеграція** - потрібен unblocked-agent
3. **Автоматичні оновлення** - треба підтримувати самому

---

## Код: Використання

### @double-agent (поточний шлях)

```typescript
// 1. Зібрати дані (складно!)
import Collect from '@double-agent/collect';
import { getAllPlugins } from '@double-agent/collect/plugins';

const collect = new Collect();
const session = await collect.createSession('cross-browser', 'chrome-120');

// 2. Проаналізувати дані (ще складніше!)
import Analyze from '@double-agent/analyze';
const analyze = new Analyze(profileCountOverTime, probesDataDir);
const flags = analyze.addIndividual(individualsDir, userAgentId);

// 3. Створити emulator data (через builder)
import { generateEmulatorData } from '@ulixee/unblocked-browser-emulator-builder';

// 4. Використати в hero
import Hero from '@ulixee/hero';
const hero = new Hero({ userAgent: 'chrome-120' });
```

### Apify Fingerprint Suite (простий шлях)

```typescript
// 1. Згенерувати fingerprint (один виклик!)
import { FingerprintGenerator } from 'fingerprint-generator';

const generator = new FingerprintGenerator({
  browsers: ['chrome'],
  operatingSystems: ['windows'],
  devices: ['desktop'],
});

const { fingerprint, headers } = generator.getFingerprint();

// 2. Ін'єктувати в Playwright
import { newInjectedContext } from 'fingerprint-injector';

const context = await newInjectedContext(browser, {
  fingerprintOptions: {
    browsers: ['chrome'],
  },
});

// АБО вручну:
import { FingerprintInjector } from 'fingerprint-injector';

const injector = new FingerprintInjector();
await injector.attachFingerprintToPlaywright(context, { fingerprint, headers });
```

---

## Що втрачається при переході

### 1. TLS Fingerprint (JA3)

```
@double-agent збирає:
- TLS версія
- Cipher suites порядок
- Extensions порядок
- JA3 hash

Fingerprint Suite: НЕМАЄ
```

**Рішення:** Можна залишити @double-agent/collect-tls-clienthello тільки для TLS,
або використати інший інструмент (наприклад, `got-scraping` з TLS налаштуваннями).

### 2. HTTP/2 Settings

```
@double-agent збирає:
- SETTINGS frame параметри
- WINDOW_UPDATE значення
- Priority settings

Fingerprint Suite: НЕМАЄ
```

**Рішення:** Playwright/Puppeteer самі керують HTTP/2, зазвичай це не критично.

### 3. Real User Agents Integration

```
@double-agent використовує:
@ulixee/real-user-agents
  ├── browsers.json (Chrome, Firefox, Safari версії)
  ├── operating-systems.json
  └── automatically updated

Fingerprint Suite: Вбудований список, оновлюється Apify
```

---

## Рекомендація

### ⭐ Перейти на Fingerprint Suite для більшості use cases

**Причини:**

1. **Розробка соло** - немає ресурсів підтримувати 30+ пакетів
2. **Активний розвиток** - Apify команда постійно оновлює
3. **Простота** - 5 пакетів замість 30+
4. **Дані включені** - не треба збирати самому
5. **AI-генерація** - Bayesian Network producing consistent fingerprints

### Залишити @double-agent тільки для:

1. **TLS Fingerprint** - якщо критично (можна винести в окремий пакет)
2. **HTTP/2** - якщо критично (рідко потрібно)

### План міграції

```
Phase 1: Додати Fingerprint Suite паралельно
         - Нові проекти використовують Fingerprint Suite
         - Старі продовжують з @double-agent

Phase 2: Замінити в hero-core
         - FingerprintGenerator замість collect/analyze
         - FingerprintInjector замість browser-emulator

Phase 3: Видалити @double-agent пакети
         - Залишити тільки collect-tls-clienthello (опціонально)
         - Видалити @ulixee/real-user-agents
```

---

## Практичний приклад інтеграції

### Варіант 1: Пряме використання в Hero

```typescript
// hero-core/lib/Fingerprint.ts
import { FingerprintGenerator } from 'fingerprint-generator';
import type { Fingerprint } from 'fingerprint-generator';

export class HeroFingerprint {
  private generator: FingerprintGenerator;

  constructor(options: { browser: string; os: string }) {
    this.generator = new FingerprintGenerator({
      browsers: [options.browser],
      operatingSystems: [options.os],
    });
  }

  generate() {
    return this.generator.getFingerprint();
  }
}
```

### Варіант 2: Wrapper для сумісності

```typescript
// hero-core/lib/BrowserEmulator.ts
import { FingerprintInjector, FingerprintGenerator } from 'fingerprint-suite';

export class BrowserEmulator {
  private fingerprint: Fingerprint;
  private headers: Headers;

  constructor(userAgentId: string) {
    // Parse 'chrome-120-windows' -> { browser: 'chrome', version: 120, os: 'windows' }
    const { browser, os } = parseUserAgentId(userAgentId);

    const generator = new FingerprintGenerator({
      browsers: [browser],
      operatingSystems: [os],
    });

    const result = generator.getFingerprint();
    this.fingerprint = result.fingerprint;
    this.headers = result.headers;
  }

  async attachToPage(page: Page) {
    const injector = new FingerprintInjector();
    await injector.attachFingerprintToPuppeteer(page, {
      fingerprint: this.fingerprint,
      headers: this.headers,
    });
  }
}
```

---

## Висновок

| Фактор | Оцінка |
|--------|--------|
| **Складність** | Fingerprint Suite виграє 10:1 |
| **Підтримуваність** | Fingerprint Suite виграє (Apify team) |
| **Функціональність** | @double-agent має більше (TLS, HTTP/2) |
| **Готовність до використання** | Fingerprint Suite виграє |
| **Інтеграція з Hero** | Потрібна адаптація в обох випадках |

**Фінальна рекомендація:** Перейти на Apify Fingerprint Suite, залишивши @double-agent тільки для TLS fingerprinting (якщо критично).
