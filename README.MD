# Workflow CA

[![Code Review](https://github.com/Sugal99/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/Sugal99/social-media-client/actions/workflows/gpt.yml)

[![Deploy static content to Pages](https://github.com/Sugal99/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Sugal99/social-media-client/actions/workflows/pages.yml)

[![Automated Unit Testing](https://github.com/Sugal99/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/Sugal99/social-media-client/actions/workflows/unit-test.yml)

<<<<<<< HEAD
=======

[![Automated E2E Testing](https://github.com/Sugal99/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/Sugal99/social-media-client/actions/workflows/e2e-test.yml)

>>>>>>> df6fafb487f37017bcefa7907c3ad4eed8823410
### Prettier & ESLint

Prettier is an opinionated code formatter that automatically formats your code, ensuring a consistent style and making it more readable. I've incorporated ESLint and Prettier to maintain uniform coding standards and identify errors proactively.
ESLint conducts static code analysis to detect issues, while Prettier automatically formats our code for consistency and readability.

Installation:

```bash
npm install prettier --save-dev
```

Run Prettier:

```bash
npm run format
```

Installation:

```bash
npm install eslint --save-dev
```

Run eslint:

```bash
npm run lint
```

### Commit Hooks

Commit hooks enable running tasks before commits are made, ensuring code quality and consistency.
Leveraging Husky, we've configured pre-commit hooks to execute linting and formatting tools specifically on staged files.

To include a pre-commit hook that activates lint-staged, ensure you've executed "npm run prepare" at least once to establish Husky hooks.

```bash
npm run prepare
```

With this configuration, when committing changes, Husky will initiate lint-staged, initiating Prettier and ESLint on the specified staged files.

### GitHub Actions Integration

Automate workflows using GitHub Actions to run tests, build processes, and deploy your project.
I have incorporated GitHub Actions into the project to optimize several phases of the development workflow. By implemeting this, the integration ensures consistency and enhances overall code quality.

### Jest

Jest is a JavaScript testing framework for unit tests, ensuring code correctness.

Running Jest:

```bash
npm run test-unit
```

### Cypress

Cypress is an end-to-end testing framework for testing web applications.

Running Cypress:

```bash
npm run test-e2e
```

### E2E Testing with Cypress

Unit tests are tests that verify the integrity of authentication processes, encompassing login, registration, and logout functionalities, across diverse scenarios to ensure their correctness.

Test Files:

- login.cy.js
  The tests that were written here goes as follows:

* a user can log in and access their profile
* The user gets denied with invalid info
* The user gets denied with empty credentials
* The user gets denied with an empty password field
* The user gets denied with an empty email field

- logout.cy.js
  The tests that were written here goes as follows:

* a user successfully logs in existing user, to then log out.

### Unit Testing with Jest

Test files:

- login.test.js

* The login function fetches and stores a token in browser storage

- logout.test.js

* The logout function clears the token from browser storage
