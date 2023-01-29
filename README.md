# Workflow-CA

## Status Badges

[![Deploy static content to Pages](https://github.com/lhvk/Workflow-CA/actions/workflows/pages.yml/badge.svg)](https://github.com/lhvk/Workflow-CA/actions/workflows/pages.yml)

[![Automated Unit Testing](https://github.com/lhvk/Workflow-CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/lhvk/Workflow-CA/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/lhvk/Workflow-CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/lhvk/Workflow-CA/actions/workflows/e2e-test.yml)

## Installation

```
npm i
npm run build
npm run start
```

## Testing with Cypress locally

* Crate a cypress.env.json file (Remember to add it to your gitignore file)
* Copy the code from the cypress.env.example.json provided
* Fill in valid email and password
* Please don't edit the example file

```
{
  "user": {
    "email": "",
    "password": ""
  }
}
```
