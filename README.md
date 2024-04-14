# Workflow-ca

## Description

This is a school assignment for the subject "Workflow". The goal for the
assignment was to improve the quality of a package by establishing helpful
workflows that make the development process more efficient.

## Built With

- HTML
- SCSS/SASS
- Bootstrap
- JavaScript
- Prettier
- ESlint
- Husky
- Babel
- Jest
- Cypress

## Getting started

### Installations

To get started, clone the repo and open in a code editor.

```bash
git clone [https://github.com/TaranJ/social-media-client.git]
```

Use the following terminal command to install all necessary dependencies:

```bash
npm install
```

## Testing

Tests are run automatically when a pull request is created.

### Test status

[![Automated Unit Testing](https://github.com/TaranJ/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/TaranJ/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/TaranJ/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/TaranJ/social-media-client/actions/workflows/e2e-test.yml)

### Unit-testing

Jest-tests are found inside src/js/test. To run unit-tests with jest, use the
following terminal command:

```bash
npm run test
```

### E2E-testing

Cypress-tests are found inside cypress/e2e/testing. To E2E-test with Cypress,
use the following terminal command:

```bash
npm run test-e2e
```

Open Cypress in Electron and run the tests in the browser.

Optionally, you can run the tests in the terminal with this command:

```bash
npm run test-cypress
```

_N.B. You might need to edit the cypress.config.js file for the tests to work.
Insert valid login credentials in the environment variables_

## Author

- Taran Johannessen
