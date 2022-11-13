[Automated E2E Testing](https://github.com/AugustWahlberg/social-media-client/actions/workflows/e2e_test.yml)
[Automated Unit Testing](https://github.com/AugustWahlberg/social-media-client/actions/workflows/unit_test.yml)
[pages-build-deployment](https://github.com/AugustWahlberg/social-media-client/actions/workflows/pages.yml)
# Project description

This is a social media application project made by Noroff. The project uses Noroff APIs as a database. As for the workflow the following is added:

- ## Prettier installation

  Purpose: to apply standardised code formatting

- ## Eslint installation

  Purpose: to analyse the code you have written and warn or automatically fix issues it detects.

- ## Mrm installation

  Purpose: to create a pre-commit hooks that will automatically run ESLint and Prettier

- ## Jest installation

  Purpose: to run unit tests for functions

- ## Babel installation

  Purpose: to be able to use modern JavaScript syntax in our testing with Jest

- ## Cypress installation

  Purpuse: to be able to run end-to-end testing for our web application

- ## Automated testing in the Github repository
  Purpose: to run our tests when doing a Pull Request

# Installation steps

## Install prettier as development dependency

npm install --save-dev prettier

## Install eslint as development dependency

npm install eslint --save-dev

## Eslint setup

npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON

## Update script in package

"format": "prettier -w src/js/**/\*.js",
"lint": "eslint src/**/_.js",
"lint-fix": "eslint src/\*\*/_.js --cache --fix"

## Install pre-commit hooks -mrm

npx mrm@2 lint-staged

## Update package file wit lint stages

{
"_.js": [
"prettier --write",
"eslint --fix"
],
"_.html": [
"prettier --write"
],
"\*.scss": [
"prettier --write"
]
}

## Install Jest

npm i -D jest@29.2.0

## Update scripts in package file

"test": "npm run test-unit",
"test-unit": "jest"

## Install eslint Jest plugin

npm i -D eslint-plugin-jest

## Update eslint configuration

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
}
],
"parserOptions": {
"ecmaVersion": "latest",
"sourceType": "module"
},
"rules": {
}
}

## Install Babel

npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

## Add Babel configuration to babel.config.json

{
"presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}

## Install Cypress

npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1

## Update script in package file

"test-e2e": "cypress open",
"test-e2e-cli": "npm run test-e2e",
