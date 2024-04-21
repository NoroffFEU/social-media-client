# Social Media Client

## About

This is a course assignment for the Workflow module. The assignment involves setting up a comprehensive workflow for a social media client application, with a focus on implementing best practices for code quality, testing, and automation.

## Features

- **EsLint**: Static code analysis for writing consistent code and finding errors.
- **Prettier**: Code formatter that enforces a consistent style.
- **Husky with lint-staged**: Pre-commit hooks to ensure that commits meet quality standards.
- **GitHub Actions**: Continuous Integration/Continuous Deployment pipeline for automated testing and deployment.
- **Jest**: Unit testing framework to validate individual components.
- **Cypress**: End-to-end testing framework for testing the application in a browser environment.

## Installation and Dependencies

To set up the project locally on your machine, please follow the instructions below:

1. **Fork the Repository**:
   - Click the 'Fork' button on the top right of this page.

2. **Clone the Repository**:
   - After forking, run the following command in your terminal to clone the repo:

     ```sh
     git clone https://github.com/<your-github-username>/social-media-client.git
     ```

3. **Install Dependencies**:
   - Navigate to the cloned directory and run:

     ```sh
     npm install
     ```

4. **Build SASS Files**:
   - To compile SASS to CSS, run:

     ```sh
     npm run build
     ```

## Running Tests

- **Unit Tests with Jest**:
  - To run unit tests, execute:

    ```sh
    npm run test-unit
    ```

- **End-to-End Tests with Cypress**:
  - To open the Cypress test runner:

    ```sh
    npm run test-e2e
    ```

  - To run Cypress tests in headless mode:

    ```sh
    npm run test-e2e-cli
    ```

