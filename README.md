<div align="center">
  <img src="public/icon-128.png" alt="logo" />
  <h1>
    Chrome extension template with <br />Preact, Tailwind CSS, Vitest, Vite and
    TypeScript
  </h1>

![](https://badges.aleen42.com/src/chrome_extensions.svg)

![](https://badges.aleen42.com/src/preact.svg)
![](https://badges.aleen42.com/src/tailwindcss.svg)
![](https://badges.aleen42.com/src/vitejs.svg)
![](https://badges.aleen42.com/src/typescript.svg)
![](https://badges.aleen42.com/src/eslint.svg)

![GitHub action badge](https://github.com/fell-lucas/chrome-extension-template-preact-vite/actions/workflows/build.yml/badge.svg)
![GitHub](https://img.shields.io/github/license/fell-lucas/chrome-extension-template-preact-vite)

</div>

## Table of Contents

- [Intro](#intro)
- [Features](#features)
- [Installation](#installation)
  - [Procedures](#procedures)
- [Scripts](#scripts)
- [Screenshots](#screenshots)
  - [NewTab](#newtab)
  - [Popup](#popup)
  - [DevTools](#devtools)
- [Recommendations](#recommends)

## Intro <a name="intro"></a>

This template was made with a goal to reduce as much as possible the extension's
bundle size, while also having a blazing fast build speed and overall great
developer experience with Vite.

Fresh cold `pnpm build` on this template (Vite 8 / Node 22):

<img src="docs/build-metrics.png" alt="pnpm build output with chunk sizes and 99ms build time" width="760" />

| Metric | Value |
| ------ | ----- |
| Vite build time | ~67–99 ms |
| Shared JS chunk | 15.20 kB (6.81 kB gzip) |
| Shared CSS | 5.80 kB (1.93 kB gzip) |
| Page entrypoints | ~0.47–0.67 kB each |
| Background / content | ~0.03 kB each |
| Full `pnpm verify` | ~4.3 s locally |

## Features <a name="features"></a>

- [Preact](https://preactjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) (flat config)
- [Prettier](https://prettier.io/)
- [Vitest](https://vitest.dev/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Run `npx degit fell-lucas/chrome-extension-template-preact-vite my-project` or
   click `Use this template` on GitHub.
2. Change `name` and `description` in `package.json` => **Auto synchronize with
   manifest**
3. Ensure Node.js `>= 22.22.2` (see `.nvmrc`) and enable Corepack or install
   pnpm 10+.
4. Run `pnpm install`
5. Run `pnpm dev` to watch files and rebuild on changes
6. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - `chrome://extensions`
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after `dev` or `build`)
7. For a one-off production build, run `pnpm build`.

## Scripts <a name="scripts"></a>

| Script           | Description                                    |
| ---------------- | ---------------------------------------------- |
| `pnpm dev`       | Watch mode via `vite build --watch`            |
| `pnpm build`     | Production build to `dist/`                    |
| `pnpm typecheck` | TypeScript (`tsc --noEmit`)                    |
| `pnpm lint`      | ESLint                                         |
| `pnpm format`    | Prettier write                                 |
| `pnpm test`      | Vitest                                         |
| `pnpm verify`    | typecheck → lint → format check → test → build |

## Screenshots <a name="screenshots"></a>

### New Tab <a name="newtab"></a>

<img src="https://user-images.githubusercontent.com/47724710/163656227-d3ab614f-9549-4c86-a63c-196b6e30ad17.png" width='50%' />

### Popup <a name="popup"></a>

<img src="https://user-images.githubusercontent.com/47724710/163656209-be45a8fb-aecc-437b-b700-0f0f5d9742ca.png" width='75%' />

### Dev Tools <a name="devtools"></a>

<img src="https://user-images.githubusercontent.com/47724710/163656187-7424c39f-d4ad-4cf7-971d-70f86da1e06f.png" width='50%' />

## Recommendations <a name="recommends"></a>

VS Code extensions (also listed in `.vscode/extensions.json`):

- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer)

## Inspired by

[Jonghakseo](https://nookpi.tistory.com/) @
[Repo](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)
and [Vitesse Webext](https://github.com/antfu/vitesse-webext)

## License

Distributed under the
[MIT License](https://github.com/fell-lucas/chrome-extension-template-preact-vite/blob/main/LICENSE).
