# CA - Workflow - Noroff

[![Automated Unit Testing](https://github.com/pnordboj/social-media-client/actions/workflows/main.yml/badge.svg)](https://github.com/pnordboj/social-media-client/actions/workflows/main.yml)

[![Automated E2E Testing](https://github.com/pnordboj/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/pnordboj/social-media-client/actions/workflows/e2e-test.yml)

[![pages-build-deployment](https://github.com/pnordboj/social-media-client/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/pnordboj/social-media-client/actions/workflows/pages/pages-build-deployment)

## Information about the Workflow CA

### Goal

To improve the quality of an existing environment by establishing useful workflows that make the development process more efficient.


### Tasks/Brief

In order to complete this task, you will need to select an existing JavaScript project that has:

    [*] API calls to CRUD an item
    [*] API call to authenticate a user
    [*] Does not belong to you

You may use another student’s project or a project provided by your teacher.

The following workflows/hooks are required:

    [*] Project is configured to run Prettier on commit
    [*] Project is configured to run ESLint on commit
    [*] Project is configured to run Jest on commit
    [*] Project is configured to deploy to pages on merge to default

The following file changes are required:

    [*] Project readme file is updated to include new configuration information and status badges
    [*] Project is configured for hosting (e.g. CDN links or a Bundler)

The following features must be automatically tested with unit tests:

    [*] The login function returns a valid token when provided with valid credentials
    [*] The logout function clears the token from browser storage
    [*] The create item function creates a new item on the API

The following features must be automatically tested with end-to-end tests:

    [*] The login form validates user inputs correctly based on API restrictions
    [*] The create item form validates user inputs correctly based on API restrictions
    [*] The logout button logs the user out when clicked


