[![Automated E2E Testing](https://github.com/jonnebonde/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/jonnebonde/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/jonnebonde/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/jonnebonde/social-media-client/actions/workflows/unit-test.yml)

```
# Workflow CA 

Setting up a workflow with tests inside an existing project

## Getting Started

These instructions will help you set up and run this project on your locally
 for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/).

### Installation

To install this project, follow these steps:

1. Clone the repository to your local machine:
```bash
git clone <https://github.com/jonnebonde/social-media-client.git>
```

2. Install the necessary dependencies:
```bash
npm install
```

3. Build CSS files:
```bash
npm build
```

4. Start the development server:
```bash
npm run start
```
This will launch a live-server for development. A link will be provided in the terminal.

## Usage

Here are some common scripts you might find useful:

- **Build Sass to CSS**: `npm run build`
- **Format code with Prettier**: `npm run format`
- **Lint code with ESLint**: `npm run lint`
- **Automatically fix ESLint errors**: `npm run lint-fix`
- **Run unit tests with Jest**: `npm run test-unit`
- **Open Cypress for E2E testing**: `npm run test-e2e`
- **Run Cypress tests via CLI**: `npm run test-e2e-cli`
- **Prepare Husky for Git hooks**: `npm run prepare`
- **Run all tests**: `npm run test`

## Testing

This project uses Jest for unit testing and Cypress for end-to-end testing.

- To run unit tests: `npm run test-unit`
- To run end-to-end tests in interactive mode: `npm run test-e2e`
- To run end-to-end tests via CLI: `npm run test-e2e-cli`

## Built With

- [ESLint](https://eslint.org/) - For identifying and reporting on patterns found in ECMAScript/JavaScript code.
- [Cypress](https://www.cypress.io/) - For end-to-end testing.
- [Prettier](https://prettier.io/) - For code formatting.
- [Jest](https://jestjs.io/) - For unit testing.
- [Babel](https://babeljs.io/) - For using next generation JavaScript, today.
- [Sass](https://sass-lang.com/) - For styling.
- [Bootstrap](https://getbootstrap.com/) - For design and layout.




## License

This project is licensed under the MIT License