<div align="center">
  <img src="public/icon-128.png" alt="logo"/>
  <h1> Chrome extension template with <br/>Preact, Windi CSS, Vite and TypeScript</h1>
  
  ![](https://badges.aleen42.com/src/preact.svg)
  ![](https://badges.aleen42.com/src/eslint.svg)
  ![](https://badges.aleen42.com/src/vitejs.svg)
  ![](https://badges.aleen42.com/src/typescript.svg)
  ![](https://badges.aleen42.com/src/jest_1.svg)
  <br>
  ![GitHub action badge](https://github.com/fell-lucas/chrome-ext-template-preact-windi-vite/actions/workflows/build.yml/badge.svg)
  [![hits](https://hits.deltapapa.io/github/fell-lucas/chrome-ext-template-preact-windi-vite.svg)](https://hits.deltapapa.io)
  ![GitHub](https://img.shields.io/github/license/fell-lucas/chrome-ext-template-preact-windi-vite)

</div>

## Table of Contents

- [Intro](#intro)
- [Features](#features)
- [Installation](#installation)
  - [Procedures](#procedures)
- [Screenshots](#screenshots)
  - [NewTab](#newtab)
  - [Popup](#popup)
  - [DevTools](#devtools)
- [Recommendations](#recommends)

## Intro <a name="intro"></a>

This template was made with a goal to reduce as much as possible the extension's bundle size, while also having a blazing fast build speed and overall great developer experience with Vite.

The chunk sizes when cloning and building the template:
![image](https://user-images.githubusercontent.com/47724710/163683695-693f233c-8730-4830-b26d-782a293a0835.png)

## Features <a name="features"></a>

- [Preact 10](https://preactjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Windi CSS](https://windicss.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)

## Installation <a name="installation"></a>

### Procedures <a name="procedures"></a>

1. Run `npx degit fell-lucas/chrome-ext-template-preact-windi-vite my-project` or click `Use this template` on GitHub.
2. Change `name` and `description` in package.json => **Auto synchronize with manifest**
3. Run `pnpm i`, `yarn` or `npm i` (check your node version >= 16)
4. Run `pnpm dev`, `yarn dev` or `npm run dev` to watch files and rebuild with any changes
5. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Find - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
6. If you want to build without watching, run `pnpm build`, `yarn build` or `npm run build`.

## Screenshots <a name="screenshots"></a>

### New Tab <a name="newtab"></a>

<img src="https://user-images.githubusercontent.com/47724710/163656227-d3ab614f-9549-4c86-a63c-196b6e30ad17.png" width='50%' />

### Popup <a name="popup"></a>

<img src="https://user-images.githubusercontent.com/47724710/163656209-be45a8fb-aecc-437b-b700-0f0f5d9742ca.png" width='75%' />

### Dev Tools <a name="devtools"></a>

<img src="https://user-images.githubusercontent.com/47724710/163656187-7424c39f-d4ad-4cf7-971d-70f86da1e06f.png" width='50%' />

## Recommendations <a name="recommends"></a>

VSCode Extensions

- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [windicss-intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)
- [vscode-coverage-gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters)
- [vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [vscode-jest-runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)

## Inspired by <br>

[Jonghakseo](https://nookpi.tistory.com/) @ [Repo](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite) <br>
and [Vitesse Webext](https://github.com/antfu/vitesse-webext)

## License

Distributed under the [MIT License](https://github.com/fell-lucas/chrome-ext-template-preact-windi-vite/blob/main/LICENSE).
