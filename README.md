# Workflow CA

Course assignment for Workflow at Noroff

[![Automated E2E Testing](https://github.com/donnybrilliant/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=master)](https://github.com/donnybrilliant/social-media-client/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/donnybrilliant/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/donnybrilliant/social-media-client/actions/workflows/unit-test.yml)
[![Deploy static content to Pages](https://github.com/donnybrilliant/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/donnybrilliant/social-media-client/actions/workflows/pages.yml)

## Description

Using the skills and knowledge from this course, improve the quality of an existing environment by establishing useful workflows that make the development process more efficient.


## Deployment

https://donnybrilliant.github.io/social-media-client/ 

## Built With

- Bootstrap
- SASS
- Vanilla Javascript

## Testing with
- Cypress for E2E testing
- Jest for Unit testing

## Brief

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Project branches are protected, code is versioned and branching conventions have been followed
- Project is configured to build and deploy to pages on merge to default branch

- Project readme file is updated to include new configuration information and workflow status badgesProject readme file is updated to include new configuration information and workflow status badges
- Project links are configured for hosting (no 404s)
- All known bugs have been communicated in the Issues tab

UNIT TESTS: 
- The login function stores a token when provided with valid credentials
- The logout function clears the token from browser storage
- The create item function returns a valid item with a valid input

E2E TESTS: 
- The user can log out with the logout button
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log in with the login form with valid credentials

## Getting Started

For installation
```
npm i
```

For building SASS
```
npm run build
```

For building SASS and starting live server
```
npm run start
```

For running Prettier
```
npm run format
```

For running eslint
```
npm run lint
```

For unit tests
```
npm run test-unit
```

For E2E tests with Cypress
```
npm run test-e2e
```

For E2E tests in CLI
```
npm run test-e2e-cli
```

For all tests
```
npm run test
```

## Contributing

Please help me make it better.

## Contact

[email](mailto:daniel.vier@gmail.com)

## Acknowledgments
