[![Automated Unit Testing](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/unit-testing.yml/badge.svg)](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/unit-testing.yml)

[![Automated end-to-end Testing](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/e2e-tesiting.yml/badge.svg)](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/e2e-tesiting.yml)

[![Deploy static content to Pages](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/builddeploy.yml/badge.svg)](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/builddeploy.yml)

## NPM
````
npm install --save-dev prettier

npm install eslint --save-dev

npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON


npx mrm@2 lint-staged

- Add to package.json: 

"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix",
      "jest --coverage"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }


npm i -D eslint-plugin-jest
````
## .eslintrc.json config1
````
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
          "rules": { "jest/prefer-expect-assertions": "off" }
        },
        {
          "files": ["**/cypress.config.js"],
          "env": { "cypress/globals": true },
          "plugins": ["cypress"],
          "extends": ["plugin:cypress/recommended"],
          "rules": {
            "cypress/no-unnecessary-waiting": "off",
            "no-unused-vars": "off",
            "no-undef": "off"
          }
        }
      ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
      "no-undef": "off"
    }
}
````
## cypress.config.js

/* global _:readonly */

````
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
````
## babel.config.json
````
{
    "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
  }
````

## package.json

````
{
  "name": "css-frameworks-ca",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest --coverage",
    "test-e2e": "cypress open",
    "build": "sass src/scss:dist/css",
    "start": "sass --watch src/scss:dist/css & live-server",
    "format": "prettier -w src/js/**/*.js",
    "lint": "eslint src/js/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix",
    "prepare": "husky install"
  },
  "keywords": [],
  "author": "Noroff",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.19.3",
    "@babel/preset-env": "^7.19.4",
    "cypress": "^10.7.0",
    "eslint": "^8.26.0",
    "eslint-plugin-cypress": "^2.12.1",
    "eslint-plugin-jest": "^27.1.3",
    "husky": "^8.0.1",
    "jest": "^29.2.0",
    "lint-staged": "^13.0.3",
    "live-server": "^1.2.2",
    "prettier": "^2.7.1",
    "sass": "^1.54.8"
  },
  "dependencies": {
    "bootstrap-dark-5": "^1.1.3"
  },
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix",
      "jest --coverage"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
}

````