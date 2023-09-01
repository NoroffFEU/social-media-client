Social Media Client Workflow

Installs and additions:
Included a basic ESLint configuration in the .eslintrc.json file 
and added .gitignore file to exclude common build artifacts like node_modules, dist, and .eslintcache.
ESLint is set up for linting JavaScript files, and there's an npm script to run it.
Prettier is integrated for code formatting, and you can run it with the provided npm script.
Added Husky to set up pre-commit hooks. 
The project includes a configuration for lint-staged to automatically lint and format staged JavaScript, SCSS, HTML, and CSS files.

Testing
The .eslintrc.json file has been updated with some linting rules for test files and there is also added plugins for Jest and Cypress. 
Plus added babel.config.json file to transpile code.
Cypress end-to-end tests are located in the cypress/e2e/ directory.
You can run unit tests with Jest using the provided npm script.
For end-to-end testing, there are npm scripts to open the Cypress test runner or run tests in the CLI.

Open the Cypress test runner with npm run test-e2e.
Run Cypress tests in the CLI using npm run test-e2e-cli.
To run all tests, simply use npm test
