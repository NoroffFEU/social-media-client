# Workflow CA

Using the skills and knowledge from the course, improve the quality of an existing environment by establishing useful workflows that make the development process more efficient:

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

## Badges

[![Deploy static content to Pages](https://github.com/MaritaMalvinsdatter/social-media-client-workflow/actions/workflows/pages.yml/badge.svg)](https://github.com/MaritaMalvinsdatter/social-media-client-workflow/actions/workflows/pages.yml)
[![Automated Unit Testing](https://github.com/MaritaMalvinsdatter/social-media-client-workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/MaritaMalvinsdatter/social-media-client-workflow/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/MaritaMalvinsdatter/social-media-client-workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/MaritaMalvinsdatter/social-media-client-workflow/actions/workflows/e2e-test.yml)

## Installation:

First clone the repo: 

```bash
git clone git@github.com:MaritaMalvinsdatter/social-media-client-workflow.git
```

Then run the following commands in the terminal: 

```bash
npm I
npm run build
```

For SCSS/SASS:

```bash
npm run start
```

To run Prettier: 

```bash
npm run format
```

To run ESLint:

```bash
npm run lint
```

To run tests: 

```bash
npm run test
```

## Page:

[Social Media Page](https://maritamalvinsdatter.github.io/social-media-client-workflow/)
