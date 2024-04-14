# Workflow CA

This is a course assignement from my University Studies at Noroff learning more about automation deployement, unit testing, e2e testing, automating bug fixes.

This project is hosted live using [GitHub Pages](https://pages.github.com/).

## CA Req's

Improve the quality of a package by establishing efficient development workflows, as per the course requirements.

## Delivery

Changes are delivered via an open Pull Request from the 'workflow' branch into the repository's default branch.

## Requirements to configure the workflow

- The project is configured to run Prettier on each commit.
- ESLint is also set up to run on each commit.
- Code versioning and branching conventions are followed.

## Testing

### Unit Testing
- Let's user login and logout with valid credentials.

- The logout function clears the token from browser storage.

### End-to-End (E2E) Testing

- Login failed - denies user access, if the wrong credentials are used

- Valid login function - Lets user log in with valid credentials

-  Can log in and out - Lets user log in with valid credentials and then log out

## Github Pages Deployement 
 [![Deploy static content to Pages](https://github.com/oddvarzk/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/oddvarzk/social-media-client/actions/workflows/pages.yml)

 [![Automated Unit Testing](https://github.com/oddvarzk/social-media-client/actions/workflows/unit_testing.yml/badge.svg)](https://github.com/oddvarzk/social-media-client/actions/workflows/unit_testing.yml)

 [![Automated E2E Testing](https://github.com/oddvarzk/social-media-client/actions/workflows/e2e_testing.yml/badge.svg)](https://github.com/oddvarzk/social-media-client/actions/workflows/e2e_testing.yml)


## Local Setup

1. Ensure Node.js is installed on your machine.
2. Clone this repository: `git clone https://github.com/oddvarzk/social-media-client.git`
3. Open the cloned repository in VSCode.
4. Install dependencies: `npm install`
5. Run tests: `npm run test`

If all tests pass, your local setup is complete.](https://github.com/oddvarzk/social-media-client/pull/2)
