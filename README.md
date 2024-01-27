[![Deploy static content to Pages](https://github.com/DrRuski/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/DrRuski/social-media-client/actions/workflows/pages.yml)

[![Automated Cypress Testing](https://github.com/DrRuski/social-media-client/actions/workflows/automated-e2e-testing.yml/badge.svg)](https://github.com/DrRuski/social-media-client/actions/workflows/automated-e2e-testing.yml)

[![Automated Unit Testing](https://github.com/DrRuski/social-media-client/actions/workflows/automated-unit-testing.yml/badge.svg)](https://github.com/DrRuski/social-media-client/actions/workflows/automated-unit-testing.yml)

# Social Media Client - Workflow CA

### Table of Contents

1. Getting Started.
2. Prettier Configurations.
3. ESLint Configurations.
4. Branch Protection.
5. Jest Unit Testing.
6. Cypress E2E Testing.
7. Github Actions Workflow.

## 1. Getting Started

1. Clone the repo through github website or CLI command:
```
git clone https://github.com/DrRuski/social-media-client.git
```
2. Run ```npm install``` to install all dependencies.
3. Run ```npm start``` to start the development server.

## 2. Prettier

1. Configurations for VSCode workspace settings to format with prettier on save ```.vscode``` > ```settings.json```

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```
2. Configurations for ```package.json``` which include ```lint-staged``` dependency to format on commit

```json
"lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
  ```

## 3. ESLint

```.eslintrc.json``` file configurations include

1. ```overrides``` for both ```Jest Unit Testing``` and ```Cypress E2E Testing```

```json
"overrides": [
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    },
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
  ]
  ```
  
2. ```rules``` for ```cypress.config.js``` file which will ignore ```no-unused-vars```, this config prevents eslint from triggering a total halt of the process when commiting.
```json

"rules": {
    "cypress/no-unnecessary-waiting": "off",
    "no-unused-vars": "error"
  }
  ```

## 4. Branch Protection

Repo's default (master) branch is protected with the following rules

1. Require a pull request before merging
2. Require status checks to pass before merging
3. Require branches to be up to date before merging
4. Do not allow bypassing the above settings 

## 5. Jest Unit Testing

### Babel
For the jest unit testing to work with the current coding syntax this project incorporates the use of ```Babel``` dependency:
 - the configurations for the ```babel.config.json``` file are
```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

### Jest Tests

Jest unit testing includes two test files that test the login and logout functions:

1. Login Function
```
The login function is expected to make a request to a server to authenticate a user and retrieve an access token.

The test uses mock functions to simulate successful and unsuccessful responses from the server.
It tests that the login function fetches and saves the access token key when the response is successful,
deletes the token value when called again, and throws an error with the correct message when the response
is unsuccessful due to invalid credentials.

Overall, the tests ensure that the login function behaves correctly and handles different scenarios appropriately.
```

2. Logout Function
```
The logout function is expected to clear the access token from browser storage.

The test uses a mock implementation of browser storage and tests that the logout function successfully
clears the access token key and value from storage when called.

Overall, the test ensures that the logout function behaves correctly and clears the appropriate data from storage.
```

## 6. Cypress E2E Testing

### Cypress.env.json

To protect any vital user credentials, this project incorporates the use of ```cypress.env.json``` file.

1. Make a `cypress.env.json` file in your root folder.
2. Add this file into `.gitignore`.
3. Populate your `cypress.env.json` file with desired user information:
   
   ```json
   {
      "user-email": "your-desired-user-email",
      "user-password": "the-connected-user-password"
   }
   
4. You can now use these variables across your tests by calling them with `Cypress.env('user-email')`, example:
   
   ```js
   cy.get("input#loginEmail[type='email']").type(Cypress.env("user-email"));.
   ```
### E2E Tests

1. ```Invalid``` User Credentials
```
The test uses Cypress, a JavaScript-based end-to-end testing framework, to interact with the application UI and
verify its behavior.

It clears the local storage, visits the login page, and enters invalid login credentials.
Then, it checks that an error message is displayed with the expected text.

```

2. ```Valid``` User Credentials
```
The test uses Cypress to interact with the application UI and verify its behavior.
It clears the local storage, visits the login page, enters valid login credentials, and clicks the login button.
Then, it checks that the URL includes the "profile" path, indicating that the user has been
redirected to their profile page.

```

3. Logout Behavior
```
This test checks if a user can successfully log out of the Noroff SoMe application.
It starts by clearing the local storage and visiting the application homepage, and then logging in
with valid user credentials.
Once logged in, it waits for 1.5 seconds and then clicks on the logout button.

It then waits for 1 second and checks if the token has been removed from the local storage,
confirming that the user has been logged out.
```

## 7. Github Actions Workflow

The repo has three (3) active workflow actions that do the following:

1. Runs ```Jest Tests``` on ```pull_request``` or ```workflow_dispatch```.
2. Runs ```Cypress E2E Tests``` on ```pull_request``` or ```workflow_dispatch```.
   - The cypress workflow incorporates the use of a ```secret``` to write and call on a action specific ```cypress.env.json``` file that has user credentials for the tests to properly work.
3. Deploys static content to pages on ```workflow-ca-v2``` branch push.
