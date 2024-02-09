[![Automated Unit Testing](https://github.com/idanguyen/social-media-client/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/unit-tests.yml) [![Code Review](https://github.com/idanguyen/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/gpt.yml) [![Deploy static content to Pages](https://github.com/idanguyen/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/pages.yml) [![Code Review](https://github.com/idanguyen/social-media-client/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/e2e-tests.yml)

# Workflow CA: social-media-client
This is a school project aimed at learning how to quality check and automize routines to spend more effective time on coding. The focus will be through automating testing and deployments.

## Getting Started
1. Clone the repo
2. Install dependencies
```
npm install
```

3. Build project
```
npm run build
```

## Quality Assurance

Testing and deployments are configured to assure quality in the code. Code is automatically checked at three different events:

1. Push
2. Merge Request
3. Workflow Dispatch

You can also run these tests locally on your machine using the following commands in the terminal:
```
npm run test
```

### Unit testing: Jest
There are two unit tests for this project:
1. Logging in
2. Logging out

You can run just the unit tests with Jest through the terminal using:
```
npm run test-unit
```

### End To End testing: Cypress
There are two end to end tests in this project.
1. Logging in
2. Logging out

You can run just the end to end tests with Cypress through the terminal using:

```
npm run test-e2e
```

## Contributing
Feel free to contribute. The workflow and master branches are protected, and only pull requests are allowed.

## Issues and Discussions
Please use these for any input and posting of issues.

## References
Create Local Storage
Source: https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests from vs_lala answer on Dec 25, 2019 at 10:01
on login and logout tests

https://stackoverflow.com/questions/51795306/how-can-we-test-the-alert-and-the-text-it-is-displaying-using-cypress-io-js-auto
answered Nov 18, 2021 at 8:35 by BalajiK
For adding check on alerts

Cypress and Jest documentation was accessed to complete other tests.
Used Noroff modules for reference as well.