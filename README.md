# rest-api-client

Разработать упрощенный REST клиент для вызова back API в SPA приложении. 
Back API на том же домене, но с каким-то базовым `PATH` префиксом. 
Авторизация доступа к back API возможна по двум схемам: Basic и OAuth Barier Token (токен предоставляется из вне, токен имеет срок жизни).

Основная задача клиента предоставить возможность вызова back API для других модулей SPA. Предусмотреть возможность обработки ошибок на различных уровнях.

Сильно усложнять реализацию функций не нужно. Хочется посмотреть декомпозицию, построение интерфейса клиента (функции, сигнатуры и т.д.), учет удобства использования.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
