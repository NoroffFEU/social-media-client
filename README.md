# social-media-client
This is my Course Assignment in Workflow

## Unit testing

[![Automated Unit Testing](https://github.com/LAakerberg/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/LAakerberg/social-media-client/actions/workflows/unit-test.yml)

## End-2-end testing

[![Automated E2E Testing](https://github.com/LAakerberg/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/LAakerberg/social-media-client/actions/workflows/e2e-test.yml)

## The following workflows/hooks are required:
	1. [x] Project is configured to run Prettier on commit
	2. [x] Project is configured to run ESLint on commit
	3. [x] Project is configured to run Jest on commit
	4. [ ] Project is configured to deploy to pages on merge to default
## The following file changes are required:
	1. [ ] Project readme file is updated to include new configuration information and status badges
	2. [ ] Project is configured for hosting (e.g. CDN links or a Bundler)
## The following features must be automatically tested with unit tests:
	1. [x] The login function returns a valid token when provided with valid credentials
	2. [x] The logout function clears the token from browser storage
	3. [x] The create item function creates a new item on the API
## The following features must be automatically tested with end-to-end tests:
	1. [x] The login form validates user inputs correctly based on API restrictions
	2. [x] The create item form validates user inputs correctly based on API restrictions
  	3. [x] The logout button logs the user out when clicked
