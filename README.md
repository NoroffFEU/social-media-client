[![Automated E2E Testing](https://github.com/bushrakalaji/Workflow-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/bushrakalaji/Workflow-ca/actions/workflows/e2e-test.yml)

[![Deploy static content to Pages](https://github.com/bushrakalaji/Workflow-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/bushrakalaji/Workflow-ca/actions/workflows/pages.yml)

[![Automated Unit Testing](https://github.com/bushrakalaji/Workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/bushrakalaji/Workflow-ca/actions/workflows/unit-test.yml)

# Workflow CA

## Goal

To improve the quality of an existing environment by establishing useful workflows that make the development process more efficient.

## workflows/hooks

- Project is configured to run Prettier on commit.
1. Install 
````
npm install --save-dev prettier

````
2. Adding script to package.json
````
{
  "scripts": {
    "test": "node src/js/**/*.js",
    "format": "prettier -w src/js/**/*.js"
  },
}

````
3. Run the command 
````
npm run format

````
- Project is configured to run ESLint on commit.
1. Install 
````
npm install  Eslint --save-dev 

````
2. Setting up ESLint
````
npx eslint --init

````
This will ask you a series of questions. Here are the recommended answers:
````
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON

````


3. Adding script to package.json
````
{
  "scripts": {
    "lint": "eslint src/js/**/*.js",

  },
}

````
4. Run the command 

````
npm run lint

````

You should see two errors in the code 

As indicated in this message, there are two syntax errors in the code - and one can be automatically resolved with the --fix option:

````
"scripts": {
  "lint": "eslint src/**/*.js",
  "lint-fix": "eslint src/**/*.js --cache --fix"
},
````

Run the new task to resolve one of the errors:

````
npm run lint-fix

````

- Project is configured to run Jest on commit.
1. Install 
````
npm i -D jest@29.2.0

````
2. Adding script to package.json
````
{
  "scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest"
}

````

3. Before we run this test, you will notice a red underline warning from eslint.
````
npm i -D eslint-plugin-jest

````
4. We will need to enable this plugin within our .eslintrc.json file at the same time as setting various other configurations.
````
"overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }

````
 This indicates that eslint has been configured to allow jest functions to be used in our project.

- Configuring Babel for Jest

1. Install babel
````
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

````
2. we need to create a file called babel.config.json and add the following content:
````
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}

````


- Run unit test after installing jest and babel

````
npm run test-unit

````
- Project is configured to deploy to pages on merge to default.

## File changes 

- Project readme file is updated to include new configuration information and status badges.
- Project is configured for hosting (e.g. CDN links or a Bundler).

## Tests

### This features will be automatically tested with unit tests:

- The login function returns a valid token when provided with valid credentials.
- The logout function clears the token from browser storage.
- The create item function creates a new item on the API.

### This features will be automatically tested with end-to-end tests:

1. Install Cypress

````
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1

````
Now we should update eslintrs.json with configuration data for linting Cypress tests:

````
"overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    }
    ````

    Next, add a new script to your package.json file:
     ````
    {
  "scripts": {
    "test": "npm run test-e2e",
    "test-e2e": "cypress open"
     ````

2. Run Cypress
````
npm run test-e2e

````
- The login form validates user inputs correctly based on API restrictions.
- The create item form validates user inputs correctly based on API restrictions.
- The logout button logs the user out when clicked.


## Built With

- [HTML](https://html.com/)
- [CSS](https://css.com/)
- [JavaScript](https://www.javascript.com/)


