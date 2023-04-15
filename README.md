# Workflow course assignment

Badges show status of workflow branch
[![Automated E2E Testing](https://github.com/lkmelberg/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/lkmelberg/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/lkmelberg/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/lkmelberg/social-media-client/actions/workflows/unit-test.yml)

[![Code Review](https://github.com/lkmelberg/social-media-client/actions/workflows/gpt.yml/badge.svg?branch=workflow)](https://github.com/lkmelberg/social-media-client/actions/workflows/gpt.yml)

# How to get started with your local development:

1. clone the repo.
2. run "npm install"
3. run "npm start"

# Workflow/hooks:

Prettier and ESLint will run on commit - ref. assignment criteria: these configurations are kept in a seperate branch workflow-formatting, and a PR is active.

Project default and workflow branches are protected by the following rules:

1. Require a pull request before merging
2. Require the following status checks to pass:
   1. Code Review
   2. E2E tests
   3. Unit test
   4. Deploy(This only applies to the default/master branch)
3. Require conversation resolution before merging
4. Do not allow bypassing the above settings

Project is configured to build and deploy to pages on merge to default branch (AKA master)

# Testing:

Project uses Jest for unit testing
Project uses Cypress for end-to-end testing

Tests run automatically based on github actions.

For test status see badges at the top of this file
