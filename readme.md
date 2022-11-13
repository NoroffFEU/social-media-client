# Workflow Course Assignment Thong

[![Automated E2E Testing](https://github.com/norbadboy/workflow-thong/actions/workflows/e2e-test.yml/badge.svg?branch=master)](https://github.com/norbadboy/workflow-thong/actions/workflows/e2e-test.yml) [![Automated Unit Testing](https://github.com/norbadboy/workflow-thong/actions/workflows/unit-test.yml/badge.svg?branch=master)](https://github.com/norbadboy/workflow-thong/actions/workflows/unit-test.yml) [![Deploy](https://github.com/norbadboy/workflow-thong/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/norbadboy/workflow-thong/actions/workflows/deploy.yml)

## **Description**

This is my work for the Course assignment at Noroff.
The goal is to make a good quality environment by using workflows to a JavaScript project-repo that I don't own. This project has the following:

- API calls to CRUD an item
- API call to authenticate a user
- Does not belong to you

The workflow/hooks should run prettier, ESlint and jest on commit.
It should also deploy to pages on merge to default and configure the project for hosting using a bundler.
Automated unit-tests and e2e-tests on pull request.

## **Installing and Running**

Start by cloning this repo and run "npm i" to install the necessary packages.

    npm i

Build CSS files from SASS

    npm run build

To view the site using vite

    npm run dev

### **Unit Testing, Jest**

Added the following test files;

- login.test.js
  - Tests log in with valid credentials
  - Tests can not log in with invalid credentials
- logout.test.js
  - Test log out function
- create.test.js
  - Test post can create with valid credentials
  - Test post can not create with invalid credentials

Install Jest. Then run these tests using command:

```
npm run test-unit
```

### **End-To-End Testing, Cypress**

Added the following test files;

- login.cy.js
  - Tests user can log in
  - Tests user can not log in
- logout.cy.js
  - Tests logout
- createPost.cy.js
  - Tests user can create a post

Install Cypress. Then run e2e tests using command:

```
npm run test-e2e
```

## **Dependencies**

### List of used dependencies

1. Prettier
2. ESlint
3. Jest
4. Babel
5. Cypress
6. Bootstrap
7. SASS
8. Vite
9. husky

### Github actions

1. Deploying to github pages
2. Running unit testing
3. Running end-to-end testing
