[![Automated E2E Testing](https://github.com/anasommer/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/anasommer/social-media-client/actions/workflows/e2e-test.yml)

[![Deploy static content to Pages](https://github.com/anasommer/social-media-client/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/anasommer/social-media-client/actions/workflows/pages.yml)

[![Automated Unit Testing](https://github.com/anasommer/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/anasommer/social-media-client/actions/workflows/unit-test.yml)

# Workflow CA - NorOff Front-End Development

## Installation

Clone this repo and open it with your IDE.

1. Initialize git in the project folder

```
git init
```

2. Install dependencies

```
npm i
```

3. Build SASS

```
npm run build
```

## Tests

## Unit tests with Jest

The following functionality will be automatically tested with unit tests:

- The login function is working and it returns a valid token when provided with a valid email and password
- The logout function clears the token from the local storage
- The create post function created a new blog post and sends it to the API

## End-to-end tests with Cypress

The following functionality will be automatically tested with end-to-end tests:

- The login form validates the user email and password based on the API criteria
- The create post form validates users' input based on the API criteria
- The logout button logs out the user when it is clicked
