# Workflow CA

## **Table of Contents**

1. [About](#about)
2. [Test Status Badges](#badges)
3. [Install](#install)
4. [Dependencies](#depend)
5. [Tests](#tests)
   1. [Unit Tests, Jest](#jest)
   2. [E2E Tests, Cypress](#cypress)
6. [Complete Setup & Install Guide](#configuration)
   1. [Code Formatters](#formatters)
   2. [Jest Setup](#jest-setup)
   3. [Cypress Setup](#cypress-setup)
   4. [Vite Setup](#vite-setup)
   5. [Dotenv For Cypress Setup](#dotenv-setup)

## **About** <a id="about"></a>

This project is part of the Workflow course assignment from Noroff. With aims to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient. The test code is forked from a Noroff example of a social media platform using Noroff's API. I have created Jest and Cypress tests for the required test cases. The repo environment has been configured to have pre-commit checks using Prettier, ESLint and Jest, to ensure code quality is maintained. I have also established branch protections on the main branch. With GitHub action workflows to automatically deploy the main branch to GitHub Pages on merge, and checks that my unit and end to end tests are passing before being allowed to merge into the main branch.

## **Test Status Badges & Actions** <a id="badges"></a>

The repository is configure to deploy the main branch to GitHub pages on merge. I have modified the index.html to include the bootstrap & popper JS CDN links for deployment. The main branch is protected from commits and all PR requests into it must pass the unit and end to end test workflows in github actions before they can be merge.

**Jest Tests**

[![Automated Unit Testing](https://github.com/Anclagen/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Anclagen/workflow-ca/actions/workflows/unit-test.yml)

**Cypress Tests**

[![Automated E2E Testing](https://github.com/Anclagen/workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Anclagen/workflow-ca/actions/workflows/e2e-test.yml)

**Site Deployed**

[![Deploy Master](https://github.com/Anclagen/workflow-ca/actions/workflows/deploy.yml/badge.svg)](https://github.com/Anclagen/workflow-ca/actions/workflows/deploy.yml)

## **Repo Install** <a id="install"></a>

Download the repo and setup in your chosen destination, open project file in your code editor.

Initialise git in the project folder to avoid errors related to husky setup.

```
git init
```

Install dependencies.

```
npm i
```

Build CSS files from SASS.

```
npm run build
```

To view the site using vite live server.

```
npm run dev
```

Then proceed to `http://127.0.0.1:8080/` in your browser.

If you wish to run Cypress tests create a `.env` file and match the `.env.example` file layout filling in your own user details.

## **Dependencies** <a id="dependencies"></a>

1. [Bootstrap Dark 5](https://vinorodrigues.github.io/bootstrap-dark-5/) A darker version of Bootstrap.

**Development Dependencies**

1. [SASS](https://sass-lang.com/) compiles scss into css.
2. [Prettier](https://prettier.io/) a code formatter
3. [ESlint](https://eslint.org/) finds and fixes some problems with your code.
4. [Mrm](https://www.npmjs.com/package/mrm-task-lint-staged) is a configuration tool for pre-commit Git hooks.
5. [Babel](https://babeljs.io/)a JavaScript compiler for managing compatibility between older version of JavaScript.
6. [Jest](https://jestjs.io/) a unit testing framework.
7. [Cypress](https://www.cypress.io/) an end to end testing package, automating front end testing.
8. [Vite](https://vitejs.dev/) a bundler for rapid development of front end projects.
9. [dotenv](https://www.npmjs.com/package/dotenv) loads environment variables from a .env file into process.env.

## **Tests** <a id="tests"></a>

### **Unit Testing, Jest** <a id="jest"></a>

Added the following test files;

**login.test.js**

- Tests successful login.
  - Checks for correct profile object being returned.
  - Checks local storage for valid access token.
- Tests unsuccessful login.
  - Checks error is thrown from an unauthorized request.

**logout.test.js**

- Test logout function.
  - Checks local storage key "profile" has been removed.
  - Checks local storage key "token" has been removed.

**create.test.js**

- Tests successful post creation.
  - Checks response object it returned correctly
- Tests bad request unsuccessful post creation.
  - Checks error is thrown from a bad request.
- Tests unauthorized unsuccessful post creation.
  - Checks error is thrown from an unauthorized request.

To run these tests use;

```
npm run test-unit
```

### **End To End Testing, Cypress** <a id="cypress"></a>

Added the following end to end test files for Cypress.

**login.cy.js**

- Tests login with valid credentials.
  - Checks local storage tokens for "profile" and "token" are set.
  - Checks user is redirected to the profile page.
- Tests login validates email input for valid email pattern.
  - Checks for email invalid input and focus.
  - Checks local storage tokens for "profile" and "token" are null.
  - Checks URL hasn't changed.
  - Checks login form modal is still present.
- Tests login form validation with invalid email.
  - Checks for email invalid input and focus.
  - Checks local storage tokens for "profile" and "token" are null.
  - Checks URL hasn't changed.
  - Checks login form modal is still present.
- Tests login form validation password length.
  - This is incorrectly submitted when testing in cypress, removed this check for password `Checks for password invalid input and focus.`
  - Checks local storage tokens for "profile" and "token" are null.
  - Checks URL hasn't changed.
  - Checks login form modal is still present.
- Tests login error handling with invalid password.
  - Checks for alert message for failed login.
  - Checks local storage tokens for "profile" and "token" are null.
  - Checks URL hasn't changed.
  - Checks login form modal is still present.

**logout.cy.js**

- Tests logout.
  - Checks user is redirected.
  - Checks local storage tokens for "profile" and "token" are null.

**createPost.cy.js**

- Tests user can create a post.
  - Checks user is redirected to create post.
  - Checks post is deleted.
- Tests form validates inputs on attempted submissions.
  - Checks empty form can't be submitted.
  - Checks media input validates for URLs.
  - Checks a post title is required.
- Tests the handling for thrown errors
  - Checks form can handle a thrown error.

Before running Cypress tests ensure you are running your local server with vite using `npm run dev`. As well as having created a `.env` file and matching this example inputting your own email and password for the site.

```
PASSWORD=PASSWORD
EMAIL=EXAMPLE@NOROFF.NO
BASEURL=http://127.0.0.1:8080/
```

These can be run through the Cypress interface using;

```
npm run test-e2e
```

Alternatively they can be run in the command line using;

```
npm run test-e2e-cli
```

## **Complete Project Setup and Configuration** <a id="configuration"></a>

Create `.gitignore` and add, to ensure your not uploading large node_modules to your github repo.

```
/node_modules
/dist
```

### **Code Formatters** <a id="formatters"></a>

This guide is done using VSC, you will need the `Prettier - Code formatter` and `ESLint` extensions installed to vsc for on save actions to work.

Install Prettier.

```
npm install -D prettier
```

Install eslint.

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

Add scripts to `package.json`.

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

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```

### **Unit Testing Packages** <a id="jest-setup"></a>

Install Jest.

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

Update `.eslintrc.json` settings.

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

Install Babel.

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Create `babel.config.json` and add.

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

To add pre-commit hook for Jest, `.husky/pre-commit` add to file;

```
npm run test-unit
```

### **End To End Test Packages** <a id="cypress-setup"></a>

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

#### **Replaced Live server with Vite** <a id="vite-setup"></a>

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

```
export default {
  server: {
    port: 8080,
    hot: true,
    host: "127.0.0.1",
  },
};
```

#### **Add dotenv for use in cypress** <a id="dotenv-setup"></a>

Install dotenv

```
npm install -D dotenv
```

Modify the `cypress.config.js` to match this setup to import .env variables which can be called in tests using Cypress.env("key"). If you wish to record your tests you can remove `video: false`.

```js
require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      (config.baseUrl = process.env.BASEURL),
        (config.env = {
          ...process.env,
          ...config.env,
        });
      return config;
    },
  },
});
```

Create `.env` file in root and fill it with your own details for Cypress testing, the shown base URL can be used as is with the vite setup to test you current project, or it can be replaced with with a hosted URL. When running this project on actions you will need to define these in github secrets on the repository settings.

```
PASSWORD=PASSWORD
EMAIL=EXAMPLE@NOROFF.NO
BASEURL=http://127.0.0.1:8080/
```

Add `.env` to `.gitignore` file, should now be;

```
/node_modules
/dist
.eslintcache
/cypress/screenshots
/cypress/videos
.env
```
