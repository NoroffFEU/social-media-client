# Workflow CA

## **Test Status Badges**

[![Automated Unit Testing](https://github.com/Anclagen/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Anclagen/workflow-ca/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/Anclagen/workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Anclagen/workflow-ca/actions/workflows/e2e-test.yml)

## **Repo Install**

Download the repo and setup in your chosen destination, open project file in your code editor.

Initialise git in the project folder to avoid errors related to husky setup.

```
git init
```

Install dependencies

```
npm i
```

Build CSS files from SASS

```
npm run build
```

To view the site using vite live server

```
npm run dev
```

Then proceed to `http://127.0.0.1:8080/` in your browser.

If you wish to run Cypress tests create a `.env` file and match the `.env.example` file layout filling in your own user details

## **About**

This project is part of the Workflow course assignment from Noroff. With aims to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient. The test code is forked from a Noroff example of social media platform using Noroff's API. I have created Jest and Cypress tests for the required test cases. The repo environment has been configured to have pre-commit checks using Prettier, ESLint and Jest, to ensure code quality is maintained. I have also established branch protections on the main branch. With GitHub action workflows to automatically deploy the main branch to GitHub Pages on merge, and checks that my unit and end to end tests are passing before being allowed to merge into the main branch.

## **Tests**

### **Unit Testing, Jest**

Added the following test files;

- login.test.js
  - Tests successful login
  - Tests unsuccessful login
- logout.test.js
  - Test logout function.
- create.test.js
  - Tests successful post creation
  - Tests bad request unsuccessful post creation
  - Tests Unauthorized unsuccessful post creation

To run these tests use;

```
npm run test-unit
```

### **End To End Testing, Cypress**

Added the following end to end test files for Cypress

- login.cy.js
  1. Tests login with valid credentials
  2. Tests login error handling with invalid email
  3. Tests login error handling with invalid password length
  4. Tests login error handling with invalid password
- logout.cy.js
  1. Tests logout
- createPost.cy.js
  1. Tests user can create a post
  2. Tests form validates inputs on attempted submissions
  3. Tests the handling for thrown errors

Before running Cypress tests ensure you are running your local server with vite using `npm run dev`.

These can be run through the Cypress interface using

```
npm run test-e2e
```

Alternatively they can be run in the command line using

```
npm run test-e2e-cli
```

## **Complete Project Setup and Configuration**

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

```json
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

Replace default lint-staged scripts this.

```json
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

```json
    "test": "npm run test-unit",
    "test-unit": "jest"
```

Install eslint plugin for Jest.

```
npm i -D eslint-plugin-jest
```

Update `.eslintrc.json` settings

```json
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
      "rules": { "jest/prefer-expect-assertions": "off", "no-undef": "off" }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

Install Babel

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Create `babel.config.json` and add

```json
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

```json
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

```json
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-e2e": "cypress open",
    "test-e2e-report": "cypress run --reporter mochawesome",
    "test-e2e-cli": "cypress run"
```

The `cypress.config.js` should be present in this repo, but if setting up a new repo, you will need to run `npm run test-e2e` select "E2E Testing", accept the configuration, then select Electron to get to the Cypress testing dashboard.

Add to `.gitignore` to avoid uploads of videos and screenshots from cypress;

```
/cypress/screenshots
/cypress/videos
```

#### **Replaced Live server with Vite**

Due to 3 dependencies with high severity vulnerabilities I replaced live-sever with vite

```
npm install -D vite
```

Add scripts to `package.json`, to run the development version in a live server you use `npm run dev`, if you configure your project for use with the vite bundler you can use vite build then vite preview to view the compiled version.

```json
    "dev": "vite",
    "vite-build": "vite build",
    "vite-preview": "vite preview"
```

If you wish to configure the port and host address you can create `vite.config.js` in your root and add this. It can be useful to specify as typically it defaults to `http://localhost:portnumber` when testing locally, where as when testing on github action it will typically use `http://127.0.0.1:portnumber`, setting it up this way means your Cypress URL won't require changing, unless you test against a hosted version. Your url will be ``http://127.0.0.1:8080`.

```json
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

Modify the `cypress.config.js` to match this setup to import .env variables which can be called in tests using Cypress.env("key"). If you wish to record your tests you can remove `video: false`.

```js
module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        baseUrl: "http://127.0.0.1:8080",
        ...process.env,
        ...config.env,
      };
      return config;
    },
  },
});
```

Create `.env` file in root and add, filling it with your own details for Cypress testing

```
PASSWORD=PASSWORD
EMAIL=EXAMPLE@NOROFF.NO
```

Add `.env` to `.gitignore` file, should now be;

```
/node_modules
/dist
/cypress/screenshots
/cypress/videos
.env
```
