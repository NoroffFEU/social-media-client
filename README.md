## Status Badges

### [![Automated Unit Testing](https://github.com/griphaugland/ca_workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/griphaugland/ca_workflow/actions/workflows/unit-test.yml)

### [![Automated E2E Testing](https://github.com/griphaugland/ca_workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/griphaugland/ca_workflow/actions/workflows/e2e-test.yml)

### [![Deploy static content to Pages & test all](https://github.com/griphaugland/ca_workflow/actions/workflows/pages.yml/badge.svg)](https://github.com/griphaugland/ca_workflow/actions/workflows/pages.yml)

This project includes a variety of tests and a CI/CD pipeline to ensure code quality and deployment efficiency.

# Configuration

## Automatic testing

On creation of pull request from workflow branch to master branch, the unit and end-to-end tests are run automatically in Github Actions. If this passes, it will be possible to merge the workflow branch into the master branch. When this is done, the project is deployed to github pages on merge to master branch.

## Usage

The package.json file includes scripts for building the project, starting a local development server, and running tests:

    npm run build: Compile SASS files to CSS.
    npm start: Start the SASS compiler in watch mode and run a live server.
    npm test: Run lint, unit, and end-to-end tests.
    npm run test-lint: Run linting on staged files.
    npm run test-unit: Run unit tests with Jest.
    npm run test-e2e: Open Cypress in interactive mode.
    npm run test-e2e-cli: Run Cypress tests in headless mode.

Make sure to install all dependencies with npm install before running the above commands.

## Development Dependencies

Here's a list of development dependencies used in this project:

    Cypress for end-to-end testing.
    ESLint with Prettier for code linting and formatting.
    Jest for unit testing.
    Husky and lint-staged for managing and running linters on git staged files.

## Production Dependencies

Dependencies required for the production build:

    bootstrap-dark-5: A dark-themed Bootstrap extension.
    dotenv: Loads environment variables from a .env file into process.env.
    chokidar, glob-parent: Utilities used by the live-server for watching file changes.

## Contributing

Feel free to submit pull requests to contribute to this project. Ensure that all tests pass and that you adhere to the existing coding standards.

## Try the project for your self

### Environment Variables

Create a `.env` and a `cypress.env.json` file in the root directory of your project and add the following environment variables:

#### .env ->

LOGIN_NAME=enteryourownname
LOGIN_USERNAME=enteryouremail@noroff.no
LOGIN_PASSWORD=yourpassword
LOAD_TOKEN=YourTokenhEre

#### cypress.env.json ->

{
"LOGIN_USERNAME": "enteryouremail@noroff.no",
"LOGIN_PASSWORD": "yourpassword"
}

Replace the placeholders with your actual credentials to ensure proper environment setup.
Cypress Configuration

Ensure that the cypress.env.json file is present in the root of the project with the following content:

{
"LOGIN_USERNAME": "enteryouremail@noroff.no",
"LOGIN_PASSWORD": "yourpassword"
}

Again, replace the placeholders with valid credentials for
