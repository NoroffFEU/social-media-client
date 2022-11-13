# Social Media Client - Workflow CA

## Status badge for testing

[![Automated E2E Testing](https://github.com/Noizenne/social-media-client-workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Noizenne/social-media-client-workflow/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/Noizenne/social-media-client-workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Noizenne/social-media-client-workflow/actions/workflows/unit-test.yml)
[![Deploy static content to Pages](https://github.com/Noizenne/social-media-client-workflow/actions/workflows/pages.yml/badge.svg)](https://github.com/Noizenne/social-media-client-workflow/actions/workflows/pages.yml)


## How to use

* Clone the repo
* In terminal:
1. npm i
2. npm run build
3. npm run dev to run **Vite** for hosting

# The assignment

## Use an existing Javascript project that has:

* API calls to CRUD an item
* API call to authenticate a user
* Does not belong to you
* You may use another student’s project or a project provided by your teacher.

## The following workflows/hooks are required:

* Project is configured to run Prettier on commit
* Project is configured to run ESLint on commit
* Project is configured to run Jest on commit
* Project is configured to deploy to pages on merge to default 

## The following file changes are required:

* Project readme file is updated to include new configuration information and status badges
* Project is configured for hosting (e.g. CDN links or a Bundler)

## The following features must be automatically tested with unit tests:

* The login function returns a valid token when provided with valid credentials
* The logout function clears the token from browser storage
* The create item function creates a new item on the API

## The following features must be automatically tested with end-to-end tests:

* The login form validates user inputs correctly based on API restrictions
* The create item form validates user inputs correctly based on API restrictions
* The logout button logs the user out when clicked

## To start unit-test:

* npm run test-unit

# To start e2e-test:

* npm run test-e2e 
or 
* npm run test-e2e-cli if you want to use the terminal

## Formatters used:

# Prettier
* npm i -D prettier
# Eslint
* npm i -D eslint


