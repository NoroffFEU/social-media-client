# Noroff Workflow Course Assignment

This repository contains the Course Assignment (CA) for the Noroff FEU Workflow course. The goal is to improve the quality of an existing social media client by setting up development tools, writing unit and end-to-end tests, and defining helpful workflows.

## Prerequisites

- **Node.js** (v14 or higher) and **npm** installed on your machine.
- (Optional) **concurrently** for cross-platform scripting:
  ```bash
  npm install --global concurrently
  ```

## Getting Started

1. **Clone your fork** and install dependencies:

   ```bash
   git clone https://github.com/robfil50219/social-media-client.git
   cd social-media-client
   npm install
   ```

2. **Environment variables** for Cypress end-to-end tests:
   Create a file named `cypress.env.json` in the project root with the following content:

   ```json
   {
     "VALID_EMAIL": "your@student.noroff.no",
     "VALID_PASSWORD": "YourPassword123"
   }
   ```

   > **Note:** Do *not* commit real credentials. This file is gitignored by default.

## Available Scripts

- **Start development server**

  ```bash
  npm start
  ```

  - Compiles SCSS to CSS and launches Live Server for local development.

- **Run ESLint**

  ```bash
  npm run lint
  ```

  - Checks code quality and reports linting errors.

- **Run unit tests (Jest)**

  ```bash
  npm run test:unit
  ```

  - Executes unit tests covering authentication logic.

- **Run end-to-end tests (Cypress)**

  ```bash
  npm run test:e2e
  ```

  - Opens the Cypress Test Runner to run E2E scenarios.

- **Run E2E tests in headless CI mode**

  ```bash
  npm run test:e2e:ci
  ```

  - Executes Cypress tests in the terminal (suitable for CI).

## Workflow Configuration

- **ESLint**: Configured with a flat `eslint.config.mjs` to handle browser, Node, Jest, and Cypress globals.
- **Prettier**: Code formatting rules defined in `.prettierrc` and integrated with `lint-staged`.
- **Husky**: Commit hooks set up to run `prettier --write` and `eslint --fix` on staged files.

## Testing Strategy

- **Unit Tests** (Jest):

  - Authentication API stores and clears tokens correctly.
  - Login/logout listeners update UI and redirect as expected.

- **End-to-End Tests** (Cypress):

  - Successful login with valid credentials.
  - Error alert on invalid login credentials.
  - Logout returns the user to the home view.

---

*This README provides an overview of the assignment requirements, setup steps, and how to run the development workflows and tests.*
