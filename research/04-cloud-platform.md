# @ulixee/cloud (Детальний аналіз)

**ВАЖЛИВО**: Це ключовий пакет для скрапінгу - забезпечує серверну інфраструктуру для запуску Hero.

---

## Призначення

CloudNode - це готовий інструмент для хостингу та деплою Hero скриптів. Дозволяє легко створювати платний API сервіс для скрапінгу.

---

## Архітектура

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLOUD NODE                                │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   HeroCore      │  │  DatastoreCore  │  │  DesktopCore    │ │
│  │ (Browser Pool)  │  │ (API Endpoints) │  │   (GUI/Replay)  │ │
│  └────────┬────────┘  └────────┬────────┘  └────────┬────────┘ │
│           │                    │                     │          │
│           └────────────────────┼─────────────────────┘          │
│                                │                                │
│  ┌─────────────────────────────┴─────────────────────────────┐ │
│  │                     CORE ROUTER                            │ │
│  │   WebSocket + HTTP routing for all services                │ │
│  └─────────────────────────────┬─────────────────────────────┘ │
│                                │                                │
│           ┌────────────────────┼────────────────────┐           │
│           ▼                    ▼                    ▼           │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │  Public Server  │  │ Hosted Services │  │  Node Registry  │ │
│  │  (WS + HTTP)    │  │    Server       │  │   (Cluster)     │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│           │                    │                                │
└───────────┼────────────────────┼────────────────────────────────┘
            │                    │
            ▼                    ▼
    ┌───────────────┐    ┌───────────────┐
    │    CLIENTS    │    │   SERVICES    │
    │ (Hero/Datastore)│   │ (Registry/etc)│
    └───────────────┘    └───────────────┘
```

---

## Ключові класи

### CloudNode

Головний клас сервера. Об'єднує всі компоненти.

```typescript
class CloudNode {
  // Ядра
  public heroCore: HeroCore              // Ядро браузерної автоматизації
  public datastoreCore: DatastoreCore    // Ядро Datastore API
  public desktopCore?: DesktopCore       // Ядро GUI/Replay

  // Сервери
  public publicServer: RoutableServer    // Публічний сервер (WS + HTTP)
  public hostedServicesServer?: RoutableServer  // Сервер сервісів
  public router: CoreRouter              // Маршрутизатор

  // Реєстр
  public nodeRegistry: NodeRegistry      // Реєстр вузлів кластера
  public nodeTracker: NodeTracker        // Відстеження вузлів

  // Конфігурація
  public cloudConfiguration: ICloudConfiguration
  public heroConfiguration: ICoreConfigureOptions

  // Методи
  async listen(): Promise<this>          // Запуск сервера
  async close(): Promise<void>           // Закриття сервера
}
```

### CoreRouter

Маршрутизатор запитів між клієнтами та сервісами.

```typescript
class CoreRouter {
  // WebSocket маршрути
  wsConnectionByType = {
    hero: (transport) => heroCore.addConnection(transport),
    datastore: (transport) => datastoreCore.addConnection(transport),
    services: (transport) => addHostedServicesConnection(transport),
    cloud: (transport) => cloudApiRegistry.createConnection(transport),
  }

  // HTTP маршрути
  httpRoutersByType: { [key: string]: IHttpHandleFn }

  // Методи
  async register(): Promise<void>        // Реєстрація маршрутів
  async close(): Promise<void>           // Закриття з'єднань
}
```

### RoutableServer

Сервер з підтримкою WebSocket та HTTP маршрутів.

```typescript
class RoutableServer {
  // Методи
  async listen(options): Promise<{address, port}>
  async close(): Promise<void>

  // Маршрутизація
  addHttpRoute(route, method, handler): void
  addWsRoute(route, handler): void
}
```

---

## API Endpoints

### WebSocket Endpoints

| Endpoint | Призначення |
|----------|-------------|
| `/hero` | Підключення Hero клієнтів |
| `/datastore` | Підключення Datastore клієнтів |
| `/services` | Внутрішні сервіси кластера |

### HTTP Endpoints

| Endpoint | Метод | Призначення |
|----------|-------|-------------|
| `/` | GET | Інформація про сервер |
| `/server-details` | GET | IP та порт сервера |
| `/` (hosted services) | GET | Налаштування сервісів |

---

## Конфігурація

```typescript
interface ICloudConfiguration {
  // Мережа
  port?: number                          // Порт публічного сервера (default: 1818)
  host?: string                          // Хост для прослуховування
  publicHost?: string                    // Зовнішній хост

  // Сервіси
  nodeRegistryHost?: string              // Хост реєстру вузлів
  servicesSetupHost?: string             // Хост налаштувань сервісів
  networkIdentity?: IIdentity            // Мережева ідентичність

  // Desktop
  disableDesktopCore?: boolean           // Вимкнути Desktop API

