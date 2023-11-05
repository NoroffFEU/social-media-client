# Project social-media-client

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

## Installing the project

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
- Start the project:
  `npm start`

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
