[![Deploy static content to Pages](https://github.com/DrRuski/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/DrRuski/social-media-client/actions/workflows/pages.yml)
[![Automated Unit Testing](https://github.com/DrRuski/social-media-client/actions/workflows/automated-unit-testing.yml/badge.svg)](https://github.com/DrRuski/social-media-client/actions/workflows/automated-unit-testing.yml)
[![Automated Cypress Testing](https://github.com/DrRuski/social-media-client/actions/workflows/automated-e2e-testing.yml/badge.svg)](https://github.com/DrRuski/social-media-client/actions/workflows/automated-e2e-testing.yml)

## Cypress

1. Make a `cypress.env.json` file in your root folder.
2. Add this file into `.gitignore`.
3. Populate your `cypress.env.json` file with desired user information:
   `{"user-email": "your-desired-user-email", "user-password": "the-connected-user-password"}`
4. You can now use these variables across your tests by calling them with `Cypress.env('user-email')`, example:
   `cy.get("input#loginEmail[type='email']").type(Cypress.env("user-email"));`.
