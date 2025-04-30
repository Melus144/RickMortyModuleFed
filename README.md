## Requirements

- node.js (version 14 or higher)
- bun (installed globally)
- nx (installed globally)

## RsPack + React + TypeScript + Tailwind 3.4  ( Monorepo con NX y Microfrontend con Module Federations)
#Commands - Monorepo
Crear proyectos: 
bunx create-nx-workspace@latest react-monorepo --preset=react-monorepo --pm bun
 NX   Let's create a new workspace [https://nx.dev/getting-started/intro]
✔ Application name · rick-morty-monorepo
✔ Which bundler would you like to use? · rspack
✔ Which unit test runner would you like to use? · none
✔ Test runner to use for end to end (E2E) tests · none
✔ Default stylesheet format · tailwind
✔ Would you like to use ESLint? · Yes
✔ Would you like to use Prettier for code formatting? · Yes
✔ Which CI provider would you like to use? · skip
✔ Would you like remote caching to make your build faster? · yes

O bien:  bunx create-nx-workspace --pm bun

then, install the dependencies:

```bash
bun install
```
## Clean Architecture

.
├── apps/
│   ├── characters/
│   └── shell/
├── libs/
│   └── shared/
├── tools/
├── nx.json
├── package.json
└── tsconfig.base.json
```

- `apps/characters`: micro frontend application that displays a list of characters.
- `apps/shell`: container application that loads the micro frontends.
- `libs/shared`: library shared between the applications.

## module federation configuration

Module federation allows applications to share modules with each other. in this project, we configure module federation in the `module-federation.config.ts` files of each application.

### configuration example

Here's an example of how we configure module federation in `apps/characters/module-federation.config.ts`:

```typescript
import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'characters',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
```

and in `apps/shell/module-federation.config.ts`:

```typescript
import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: ['characters'],
};

export default config;
```

## available scripts

In the `package.json` file, you will find several useful scripts:

- `dev`: starts the shell application.
- `build`: builds both applications and `shared` lib for production.

to start the applications in development mode, run:

```bash
bun run dev
```
