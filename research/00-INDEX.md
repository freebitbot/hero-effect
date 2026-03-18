# Дослідження монорепозиторію Hero/Unblocked

## Огляд

Це дослідження аналізує архітектуру Ulixee Hero - TypeScript бібліотеки для браузерної автоматизації та веб-скрапінгу з фокусом на обход bot detection.

---

## Документи дослідження

| Файл | Опис |
|------|------|
| [01-packages-to-exclude-superficial.md](./01-packages-to-exclude-superficial.md) | Пакети для виключення (Datastore, Desktop, Platform) |
| [02-ulixee-core-packages.md](./02-ulixee-core-packages.md) | Основні пакети браузерної автоматизації |
| [03-plugins-packages.md](./03-plugins-packages.md) | Плагіни емуляції (Browser + Human) |
| [04-cloud-platform.md](./04-cloud-platform.md) | **CloudNode - серверна інфраструктура** |
| [05-double-agent-packages.md](./05-double-agent-packages.md) | Fingerprint detection система |

---

## Ключові висновки

### Архітектура

```
┌─────────────────────────────────────────────────────────────────┐
│                      HERO STACK                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  @ulixee/hero ───────────► @ulixee/hero-core ────────►         │
│  (Client API)              (Core Engine)                        │
│                                  │                              │
│                                  ▼                              │
│                         @ulixee/unblocked-agent ──────►         │
│                         (Browser Automation)                     │
│                                  │                              │
│                                  ▼                              │
│                         @ulixee/unblocked-agent-mitm ──►        │
│                         (MITM Proxy)                             │
│                                  │                              │
├──────────────────────────────────┼──────────────────────────────┤
│                         PLUGINS  │                              │
│  ┌─────────────────────────────┬─┴──────────────────────────┐  │
│  │  BrowserEmulator            │  HumanEmulator              │  │
│  │  • HTTP Headers             │  • Mouse movement           │  │
│  │  • DOM Overrides            │  • Keyboard typing          │  │
│  │  • Fingerprints             │  • Scroll behavior          │  │
│  │  • TLS profiles             │  • Random delays            │  │
│  └─────────────────────────────┴────────────────────────────┘  │
│                                  │                              │
├──────────────────────────────────┼──────────────────────────────┤
│                      INFRASTRUCTURE                             │
│  ┌─────────────────────────────┬─┴──────────────────────────┐  │
│  │  @ulixee/cloud              │  Double-Agent              │  │
│  │  (Server Infrastructure)    │  (Fingerprint Research)    │  │
│  │  • CloudNode                │  • Collect Plugins         │  │
│  │  • CoreRouter               │  • Analyze Plugins         │  │
│  │  • NodeRegistry             │  • Profile Generation      │  │
│  └─────────────────────────────┴────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Критичні пакети для нової імплементації

| Пріоритет | Пакет | Функція |
|-----------|-------|---------|
| **1** | @ulixee/hero | Client API |
| **1** | @ulixee/hero-core | Core Engine |
| **1** | @ulixee/unblocked-agent | Browser Automation (CDP) |
| **1** | @ulixee/unblocked-agent-mitm | MITM Proxy |
| **1** | @ulixee/unblocked-specification | Interfaces |
| **1** | @ulixee/commons | Utilities |
| **2** | @ulixee/default-browser-emulator | Fingerprint Emulation |
| **2** | @ulixee/default-human-emulator | Behavior Emulation |
| **2** | @ulixee/cloud | **Server Infrastructure** |
| **3** | @ulixee/net | Network layer |
| **3** | @ulixee/hero-interfaces | TypeScript interfaces |
| **3** | @ulixee/hero-plugin-utils | Plugin utilities |

### Пакети для виключення

| Група | Причина виключення |
|-------|-------------------|
| Datastore (9 packages) | Монетизація скрапінгу, SQL інтерфейс |
| Desktop (2 packages) | GUI додаток |
| Platform/SQL (4 packages) | SQL парсинг та виконання |
| Platform/Client | Аргон Protocol (криптовалюта) |
| Platform/CLI | CLI інструменти |

---

## Основні бізнес-ідеї

### 1. Браузерна автоматизація (Hero Core)
- Управління Chrome через DevTools Protocol
- Пули браузерів для паралельного виконання
- Session management з SQLite

### 2. Bot Detection Bypass
- **Browser Emulator**: Модифікація fingerprint
  - HTTP заголовки (порядок, значення)
  - DOM властивості (navigator, screen)
  - TLS handshake профілі
  - HTTP/2 налаштування

- **Human Emulator**: Імітація поведінки
  - Bezier curves для миші
  - Випадкові затримки
  - Природній скролінг

### 3. MITM Proxy
- Перехоплення HTTP/HTTPS запитів
- Модифікація заголовків на льоту
- SSL/TLS сертифікати
- HTTP/2 підтримка

### 4. Cloud Infrastructure
- Remote виконання скрапінгу
- Кластерна архітектура
- Load balancing
- Connection pooling

### 5. Fingerprint Research (Double-Agent)
- Збір даних з реальних браузерів
- Аналіз та порівняння
- Генерація правил емуляції

---

## Залежності

### Критичні зовнішні залежності

```json
{
  "@ulixee/chrome-139-0": "Chrome binary",
  "devtools-protocol": "CDP типи",
  "better-sqlite3": "Локальна БД",
  "ws": "WebSocket",
  "tough-cookie": "Cookie",
  "nanoid": "ID генерація"
}
```

### Залежності для виключення

```json
{
  "@argonprotocol/localchain": "Блокчейн",
  "@argonprotocol/mainchain": "Блокчейн",
  "commander": "CLI (частина)",
  "moment": "Дати (можна замінити)"
}
```

---

## Рекомендації для нової імплементації

### Спростити:
1. Видалити монетизацію (Argon Protocol)
2. Видалити SQL інтерфейс
3. Видалити GUI (Desktop)
4. Спростити конфігурацію

### Оптимізувати:
1. Зменшити кількість шарів абстракції
2. Об'єднати суміжні пакети
3. Спростити plugin систему
4. Зменшити залежності

### Залишити:
1. CDP abstraction (unblocked-agent)
2. MITM proxy
3. Browser/Human emulation
4. CloudNode infrastructure
5. Fingerprint research (double-agent)

---

## Файли для детального вивчення

### Core Architecture
- `apps/ulixee/hero-core/index.ts` - HeroCore class
- `apps/ulixee/hero-core/lib/Session.ts` - Session management
- `apps/ulixee/hero-core/lib/Tab.ts` - Tab management
- `apps/ulixee/unblocked-agent/lib/Agent.ts` - Agent
- `apps/ulixee/unblocked-agent/lib/BrowserContext.ts` - Context

### MITM Proxy
- `apps/ulixee/unblocked-agent-mitm/lib/MitmProxy.ts`
- `apps/ulixee/unblocked-agent-mitm/lib/RequestSession.ts`

### Browser Emulation
- `apps/plugins/default-browser-emulator/index.ts`
- `apps/plugins/default-browser-emulator/lib/DomOverridesBuilder.ts`
- `apps/plugins/default-browser-emulator/injected-scripts/*.ts`

### Human Emulation
- `apps/plugins/default-human-emulator/index.ts`
- `apps/plugins/default-human-emulator/Bezier.ts`

### Cloud
- `apps/platform/cloud/lib/CloudNode.ts`
- `apps/platform/cloud/lib/CoreRouter.ts`

---

## Детальна кількість пакетів

| Група | Кількість | Статус аналізу |
|-------|-----------|----------------|
| Ulixee Core | 24 пакети | Детально |
| Plugins | 3 пакети | Детально |
| Double-Agent | ~40 пакетів | Детально |
| Cloud | 8 пакетів | Детально |
| Datastore | 9 пакетів | Поверхнево (виключити) |
| Desktop | 2 пакети | Поверхнево (виключити) |
| Platform SQL | 4 пакети | Поверхнево (виключити) |

## Наступні кроки

1. **Обговорити пріоритети** - які функції критичні
2. **Визначити архітектуру** - як спростити
3. **Створити тех завдання** - детальний план
4. **Почати імплементацію** - з core пакетів

---

## Додаткові деталі від агентів

### Browser Emulator (деталі)
- **19 injected scripts** для DOM spoofing
- **3 шари емуляції**: Network → Browser launch → JavaScript injection
- **Data-driven** - дані з DoubleAgent JSON файлів
- Header ordering - критична анти-fingerprint функція

### Human Emulator (деталі)
- Базується на **Fitts's Law** (HCI research)
- **Overshoot behavior** - курсор "перелітає" ціль на >250px
- **Click verification** - перевіряє що клік дійсно на елементі
- **80-100 WPM** typing speed з random variance

### Double-Agent (деталі)
- **Human Score 0-100** - оцінка "людиноподібності"
- **ProbeBuckets** - групування тестів по User Agent
- **Collect + Analyze** архітектура
- **TLS Server** - власний сервер для ClientHello fingerprinting
