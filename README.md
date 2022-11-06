# Workflow CA

## **Test Status Badges**

[![Automated Unit Testing](https://github.com/Anclagen/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Anclagen/workflow-ca/actions/workflows/unit-test.yml)

## **Project Setup**

Create `.gitignore` and add, to ensure your not uploading large node_modules to your github repo.

```
/node_modules
/dist
```

### **Code Formatters**

This guide is done using VSC, you will need the `Prettier - Code formatter` and `ESLint` extensions installed to vsc for on save actions to work.

Install Prettier.

```
npm install -D prettier
```

Install eslint

```
npm install eslint --save-dev
```

Setup eslint with shown settings.

```
npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Install Mrm, to manage pre-commit hooks.

```
npx mrm@2 lint-staged
```

Add scripts to `package.json`

```
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

Replace default lint-staged scripts this.

```
"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
```

Add workspace settings for VSC, `.vscode/settings.json` (may differ for other code editors).

```
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

### **Unit Testing Packages**

Install Jest

```
npm i -D jest@29.2.0
```

Add Jest scripts to `package.json`

```
    "test": "npm run test-unit",
    "test-unit": "jest"
```

Install eslint plugin for Jest.

```
npm i -D eslint-plugin-jest
```

Update `.eslintrc.json` settings

```
{
  "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off", "no-undef": "off"  }
      }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
```

Install Babel

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Create `babel.config.json` and add

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

To add pre-commit hook for Jest, `.husky/pre-commit` add to file.;

```
npm run test-unit
```

### **End To End Test Packages**

Install Cypress and its eslint plugin;

```
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```

Update eslint settings in `.eslintrc.json`, adding this to the overrides array;

```
    {
      "files": ["**/*.cy.js", "cypress.config.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off",
        "no-undef": "off"
      }
    },
```

Add Cypress scripts to `package.json` and update "test" script to run Jest and Cypress.

```
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-e2e": "cypress open",
    "test-e2e-report": "cypress run --reporter mochawesome",
    "test-e2e-cli": "cypress run"
```

The `cypress.config.js` should be present in this repo, but if setting up a new repo, you will need to run `npm run test-e2e` select "E2E Testing", accept the configuration, then select Electron to get to the Cypress testing dashboard.

#### **Replaced Live server with Vite**

Due to dependency high severity vulnerabilities with live-sever we replaced it with vite

```
npm install -D vite
```

Add scripts to `package.json`, to run the development version in a live server you use `npm run dev`, if you configure your project for use with the vite bundler you can use vite build then vite preview to view the compiled version.

```
    "dev": "vite",
    "vite-build": "vite build",
    "vite-preview": "vite preview"
```

If you wish to configure the port and host address you can create `vite.config.js` in your root and add this. It can be useful to specify as typically it defaults to "http://localhost:portnumber" when testing locally, where as when testing on github action it will typically use "http://127.0.0.1:portnumber", setting it up this way means your Cypress URL won't require changing, unless you test against a hosted version.

```
export default {
  server: {
    port: 8080,
    hot: true,
    host: "127.0.0.1",
  },
};
```

#### **Add dotenv for use in cypress**

Install dotenv

```
npm install -D dotenv
```

Modify the `cypress.config.js` to match this setup to import .env variables which can be called in tests using Cypress.env("key").

```
require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
```

Create `.env` file in root and add, filling iy with your own details for Cypress testing

```
PASSWORD=PASSWORD
EMAIL=EXAMPLE@NOROFF.NO
```

Add `.env` to `.gitignore` file, should now be;

```
/node_modules
/dist
.env
```

## **Tests**

### **Unit Testing, Jest**

Add the following test files;

- login.test.js
- logout.test.js
- create.test.js

To run these tests use;

```
npm run test-unit
```

### **End To End Testing, Cypress**

```

```
