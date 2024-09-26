# Workflow CA

## Description

Workflow course assignment. Social media client forked from Noroff. Project is configured to run Prettier and ESlint on commit and wit automated unit- and e2e-tests.

## Prettier and ESlint

`npm run prettier-check`
`npm run eslint-check`

## Unit testing - Jest

- Login Test src/js/api/auth/login-test.js
- Logout Test src/js/api/auth/logout-test.js
- Run test --> `npm run test-unit`

## E2E testing - Cypress

- Login Test cypress\e2e\login.cy.js
- Logout Test cypress\e2e\logout.cy.js
- Run test --> `npm run test-e2e`

## Workflow-badges

[![Deploy static content to Pages](https://github.com/Beatevangsnes/social-media-client/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/Beatevangsnes/social-media-client/actions/workflows/pages.yml)

[![Unit-testing](https://github.com/Beatevangsnes/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Beatevangsnes/social-media-client/actions/workflows/unit-test.yml)

[![E2e-testing](https://github.com/Beatevangsnes/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Beatevangsnes/social-media-client/actions/workflows/e2e-test.yml)

## Contact

Beate Vangsnes

beatevangsnes@icloud.com
