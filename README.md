# Workflow course assignment

This is a school project. Errors may occur, and it is not perfect.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Linting](#linting)
- [Testing](#testing)
- [Contributing](#contributing)


## Installation

1. Clone the repository:

 ```git clone https://github.com/Psijii/social-media-client.git ```

 ```gh repo clone Psijii/social-media-client```

2. Install dependencies:
```npm install```

## Usage

### Linting
ESLint:
To run ESLint manually:
```npm run lint```

To use ESLint with lint-staged (automatically runs on pre-commit):

```npm run lint-staged```

### Prettier:

To run Prettier manually:

```npm run format```

To use Prettier with lint-staged (automatically runs on pre-commit):
```npm run lint-staged```

## Testing

### Unit test

```npm test```
runs the jest-test-files.

### E2E-testing

```npm run cypress:open``` opens the interactive version of Cypress.

```npm run cypress:run``` opens Cypress in command line.

# Contributing

Fork the repository.

* Create a new branch: ```git checkout -b feature/your-feature```.
* Make your changes and commit them: ```git commit -m "Add new feature"```.
* Push to the branch: ```git push origin feature/your-feature```.
* Submit a pull request.

