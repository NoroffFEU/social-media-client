[![Automated Unit Testing](https://github.com/idanguyen/social-media-client/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/unit-tests.yml) [![Code Review](https://github.com/idanguyen/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/gpt.yml) [![Deploy static content to Pages](https://github.com/idanguyen/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/pages.yml) [![Code Review](https://github.com/idanguyen/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/idanguyen/social-media-client/actions/workflows/gpt.yml)


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
