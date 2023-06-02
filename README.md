# social-media-client

Eslint, Cypress, Jest, Husky and Prettier are in the dependencies

Husky runs on git commit

Scripts for individual tests:

Jest: $npm test

Cypress: $npm run test-e2e
         $npm run test-e2e-cli

Eslint: $npx lint-staged

Prettier: $npm run format

Tests that are already made with cypress: 

1. Checking if token in localstorage is deleted on logout
2. Checking for error message when loging in with invalid credentials
3. Checking the user can log in and access their profile

(mock localstorage is also included for tests)

Merging: 
When merging it needs one peer review and has to pass all tests.
