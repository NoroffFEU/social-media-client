<h1>Workflow</h1>
<p>Workflow project @ Noroff School of technology and digital media</p>

## Description

This project aimed at improving the quality of an existing application by establishing helpful development workflows and implementing a robust testing strategy. It encompasses various features, including a front-end login form connected to a JWT API endpoint, a logout button connected to browser storage, front-end CRUD functionality for managing objects, and a user profile page.

## Features

- GitHub Actions: Used for continuous integration and continuous deployment (CI/CD) workflows.
- Prettier: An opinionated code formatter to ensure consistent code style.
- ESLint: A popular linting utility for JavaScript to catch and fix code errors and enforce coding standards.
- Cypress: An end-to-end testing framework for testing the functionality of your web application.
- Jest: A JavaScript testing framework for writing unit tests.
- Husky: A tool for running scripts before Git commits or pushes, enabling code quality checks before committing.
- Command Line Interface (CLI): Used for running various development and testing commands.

## Status
[![Deploy static content to Pages](https://github.com/Ulvounth/workflow/actions/workflows/pages.yml/badge.svg?branch=workflow)](https://github.com/Ulvounth/workflow/actions/workflows/pages.yml)

## Running instructions

### Installing

1. Clone the repo:

```bash
git clone https://github.com/Ulvounth/workflow.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm start
```

### Running tests

Runs both Jest and Cypress tests

```bash
npm run test
```

Runs only Jest tests

```bash
npm run test-unit
```

Runs only Cypress tests

```bash
npm run test-e2e-cli
```

## Contact

[My Linkedin](https://www.linkedin.com/in/andreas-ulvund-98066376/)
[My Portfolio](https://andreasulvund-portfolio.netlify.app/)
