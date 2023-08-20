# social-media-client Workflow CA

## Tests

Running tests from your terminal editor

Run a jest unit-test:

```
npm run test
```

Cypres for a visual testing on a browser

```
npm test-e2e
```

Run end 2 end test and display it on the terminal

```
npm test-e2e-cli
```

## Unit tests will check if

- The login function fetches and stores a token in browser storage
- The logout function clears the token from the local storage

## End-to-end tests will check if

- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button

## Hooks on commit

- To allow a fixing hook on commit you shoud add "eslint --fix".
  Inside the package.json under "lint-staged" you can chose where to use it,
  under "_.js", "_.html" and "\*.scss" if you chose to do it make sure is after "prettier --write".
