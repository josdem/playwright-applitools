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

#### To run lint validation

```bash
npm run lint
```

#### To run the project

```bash
npx playwright test --project chromium
```

#### To see integrated reports

```bash
npx playwright show-report
```

#### Setting up environment

```bash
export APPLITOOLS_API_KEY=${YOUR_APPLITOOLS_API_KEY}
```

where:

- `${YOUR_APPLITOOLS_API_KEY}` is something like: `Ag4hfEVDIMykuCpWk61ppg3VJ9fkK0uht100HXnvGPlag220` (Check with your service provider if you do not have it)

**Note**

If you are using Windows based platform:

```bash
$Env:APPLITOOLS_API_KEY="YOUR_APPLITOOLS_API_KEY"
```

where:

- `${apiKey}` Is your Applitools api key
