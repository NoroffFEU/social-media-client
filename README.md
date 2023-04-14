# Workflow course assignment

Badges show status of default branch
[![Automated E2E Testing](https://github.com/lkmelberg/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/lkmelberg/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/lkmelberg/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/lkmelberg/social-media-client/actions/workflows/unit-test.yml)

[![Code Review](https://github.com/lkmelberg/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/lkmelberg/social-media-client/actions/workflows/gpt.yml)

[![Deploy static content to Pages](https://github.com/lkmelberg/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/lkmelberg/social-media-client/actions/workflows/pages.yml)

# How to get started with your local development:

1. clone the repo.
2. run "npm install"
3. run "npm start"

# Workflow/hooks:

Prettier and ESLint will run on commit - ref. assignment criteria: these configurations are kept in a seperate branch workflow-formatting, and a PR is active.

Project default and workflow branches are protected by the following rules:

1. Require a pull request before merging
2. Require conversation resolution before merging
3. Do not allow bypassing the above settings

Project is configured to build and deploy to pages on merge to default branch
