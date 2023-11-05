# Project social-media-client

## Project description

The task is about making a web app better by adding special steps that help people <br>
work together smoothly and make the app's code neat and error-free.<br>

### Project requires:

- is configured to run Prettier on commit
- Project is configured to run ESLint on commit
- Project default branch is protected, <br>
  code is versioned and branching conventions have been followed.
- Project is configured to build and deploy to pages on merge to default branch
- Project readme file is updated to include new configuration information and workflow status badges
- Deployed project has been checked for 404 errors
- Any bugs found have been communicated in the Issues tab
- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

### The following features are automatically tested with End-to-End tests:

- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button

## Installing project

- `git clone https://github.com/MariuszRozycki/social-media-client.git`
- create branch `git checkout -b workflow`
- installing dependencies with command `npm install npm-run-all --save-dev`

## Improving project

Below steps how project was improved by package.json
If you need more details to package.json use `git log -p -- package.json`

- setting up package.json
- installing Prettier
- code version update

- add prettier pattern
- installing eslint
- create .eslint.json
- code version update

- install mrm@2 lint-staged & husky
- install jest
- install eslint-plugin-jest
- install babel to work with jest
- install fetch-mock
- install node-fetch@2
- install npm i -D cypress eslint-plugin-cypress
- code version update

- Install npm install --save-dev eslint-config-prettier
- code version update
