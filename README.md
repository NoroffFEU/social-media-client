# Project social-media-client

## Workflow status badges

[![Code Review](https://github.com/MariuszRozycki/social-media-client/actions/workflows/gpt.yml/badge.svg?branch=workflow)](https://github.com/MariuszRozycki/social-media-client/actions/workflows/gpt.yml)<br>
[![Deploy static content to Pages](https://github.com/MariuszRozycki/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/MariuszRozycki/social-media-client/actions/workflows/pages.yml)<br>
[![Automated Unit Testing](https://github.com/MariuszRozycki/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/MariuszRozycki/social-media-client/actions/workflows/unit-test.yml)<br>
[![Automated E2E Testing](https://github.com/MariuszRozycki/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/MariuszRozycki/social-media-client/actions/workflows/e2e-test.yml)<br>

## Project description

Social-media-app where user can registry profile, login. <br>
After login user can read all posts fetched from API. <br>
User can create new post, update own posts.<br>

### What was to do in this project?

Web developers on this project have to work on requirements:

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

## Installing and start the project

- Clone the repository:
  `git clone https://github.com/MariuszRozycki/social-media-client.git`
- Go to the cloned project directory:
  `cd social-media-client`
- (Optional) List all branches, remote and local:
  `git branch -a`
- (Optional) Switch to a specific branch, if needed:
  `git checkout workflow`
- Install all packages from `package.json`:
  `npm i`
### Starting the Project:
1. Close all open live-servers.
2. In the terminal, type the command: npm start to initiate sass --watch & live-server.
3. Wait until the live-server is fully operational (check the browser tab).
4. Open a new terminal and enter the command: npm test.
5. The unit tests should start automatically.
6. The end-to-end (e2e) tests will begin afterwards, but sometimes these tests require more time to start.
7. To ensure live-server functions correctly, pageLoadTimeout in the file cypress.config.js is set to 100000.
8. Note that e2e tests generally take more time.
9. If the tests fail, please check live-server and re-enter the command: npm test

- Print screen from  terminal start sass --watch && live-server start:<br>
<img width="748" alt="image" src="https://github.com/MariuszRozycki/social-media-client/assets/55709542/f5864ea3-7a3a-46d1-8379-069eeedc1337"> <br>
- Print screen from live-server when started: <br>
<img width="748" alt="image" src="https://github.com/MariuszRozycki/social-media-client/assets/55709542/8f2b3852-a771-4a18-a17c-0eba66759b43"> <br>
- Print screen from terminal after typing command `npm test` and when unit tests are done: <br>
<img width="748" alt="image" src="https://github.com/MariuszRozycki/social-media-client/assets/55709542/c9cfe566-873c-47a5-976d-f1b68093bf5a"> <br>
- Print screen from terminal when e2e tests are done: <br>
<img width="748" alt="image" src="https://github.com/MariuszRozycki/social-media-client/assets/55709542/2f648913-b1b8-4fb4-aeb6-a2649e48cb06"> <br>


## Improving project

Below steps how project was improved.
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
