# CA - Workflow - Noroff

[![Automated Unit Testing](https://github.com/pnordboj/social-media-client/actions/workflows/main.yml/badge.svg)](https://github.com/pnordboj/social-media-client/actions/workflows/main.yml)

[![Automated E2E Testing](https://github.com/pnordboj/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/pnordboj/social-media-client/actions/workflows/e2e-test.yml)

[![pages-build-deployment](https://github.com/pnordboj/social-media-client/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/pnordboj/social-media-client/actions/workflows/pages/pages-build-deployment)

## How to Install and Run

### Install

In order to setup this project you will need to clone this project.

You can do this by running

```
git clone https://github.com/pnordboj/social-media-client/workflow.git
```
After the git repository is cloned, open the folder named "social-media-client"

```
cd social-media-client
```

When you are in the correct folder run:

```
npm i
```

this will install all the npm modules needed to run the project correctly.

After all of the packages are installed you can now run the project!

### Run

There are quite a few options to pick from, but you need to run the 

```
npm run build
```

It will then run the build command, which compiles and make it "Deploy Ready" 

So it's ready to be hosted on a webserver og github pages and/or netlify

If you want to view the project without having to deploy it, you can run

```
npm run vite
```

The command creates temporary files that will change on each save, making it possible to see changes in realtime

Without having to constantly rebuild the project to view your changes. 

## Configuration

### Test Configuration

The projects automatically run the tests on each commit, pull-request or merge.

If you want to run them manually you'll have to run the command `npm run test`

This command executes the commands test-e2e aswell as unit-testing

#### Unit Testing

Unit Testing is done with the Jest library, it is configured to test if the login, logout and create button are functional.

#### E2E Testing (End to End)

E2E is made possible with the library cypress.js

This tool actually tests the buttons and will also login for you during the tests. 

### Build/Bundler Configuration

The projects uses the bundler `Vite.js Framework`

The tasks vite runs are made possible with `rollup` and `esbuild`

And it can be runned with these different options

```
npm run vite
// start dev server, aliases: `vite dev`, `vite serve`
```

```
npm run vite-build
// builds project for production
```

## Information about the Workflow CA

### Goal

To improve the quality of an existing environment by establishing useful workflows that make the development process more efficient.


### Tasks/Brief

In order to complete this task, you will need to select an existing JavaScript project that has:

- [X] API calls to CRUD an item
- [X] API call to authenticate a user
- [X] Does not belong to you

You may use another student’s project or a project provided by your teacher.

The following workflows/hooks are required:

- [X] Project is configured to run Prettier on commit
- [X] Project is configured to run ESLint on commit
- [X] Project is configured to run Jest on commit
- [X] Project is configured to deploy to pages on merge to default

The following file changes are required:

- [X] Project readme file is updated to include new configuration information and status badges
- [X] Project is configured for hosting (e.g. CDN links or a Bundler)

The following features must be automatically tested with unit tests:

- [X] The login function returns a valid token when provided with valid credentials
- [X] The logout function clears the token from browser storage
- [X] The create item function creates a new item on the API

The following features must be automatically tested with end-to-end tests:

- [X] The login form validates user inputs correctly based on API restrictions
- [X] The create item form validates user inputs correctly based on API restrictions
- [X] The logout button logs the user out when clicked


