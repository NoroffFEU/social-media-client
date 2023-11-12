## Configurations

### GitHub Actions

We have implemented GitHub Actions to automate our development process:

1. **Code Review**: Automatically reviews code in pull requests using OpenAI.
2. **Deployment**: Automatically deploys our application to GitHub Pages whenever there's a push to the master branch.

### Dependencies

- [Bootstrap Dark 5](https://www.npmjs.com/package/bootstrap-dark-5): For theming.
- [SASS](https://sass-lang.com/): Used for styling and generating CSS.
- Other dev dependencies include tools for linting (ESLint) and code formatting (Prettier).

## Workflow Status

[![Automated E2E Testing](https://github.com/RamtinMoshtagh/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/RamtinMoshtagh/social-media-client/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/RamtinMoshtagh/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/RamtinMoshtagh/social-media-client/actions/workflows/unit-test.yml)

# Testing Documentation

## How to Run Tests

Our project includes a comprehensive suite of automated tests to ensure high-quality code and robust functionality. Below are the steps to execute these tests.

### Unit Tests

Unit tests check the smallest part of the application in isolation (e.g., functions, methods). To run unit tests, use the following command:

```bash
npm test
```

### End-to-End Tests

End-to-End tests simulate user interactions with the application from start to finish. To run these tests, you'll need to have Cypress installed. Then, use the following command:

```bash
npx cypress open
```
This will launch the Cypress Test Runner, which allows you to run individual or all E2E test suites interactively.

### End-to-End Test Coverage
Our E2E tests use Cypress to validate critical user flows:
Login Flow: Tests that a user can log in with valid credentials and is redirected to their profile page.
Login Validation: Ensures appropriate error messages are displayed when login attempts fail with invalid credentials.
Logout Flow: Confirms that a user can log out using the logout button and that the application's state reflects this action, by checking the visibility of the login button and the absence of the authentication token in local storage.

### Test Coverage
Our unit tests cover the following functionalities:
Login: Ensures the login function interacts with the API, successfully retrieves an authentication token, and stores it in the browser's local storage.
Logout: Verifies the logout function removes the authentication token from local storage, effectively logging the user out of the application.
