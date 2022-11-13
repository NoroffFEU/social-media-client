# Social media app CA

[![Automated E2E Testing](https://github.com/Littlaa/social-media-client-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Littlaa/social-media-client-ca/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/Littlaa/social-media-client-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Littlaa/social-media-client-ca/actions/workflows/unit-test.yml)
[![Deploy static content to Pages](https://github.com/Littlaa/social-media-client-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/Littlaa/social-media-client-ca/actions/workflows/pages.yml)

## The following workflows/hooks are configured:

- [x] Project is configured to run Prettier on commit
- [x] Project is configured to run ESLint on commit
- [x] Project is configured to run Jest on commit
- [x] Project is configured to deploy to pages on merge to default

## The following files are changed:

- [x] Project readme file is updated to include new configuration information and status badges
- [x] Project is configured for hosting (e.g. CDN links or a Bundler)

## The following features are automatically tested with unit tests:

- [x] The login function returns a valid token when provided with valid credentials
- [x] The logout function clears the token from browser storage
- [x] The create item function creates a new item on the API

## The following features are automatically tested with end-to-end tests:

- [x] The login form validates user inputs correctly based on API restrictions
- [x] The create item form validates user inputs correctly based on API restrictions
- [x] The logout button logs the user out when clicked

## Run the App

Install project locally:

`npm i`

`npm run start`

---

### Prettier:

Install:

`npm install --save-dev prettier`

In package.json scripts:

`"format": "prettier -w src/js/**/*.js"`

Run prettier:

`npm run format`

Configured prettier in .prettierrc.json:

```javascript
{
  "singleQuote": true
}
```

---

### ESlint

Install:

`npm install eslint --save-dev`

Setting up ESlint:

`npx eslint --init`

This will ask you a series of questions. Here are the recommended answers:

- How would you like to use ESLint? · problems
- What type of modules does your project use? · esm
- Which framework does your project use? · none
- Does your project use TypeScript? · No
- Where does your code run? · browser
- What format do you want your config file to be in? · JSON

In package.json scripts:

`"lint": "eslint src/**/*.js"`

`"lint-fix": "eslint src/**/*.js --cache --fix"`

Run ESlint:

`npm run lint`

`npm run lint-fix`

---

### Creating pre-commit hooks:

Install mrm:

`npx mrm@2 lint-staged`

In package.json lint-staged:

```js
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write",
    "jest --o --passWithNoTests"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

Format on save in .vscode/settings.json:

```js
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript"
  ]
}
```

---

### Vite

Install:

`npm install -D vite`

Create vite.config.js:

```js
export default {
  server: {
    base: 'http://127.0.0.1:5173/',
  },
};
```

In package.json scripts:

`"vite-dev": "vite"`

`"vite-build": "vite-build"`

`"vite-preview": "vite preview"`

Open vite:

`npm run vite-dev`

---

### Jest and Cypress

Install:

`npm i -D jest@29.2.0`

`npm i -D eslint-plugin-jest`

`npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1`

In package.json scripts:

`"test": "npm run test-unit && npm run test-e2e-cli"`

`"test-unit": "jest"`

`"test-e2e": "cypress open"`

`"test-e2e-report": "cypress run --reporter mochawesome"`

`"test-e2e-cli": "cypress run"`

In .eslintrc.json:

```js
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    },
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-undef": "off",
    "no-unused-vars": "off"
  }
}
```

---

### Babel

Install:

`npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4`

In babel.config.json:

```js
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```
