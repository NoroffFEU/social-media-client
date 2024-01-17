# CSS Frameworks CA

This project utlizies a pre-developed application by Noroff, as part of the course "workflow". The web application features a front-end utilizing CSS frameworks. Key features include a login form connected to an API JWT endpoint, a logout mechanism, CRUD functionality, and a user profile page.

## Technologies Used

- HTML/CSS
- JavaScript
- SASS
- Jest for unit testing
- Cypress for end-to-end testing
- GitHub Actions for CI/CD

## Configuration

- **ESLint**: Linting utility for JavaScript.
- **Prettier**: Code formatter to ensure code style consistency.
- **Husky**: Used for setting up Git hooks to enforce linting and testing before commits.
- **Jest**: For unit testing JavaScript code.
- **Cypress**: For conducting end-to-end testing.

## Build Status

[![Node.js CI](https://github.com/ArneBHuset/social-media-client/actions/workflows/master.yml/badge.svg)](https://github.com/ArneBHuset/social-media-client/actions/workflows/master.yml)

## Installation and Setup

Clone the repository and install dependencies:

git clone https://github.com/ArneBHuset/social-media-client.git
cd css-frameworks-ca
npm install

npm start

## Running Tests

To run unit tests with Jest:

```bash
npm run test-unit
```

To run end-to-end tests with Cypress:

```bash
npm run test-e2e
npm run test-e2e-cli
```

To run eslint and to fix potential errors

```bash
npx eslint
npx eslint . --fix
```

Test commit hooks by

```bash
git add .
git commit -m "You commit message"
```

Github action workflow will run a final test, initalize in the master.yml file.
