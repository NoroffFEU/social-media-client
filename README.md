## Social Media Client 2

## Project Stack

- **JavaScript**: This project is built using plain JavaScript, without any specific frameworks or libraries.
- **CSS**: We utilize [Bootstrap](https://getbootstrap.com/) to style the application and ensure a responsive design.

## Code Quality and Formatting

### ESLint & Prettier

This project uses [ESLint](https://eslint.org/) for linting JavaScript code and [Prettier](https://prettier.io/) for code formatting. They are integrated together to ensure a consistent coding style.

1. **ESLint**: Ensures the code follows best practices and catches potential errors.
2. **Prettier**: Enforces a consistent code style across the project.

### Commit Hooks with Husky

[Husky](https://typicode.github.io/husky/) is set up to ensure every commit meets our linting and formatting standards. Before any commit, the code is automatically linted and formatted.

The configuration for this can be found in the `package.json` under the `husky` and `lint-staged` sections.

## End to end testing and unit testing
- Jest is used for unit testing (for running Jest from the terminal type: "npm run test-unit" and then press "a" to run all tests)
- Cypress is used for end to end testing (for running cypress type: "npm run test-e2e")
All the tests are passing at the given moment.
