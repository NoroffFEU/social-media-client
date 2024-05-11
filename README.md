[![Automated Unit Testing](https://github.com/chralmli/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=master)](https://github.com/chralmli/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/chralmli/social-media-client/actions/workflows/cypress-e2e.yml/badge.svg?branch=master)](https://github.com/chralmli/social-media-client/actions/workflows/cypress-e2e.yml)

# Workflow CA: Improving Application Quality (School Assignment)

This document describes the work done in a school assignment aimed at enhancing the quality of a software package. The focus is on establishing efficient development workflows that streamline the development process and improve code maintainability.

## Assignment Overview

The objective of this assignment was to leverage skills and knowledge acquired in the course to improve the quality of an existing application. This involved implementing various workflows related to:

- **Development Efficiency**: Automating build and deployment processes (if applicable) using GitHub Actions.
- **Code Quality**: Enforcing code style consistency with tools like ESLint and Prettier.
- **Testing**: Establishing a comprehensive testing strategy encompassing both unit testing with Jest and end-to-end testing with Cypress.

## Testing Strategy

The testing strategy aimed to cover a wide range of functionalities within the application, ensuring robustness and user experience. The focus was on creating meaningful tests that expose potential issues, not just achieving passing test results. Here's a breakdown of the targeted test cases (specifics may vary based on the chosen application):

- **Login Functionality**
  - Successful login with valid credentials and access to protected resources.
  - Failure to login with invalid credentials and appropriate error messages displayed.
- **Logout Functionality**
  - Successful logout and removal of user credentials from browser storage.
- **CRUD Operations**
  - Ability to create, read, update, and delete objects of the chosen type.
  - Validation of user input and appropriate error handling.
- **Profile Page**
  - Successful retrieval and display of user profile information.

## Project Setup

- The starting point was either a partner's application or a provided example repository.
- The project was forked to a personal GitHub account and a new branch named `workflow` was created.
- Essential tools like ESLint, Prettier, and commit hooks were configured to maintain code quality and enforce coding standards.
- GitHub Actions workflows were set up for automated build and deployment processes (if applicable to the project).

## Testing Frameworks

- **Jest** was utilized for unit testing, allowing for isolated testing of individual components and functions.
- **Cypress** served as the tool for end-to-end testing, enabling us to simulate user interactions and verify complete application workflows.

## Deliverables

This assignment culminated in an open Pull Request on GitHub. The Pull Request originated from the `workflow` branch and merged into the default branch of the forked repository. The Pull Request showcased the implemented workflows and comprehensive test suite.

**Note**: Although not part of the graded submission, an optional Pull Request could be opened into the upstream repository's default branch for potential contributions to the larger project.

## Conclusion

This assignment provided an opportunity to apply learned concepts to enhance the quality and maintainability of a software project. Implementing efficient workflows, code style enforcement, and robust testing practices contribute to a well-structured and reliable codebase.
