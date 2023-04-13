# SOCIAL-MEDIA-CLIENT

## Course Assignment

### Brief

In this CA you are tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy.

[![Automated Unit Testing](https://github.com/Edinanorge/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/Edinanorge/social-media-client/actions/workflows/unit-test.yml)

[![Automated Unit Testing](https://github.com/Edinanorge/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/Edinanorge/social-media-client/actions/workflows/unit-test.yml)

[![Code Review](https://github.com/Edinanorge/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/Edinanorge/social-media-client/actions/workflows/gpt.yml)

[![Deploy static content to Pages](https://github.com/Edinanorge/social-media-client/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/Edinanorge/social-media-client/actions/workflows/pages.yml)

#### Workflows/hooks

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Project default branch is protected, code is versioned and branching conventions have been followed
- Project is configured to build and deploy to pages on merge to default branch

#### Unit tests

- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

#### End-To-End tests

- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button

## Getting Started

### Installing

1. Clone the repo:

```bash
git https://github.com/Edinanorge/social-media-client.git
```

2. Install the dependencies:

```
npm install
```

### Running

1. To run the app, run the following commands:

```
npm run start
```

2. To run test locally

```
npm run test
```

- !!! Important note: create a cypress.env.json file and place secret variables whit your variables.
- \*\* example:
  {
  "email": "example@noroff.no"
  "password": "examlpepassword"
  }
