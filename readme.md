Social media client

-Description
This is a project for testing purposes.

-Installation
To install the project dependencies, run:

npm install

-Usage
To build the project, run:

npm run build

To start the development server with live reloading, run:

npm start

-Scripts
build: Compiles Sass files in src/scss directory to CSS in dist/css directory.
start: Starts the Sass watcher and live-server for development.
lint: Runs ESLint to lint JavaScript files.
lint-fix: Runs ESLint with --fix option to automatically fix linting issues.
test: Runs Jest for testing.
test:watch: Runs Jest in watch mode for interactive testing.
test2: Alias for test-e2e.
test-e2e: Opens Cypress for end-to-end testing.

-Dependencies
bootstrap-dark-5: Bootstrap Dark theme version 5.
DevDependencies
@babel/core: Babel core package.
@babel/preset-env: Babel preset for compiling JavaScript.
@testing-library/jest-dom: Jest DOM utilities for testing.
@testing-library/react: Testing utilities for React components.
cypress: End-to-end testing framework.
eslint: ESLint for linting JavaScript.
eslint-config-prettier: ESLint configuration for Prettier.
eslint-plugin-cypress: ESLint plugin for Cypress.
eslint-plugin-jest: ESLint plugin for Jest.
eslint-plugin-prettier: ESLint plugin for Prettier integration.
globals: Global variables for JavaScript projects.
husky: Git hooks made easy.
jest: Testing framework.
jest-fetch-mock: Jest fetch mock for mocking HTTP requests.
lint-staged: Run linters on git staged files.
live-server: Development server with live reloading.
prettier: Code formatter.
sass: Sass compiler.