  // Hosted Services
  hostedServicesServerOptions?: {
    port?: number                        // Порт сервісів (default: 18181)
    host?: string                        // Хост сервісів
  }
}
```

---

## Процес запуску

```typescript
async listen() {
  // 1. Запуск публічного сервера
  await startPublicServer();

  // 2. Запуск сервера сервісів
  await startHostedServices();

  // 3. Запуск ядер
  await startCores();
    // - Створення NodeRegistry
    // - Реєстрація в кластері
    // - Запуск HeroCore
    // - Запуск DatastoreCore
    // - Запуск DesktopCore (опціонально)

  // 4. Реєстрація маршрутів
  await router.register();
}
```

---

## Інтеграція з Hero

```typescript
// Клієнтська частина
import Hero from '@ulixee/hero';
import { ConnectionToCore, WsTransportToCore } from '@ulixee/net';

// Підключення до CloudNode
const connection = new ConnectionToCore(
  new WsTransportToCore('ws://localhost:1818/hero')
);

const hero = new Hero({
  connectionToCore: connection,
});

// Тепер Hero виконується на віддаленому CloudNode
await hero.goto('https://example.com');
```

---

## Кластерна архітектура

```
                    ┌─────────────────────┐
                    │   Node Registry     │
                    │   (Service Host)    │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
┌───────────────┐      ┌───────────────┐      ┌───────────────┐
│  CloudNode 1  │      │  CloudNode 2  │      │  CloudNode 3  │
│  (Hero + DS)  │      │  (Hero + DS)  │      │  (Hero + DS)  │
└───────────────┘      └───────────────┘      └───────────────┘
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
                    ┌──────────┴──────────┐
                    │   Load Balancer     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Clients        │
                    └─────────────────────┘
```

---

## NodeRegistry

Управління вузлами кластера.

```typescript
class NodeRegistry {
  // Реєстрація вузла
  async register(networkIdentity?: IIdentity): Promise<void>

  // Відстеження вузлів
  getNodes(): INodeInfo[]

  // Закриття
  async close(): Promise<void>
}
```

---

## Network Identity

Автентифікація вузлів у кластері.

```typescript
interface IIdentity {
  publicKey: string
  privateKey: string
  sign(data): string
  verify(data, signature): boolean
}

// Створення тимчасової ідентичності
async createTemporaryNetworkIdentity(): Promise<void> {
  const tempIdentity = await Identity.create();
  // Збереження в ~/.ulixee/networkIdentity.pem
}
```

---

## Використання

### Запуск сервера

```bash
# CLI
npx @ulixee/cloud start

# Або в коді
import CloudNode from '@ulixee/cloud';

const cloudNode = new CloudNode({
  port: 1818,
  heroConfiguration: {
    maxConcurrentAgentsPerBrowser: 5,
  },
});

await cloudNode.listen();
console.log(`Cloud running at ${await cloudNode.host}`);
```

### Підключення клієнта

```typescript
import Hero from '@ulixee/hero';

// Автоматичне підключення до локального CloudNode
const hero = new Hero();

// Або явно вказати адресу
const hero = new Hero({
  connectionToCore: {
    host: 'ws://my-cloud-server:1818',
  },
});
```

---

## Залежності

```json
{
  "@ulixee/commons": "workspace:*",
  "@ulixee/datastore-core": "workspace:*",
  "@ulixee/datastore-plugins-hero-core": "workspace:*",
  "@ulixee/desktop-core": "workspace:*",
  "@ulixee/hero-core": "workspace:*",
  "@ulixee/hero-interfaces": "workspace:*",
  "@ulixee/net": "workspace:*",
  "@ulixee/platform-specification": "workspace:*",
  "@ulixee/platform-utils": "workspace:*",
  "commander": "^9.5.0",
  "ws": "^8.18.0"
}
```

---

## Переваги для скрапінгу

1. **Масштабування** - Запуск кількох браузерів паралельно
2. **Кластер** - Розподіл навантаження між вузлами
3. **Remote Execution** - Виконання на віддалених серверах
4. **Session Management** - Автоматичне управління сесіями
5. **Connection Pooling** - Ефективне використання ресурсів

---

## Змінні середовища

```bash
# Публічний сервер
ULX_PUBLIC_PORT=1818
ULX_PUBLIC_HOST=0.0.0.0
ULX_LISTEN_HOSTNAME=0.0.0.0

# Hosted Services
ULX_HOSTED_SERVICES_PORT=18181
ULX_HOSTED_SERVICES_LISTEN_HOSTNAME=127.0.0.1

# Node Registry
ULX_NODE_REGISTRY_HOST=self
ULX_SERVICES_SETUP_HOST=

# Identity
ULX_NETWORK_IDENTITY_PATH=~/.ulixee/networkIdentity.pem

# Desktop
ULX_DISABLE_DESKTOP_API=false
```
