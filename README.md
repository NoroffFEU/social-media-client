## Badges

[![Deploy static content to Pages](https://github.com/alexanderdyb/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/alexanderdyb/social-media-client/actions/workflows/pages.yml)

[![Code Review](https://github.com/alexanderdyb/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/alexanderdyb/social-media-client/actions/workflows/gpt.yml)

[![Automated Unit Testing](https://github.com/alexanderdyb/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/alexanderdyb/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/alexanderdyb/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/alexanderdyb/social-media-client/actions/workflows/e2e-test.yml)

## Getting started

Before you start the project, make sure you have Node.js and npm installed on your machine.

Install the Dependencies:

npm i

## Configuration

- SASS for styling, along with a build script for compiling SASS to CSS.
- Live-reloading with `live-server` for immediate feedback during development.
- ESLint for linting JavaScript files.
- Prettier for code formatting.
- Husky and lint-staged for ensuring code quality through pre-commit hooks.
- Unit testing with Jest.
- End-to-end testing with Cypress.

## Dependencies

- Styling: sass, bootstrap-dark-5
- Development: live-server
- Testing: jest, cypress
- Linting & Formatting: eslint, prettier
- Others: husky, lint-staged

## Testing

Run unit tests:
npm run test-unit

Run end-to-end tests:
npm run test-e2e

## To lint JavaScript files:

npm run lint

## To format code:

npm run format
