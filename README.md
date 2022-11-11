## Social-media-client

Fork for the Workflow Ca (new)

# Status

[![Automated E2E Testing](https://github.com/AdrianFred/social-media-client/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/AdrianFred/social-media-client/actions/workflows/e2e-testing.yml)
[![Automated Unit Testing](https://github.com/AdrianFred/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/AdrianFred/social-media-client/actions/workflows/unit-test.yml)

# Description

Its a social media website that with help of api calls allows the user to create, delete, like, comment on posts, and also follow people (CRUD) . Its also tested with jest and cypress to make sure everything works

# Installation

1. Clone the repository
2. Run `npm install` to install all dependencies
3. Run `npm run build` to build the /scss files
4. Run `npm run dev` to start the vite developer server

# Tech used

- Prettier
- Eslint
- Vite
- Lint-staged
- Husky
- Jest and Cypress for testing
- Sass

# Testing files/how to use with Jest

The test files would be:

- create.test.js
- localstorage.test.js
- login.test.js

To run the tests, run `npm run test-unit` in the terminal

# Testing files/how to use with Cypress

The test files would be:

- auth.cy.js
- createPost.cy.js

To run the tests, run `npm run test-e2e` or `npm run test-e2e-cli` in the terminal
