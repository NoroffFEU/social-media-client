[![Automated E2E Testing](https://github.com/olee2/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/olee2/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/olee2/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/olee2/social-media-client/actions/workflows/unit-test.yml)

[![Deploy static content to Pages](https://github.com/olee2/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/olee2/social-media-client/actions/workflows/pages.yml)

# Noroff - Workflow Course Assignment

My delivery is a contribution to a repo for a social media application provided by Noroff.
My assignment is related to workflow and testing, not developing the actual application.

## Setup

Run the following commands in the terminal to setup the project.

### Install

```
npm i
```

### Build

```
npm run build
```

### Run vite server

```
npm run dev
```

## Formatting

If you make changes to the project, the following commands will assist you in formatting the code correctly.

### Prettier

```
npm run format
```

### Eslint

```
npm run lint-fix
```

## Testing

There are both unit and e2e tests setup for specific parts of the code. The unit tests are setup to run on commit if there are any changes made to any files with corresponding tests. You will not be able to commit code with failing tests.

The default repo is protected from any code with failing tests being merged into it.

To run tests manually follow the instructions below.

### Jest Unit Test

```
npm run test-unit
```

### Cypress End-to-end Test

#### Testing with GUI

```
npm run test-e2e
```

After entering the command in the terminal a gui will open for you to maneuver the testing.

1. Choose E2E Testing
2. Choose Electron and
3. Press _Start E2E Testing in Electron_
4. Choose the desired test from the list and it will run

#### Testing in the terminal

```
npm run test-e2e-cli
```

Test results will be displayed in the console. A visual representation of the testing will be saved as video
and/or images in the cypress folder.
