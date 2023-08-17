# Name of project
## Social Media Client 2

# Project Setup Documentation

This document provides a summary of the project's configuration for code quality, formatting, and continuous integration.

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

## Continuous Integration with GitHub Actions

### Build and Deploy Workflow

The project uses [GitHub Actions](https://github.com/features/actions) for continuous integration. On every push to the `main` branch, the project is built, and if specified, deployed.

The workflow for this process is defined in `.github/workflows/build-deploy.yml`.

#### Workflow Steps:
