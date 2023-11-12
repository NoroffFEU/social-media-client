# Workflow CA



## **About** <a id="about"></a>

This project is part of the Workflow course assignment from Noroff. With aims to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient. The test code is forked from a Noroff example of a social media platform using Noroff's API. I have created Jest and Cypress tests for the required test cases. The repo environment has been configured to have pre-commit checks using Prettier, ESLint and Jest, to ensure code quality is maintained. I have also established branch protections on the main branch. With GitHub action workflows to automatically deploy the main branch to GitHub Pages on merge, and checks that my unit and end to end tests are passing before being allowed to merge into the main branch.

[![Automated E2E Testing](https://github.com/Bavy89/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Bavy89/social-media-client/actions/workflows/e2e-test.yml)


[![Automated Unit Testing](https://github.com/Bavy89/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/Bavy89/social-media-client/actions/workflows/unit-test.yml)


# Social Media App

## Overview

The Social Media App allows users to register profiles, log in, read posts fetched from an API, create new posts, and update their own posts.

## Project Requirements

Web developers working on this project have followed the following requirements:

- Project is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- The default branch is protected
- Code is versioned, and branching conventions are followed
- Project is configured to build and deploy to pages on merge to the default branch
- Project README file is updated to include new configuration information and workflow status badges
- Deployed project has been checked for 404 errors
- Any bugs found have been communicated in the Issues tab
- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage
- The following features are automatically tested with End-to-End tests:
  - The user can log in and access their profile
  - The user cannot submit the login form with invalid credentials and is shown a message
  - The user can log out with the logout button

## Getting Started

To install the project, follow these steps:

1. Clone the repository:

   ```bash
   ```

## Go to the cloned project directory:

cd social-media-client

## List all branches, remote, and local:

git branch -a

## Install all packages from package.json:

npm install

## Start the project:

npm start

## Licencse

This project is licensed under the MIT License. See the LICENSE file for details.
