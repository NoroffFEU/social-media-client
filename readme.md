Noroff Workflow CA

- _ESLint_: Detect and fix problems with the JavaScript code.
- _Prettier_: Code formatter that enforces a consistent style.
- _Commit hooks_: Using two tools, lint-staged and husky, that will automatically run ESLint and Prettier on all files in the repository.
- _Jest_: Unit testing to confirm that a single functionality is working.
- _Cypress_: E2E testing framework that runs in the browser.

### Installation

# Clone or fork the repo

git clone https://github.com/absim29/social-media-client

# Initialize repo

git init

# Install dependencies

nmp i

# Build SASS

npm run build

# Run Jest and Cypress tests

npm run test

### Status Badges

[![Automated E2E Testing](https://github.com/absim29/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/absim29/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/absim29/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/absim29/social-media-client/actions/workflows/unit-test.yml)
