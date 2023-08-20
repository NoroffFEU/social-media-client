# Workflow CA - NorOff

## Installation

Clone and run cli commands

```
npm i
npm run build
```

Linting is added through git hooks and utilizes ESLint and Prettyfier.

## Unit tests

- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

## E2E tests

- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button

[![Automated E2E Testing](https://github.com/CamillaHorneland/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/CamillaHorneland/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/CamillaHorneland/social-media-client/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/CamillaHorneland/social-media-client/actions/workflows/pages.yml)
[![Automated Unit Testing](https://github.com/CamillaHorneland/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/CamillaHorneland/social-media-client/actions/workflows/unit-test.yml)
