# Workflow Course Assignment

## Status badges

[![Deploy static content to Pages](https://github.com/May-Tove/workflow-ca/actions/workflows/static.yml/badge.svg)](https://github.com/May-Tove/workflow-ca/actions/workflows/static.yml) [![Automated E2E Testing](https://github.com/May-Tove/workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/May-Tove/workflow-ca/actions/workflows/e2e-test.yml) [![Automated Unit Testing](https://github.com/May-Tove/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/May-Tove/workflow-ca/actions/workflows/unit-test.yml)

## About the project

This assignment is a part of the workflow course on Noroff. The goal is to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient.  
The source code is provided by Noroff and is a social media client using Noroff's own API.

## How to Install and Run the Project

Clone this repo and run npm i to install packages and dependencies

    npm i

Run Sass build script

    npm run build

## Setup and Configuration

**The following workflows/hooks are required:**

* Project is configured to run Prettier on commit
* Project is configured to run ESLint on commit
* Project is configured to run Jest on commit
*Project is configured to deploy to pages on merge to default

Installing Prettier

    npm install --save-dev prettier

Installing ESlint

    npm install eslint --save-dev

Setting up ESLint, This will create a .eslintrc file in your project folder that contains the rules that ESLint will use

    npx eslint --init

Recommended answers for this project

    How would you like to use ESLint? · problems
    What type of modules does your project use? · esm
    Which framework does your project use? · none
    Does your project use TypeScript? · No
    Where does your code run? · browser
    What format do you want your config file to be in? · JSON

Install pre-commit package

    npx mrm@2 lint-staged

Update script in package.json file

```json
  "scripts": {
    "format": "prettier -w src/js/**/**/*.js",
    "lint": "eslint src/js/**/**/*.js",
    "lint-fix": "eslint src/js/**/**/*.js --cache --fix"
  }
```

Update lint-staged to run scripts on commit

```json
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

## Testing

### Unit testing with Jest

**The following features must be automatically tested with unit tests:**

* The login function returns a valid token when provided with valid credentials
* The logout function clears the token from browser storage
* The create item function creates a new item on the API

Installed jest

    npm i -D jest@29.2.0

Added the following scripts in package.json

```json
{
  "scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest"
  }
}
```

Configuring the Environment for Jest

    npx eslint --init

    How would you like to use ESLint? · problems
    What type of modules does your project use? · esm
    Which framework does your project use? · none
    Does your project use TypeScript? · No
    Where does your code run? · browser
    What format do you want your config file to be in? · JSON
    Local ESLint installation not found.
    The config that youve selected requires the following dependencies:

    eslint@latest
    Would you like to install them now? · Yes
    Which package manager do you want to use? · npm

The result will be a .eslintrc.json like this:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

Install the eslint-plugin-jest package

    npm i -D eslint-plugin-jest

Update .eslintrc.json file with overrides

```json
    "overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ],
```

Configuring Babel for Jest

    npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

Create a file called babel.config.json and add the following content:

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

To run unit test use:

    npm run test-unit

### End to end testing with Cypress

**The following features must be automatically tested with end-to-end tests:**

* The login form validates user inputs correctly based on API restrictions
* The create item form validates user inputs correctly based on API restrictions
* The logout button logs the user out when clicked

Install Cypress

    npm i -D cypress eslint-plugin-cypress@2.12.1

Update eslint.config.json with configuration data for linting Cypress tests:

```json
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
    }
  ]
```

Add a new script to your package.json file:

```json
{
  "scripts": {
    "test": "npm run test-e2e",
    "test-e2e": "cypress open"
  }
}
```

To run tests use:

    npm run test-e2e
