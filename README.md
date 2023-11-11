[![Unit Tests](https://github.com/Queenen/social-media-client/actions/workflows/unit-test.yml/badge.svg)]
[![E2E Tests](https://github.com/Queenen/social-media-client/actions/workflows/e2e-test.yml/badge.svg)]

# Social-Media-Client

<img src='https://i.postimg.cc/3rmT7fKW/thistestuser.png' border='0' alt='thistestuser'/>

## Description

This project performs a variety of tests to ensure the content turns out as expected.
I've used husky and jest in order to run pre-commit hooks with prettier and ESLint.
Automatic unit-testing with jest and babel to test specific functions.
Automatic e2e-testing which runs http-server and cypress in order to automate the actions of a user, and checking the login and logout functionality of the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install this project, clone the repo and install dependencies:

```bash
git clone https://github.com/yourusername/social-media-test.git
cd social-media-test
npm install
```

## Installation

This project uses SASS for styling. To build CSS from SASS:

```bash
npm run build
```

## Testing

//Unit Testing

Unit tests are written using Jest. To run unit tests:

```bash
npm run test-unit
```

//End-to-End Testing

End-to-End tests are conducted using Cypress:

```bash
npm run test-e2e
```

For CI purposes, use:

```bash
npm run test-e2e-ci
```

This will start a local server and run Cypress tests against it.

## Contributing

Contributions to this project are welcome. Please open a pull request or an issue to discuss proposed changes or report bugs.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
