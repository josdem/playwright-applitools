## Playwright Workshop

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Playwright](https://img.shields.io/badge/playwright-reports-brightgreen.svg)](https://playwright.dev/)

This is a getting started project with [Playwright](https://playwright.dev/)

#### Requirements

- [NodeJS](https://nodejs.org/en/) version `v18.16.0`

**Note:** I recommed to use [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions

#### To build the project

```bash
npm install
```

#### To format the project

```bash
npx prettier --write .
```

#### To run the project

```bash
npx playwright test --project chromium
```

#### To see integrated reports

```bash
npx playwright show-report
```

#### Setting up environment on Windows

```bash
 Set-Item -Path Env:APPLITOOLS_API_KEY -Value ${apiKey}
```

where:

- `${apiKey}` Is your Applitools api key
