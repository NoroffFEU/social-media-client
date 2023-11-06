# social-media-client

# Badges

[![Unit testing](https://github.com/Miksel90/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/Miksel90/social-media-client/actions/workflows/gpt.yml)

[![E2E testing](https://github.com/Miksel90/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/Miksel90/social-media-client/actions/workflows/gpt.yml)

## Installation

Clone the repo and open.
Initialize git

```
git init
```

Install dependencies

```
npm i
```

Build SASS

```
npm run build
```

## Tests

### Unit testing, Jest

Added the following test files;

- /auth/login.test.js
  - Tests successful login
  - test storing token
- /storage/localstorage.test.js

- Test Deleting token when logging out

### End To End testing, Cypress

Added the following end to end test files for Cypress

- login.cy.js
  - Tests login with valid credentials
- invalid-login.cy.js
  - Tests login error handling with invalid email
  - Tests login error handling with invalid password
- logout.cy.js
  - Tests logout

## Contributing

If you wish to contribute to this project, simply fork the repo and propose your changes in a pull request.
