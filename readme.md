# Workflow Course Assignment
[![Deploy static content to Pages](https://github.com/piiito/workflow-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/piiito/workflow-ca/actions/workflows/pages.yml) [![Automated Unit Testing](https://github.com/piiito/workflow-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/piiito/workflow-ca/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/piiito/workflow-ca/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/piiito/workflow-ca/actions/workflows/e2e-testing.yml)

## **Dependencies**

- Babel
- Bootstrap
- Cypress
- Prettier
- ESlint
- Husky
- Jest
- Lint staged
- SASS
- Vite

## Installation

1. Clone the repository
2. Initialise git in the project folder and install dependencies with the command "npm i"
3. Enter "npm run start" in the command line


## Testing

The following command runs e2e testing and unit testing:
```
$ npm run test
```


### Unit Test
The following command is used to unit test:
```
npm run test-unit
```

### End-to-end Test
The following command is used to run e2e-test in the terminal:
```
npm run test-e2e-cli
```
The following command is used to run e2e-test in cypress ui:
```
npm run test-e2e
```


### Github actions
- Deploying to GitHub pages
- Running unit test
- Running end to end test
