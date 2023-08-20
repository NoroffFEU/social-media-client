# Social media client - semester project

## Overview

The project has been set up with several tools for quality assurance and testing. 

### Linting and Formatting

1. Added `.eslintrc.json` with basic configuration for ESLint.
2. Added `.gitignore` to exclude `node_modules`, `dist`, and `.eslintcache`.
3. Added `prettier` for code formatting, along with a script in `package.json`.
4. Added `eslint` for linting JS files, along with a script in `package.json`.

### Husky and Lint-Staged

1. Installed `husky` for pre-commit hooks.
3. Added `lint-staged` configuration for automated linting and formatting of staged JS, SCSS, HTML, and CSS files.

### Testing

1. Updated `.eslintrc.json` with specific linting rules for test files, added plugins for `jest` and `cypress`.
2. Added `babel.config.json` for transpiling code targeting the current Node version.
3. Added Cypress end-to-end tests in `cypress/e2e/Frontpage.cy.js`.
4. Added a Cypress fixture in `cypress/fixtures/example.json` for mock data.
5. Updated `index.html` with an ID for the login button.
6. Added scripts in `package.json` for unit and end-to-end testing.
7. Updated `devDependencies` with Babel presets, Cypress, Jest, and ESLint plugins for Jest and Cypress.
8. Added Jest unit test in `src/js/api/auth/login.test.js` for the `login` function.

## Usage

1. To run the live server and watch for SCSS changes, use the command: `npm start`.
2. To build the SCSS into CSS, use the command: `npm run build`.
3. To format JS files with Prettier, use the command: `npm run format`.
4. To lint JS files with ESLint, use the command: `npm run lint`.
5. To run unit tests with Jest, use the command: `npm run test-unit`.
6. To open the Cypress test runner, use the command: `npm run test-e2e`.
7. To run Cypress tests in the CLI, use the command: `npm run test-e2e-cli`.
8. To run all tests, use the command: `npm test`.

## Author

- Noroff / Sander valen handeland

## License

- ISC
