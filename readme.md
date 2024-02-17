# Workflow Social Media Apllication


![image](https://github.com/bjornhaavard/social-media-client/assets/94046432/a03dde25-70f8-425b-a8a3-3c4940d0a980)

## This project uses:

### Prettier:

A code formatter that helps maintain consistent code style across your project.

### Husky:

Git hooks made easy, ensuring code quality and preventing bad commits.

### Sass:

A popular CSS preprocessor that adds features like variables, nesting, and mixins to enhance stylesheet development.

### ESLint:

A linter tool for identifying and fixing problems in JavaScript code, ensuring code quality and adherence to coding standards.

### Jest:

A JavaScript testing framework that focuses on simplicity and efficiency, ideal for unit and integration testing.

### Cypress:

An end-to-end testing framework for web applications, facilitating easy and reliable testing of user interactions.

---

## Description

This is a Noroff social media application that we as students was tasked to implement testing with to improve the app.

---

### Clone the repo:

```
Git clone https://github.com/bjornhaavard/social-media-client/tree/workflow
```
### Install all dependencies:

```
npm i
```

### Start SASS:

```
npm run build
```

### Formatting:

```
npm run format
npm run lint
```

### Jest:

```
npm run test-unit
```

### Cypress End2end testing:

This opens up cypress to be configured for the first time
```
npm run test-e2e
```


### Cypress and Jest combined test:

```
npm run test
```

## License

ISC License.


[![Automated E2E Testing](https://github.com/bjornhaavard/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/bjornhaavard/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/bjornhaavard/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/bjornhaavard/social-media-client/actions/workflows/unit-test.yml)