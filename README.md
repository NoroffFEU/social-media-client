# Project Name
Workflow 

[![Deploy static content to Pages](https://github.com/KineOnes/social-media-client-kine/actions/workflows/pages.yml/badge.svg)](https://github.com/KineOnes/social-media-client-kine/actions/workflows/pages.yml)

## Description
Brief from lms.noroff.no: 
Brief: Although Quality Assurance is a practice we should be concerned with throughout the development cycle, it is common to sprint towards an MVP version of an application before later improving the quality. In this exercise you are tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy.

I chose to work on this CA as a solo-developer with the The Noroff API Social Media client application provided.

The existing application package must feature:

- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to browser storage
- Front-end CRUD functionality for at least one object type
- A front-end profile page

Process: 
1. Find a partner to work with or select the example repository.
2. Fork the project repository to your GitHub account.
3. Create a new branch called workflow.
4. Configure the project with eslint, prettier and commit hooks.
5. Configure the project with GitHub Actions for build/deploy if required.
6. Record any bugs found during this process in the Issues tab.
7. Configure the project for Jest and Cypress.
8. Create tests to cover the required test cases.
9. Create a Pull Request from workflow into the default branch.
10. Request a review from your peers to help improve your submission.
11. Make any final changes based on this feedback.
12. Submit a link to the Open Pull Request on Moodle.


## Installationgit

### Instructions
1. **Clone the repository**:
   ```bash
   git clone <git@github.com:KineOnes/social-media-client-kine.git>

2. Install dependencies:
    npm install
3. Run the project:
    npm start

# Additional Scripts

1. Linting
    npm run lint
- Runs ESLint to check for code quality and enforce code standards.

2. Run Unit Tests with Jest:
    npm run test-unit
- Runs unit tests for the application using Jest.

3. Run End-to-End Tests with Cypress:
    npm run test-e2e (npx cypress open )
- Opens Cypress for end-to-end testing.

# Development Workflows
This project is configured with the following tools to ensure code quality and testing:

- ESLint and Prettier: For consistent code formatting and style.
- Commit Hooks: Automatically run linting before each commit.
- GitHub Actions: Automates build and deploy processes (if required).
- Jest: Used for unit testing individual functions and components.
- Cypress: Used for end-to-end testing to simulate user interactions.