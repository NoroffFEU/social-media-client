# Social-media-client
This is my Course Assignment in the Workflow course

## Description

It's a social media website were the plan is to add several different technology in the project when merge, commits and testing of the pages.
- Lint-stage is setup:
  - Prettier is running automatic on commit's.
  - Eslint is running automatic on commit's.
- Unit test & End-2-End test is running automatic on pull requests.

# Installation

- Clone the repository
- Run `npm install`
- Run `npm run build`
- Run `npm install -D live-server`

# Tech stack used in the project

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-1A2B34?style=flat&logo=prettier&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-101828?style=flat&logo=eslint&logoColor=white) ![Cypress](https://img.shields.io/badge/Cypress-101828?style=flat&logo=cypress&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-FFFFFF?style=flat&logo=jest&logoColor=red)

# Unit testing & End-2-end testing

[![Automated Unit Testing](https://github.com/LAakerberg/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/LAakerberg/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/LAakerberg/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/LAakerberg/social-media-client/actions/workflows/e2e-test.yml)

# Test file's

## Unit test
- login.test.js
- logout.test.js
- create.test.js
## End-2-End test
- createPost.cy.js
- login.cy.js
- logout.cy.js

# Project / CA requirement's

## The following workflows/hooks are required:
	1. [x] Project is configured to run Prettier on commit
	2. [x] Project is configured to run ESLint on commit
	3. [x] Project is configured to run Jest on commit
	4. [X] Project is configured to deploy to pages on merge to default
## The following file changes are required:
	1. [X] Project readme file is updated to include new configuration information and status badges
	2. [X] Project is configured for hosting (e.g. CDN links or a Bundler)
## The following features must be automatically tested with unit tests:
	1. [x] The login function returns a valid token when provided with valid credentials
	2. [x] The logout function clears the token from browser storage
	3. [x] The create item function creates a new item on the API
## The following features must be automatically tested with end-to-end tests:
	1. [x] The login form validates user inputs correctly based on API restrictions
	2. [x] The create item form validates user inputs correctly based on API restrictions
  	3. [x] The logout button logs the user out when clicked
