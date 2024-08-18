# CSS Frameworks CA

## Overview

This project is a fork of the Noroff Social Media Application, enhanced with additional tools and workflows to ensure code quality, testing, and streamlined deployment. The enhancements include ESLint, Prettier, Husky, lint-staged, Jest, and Cypress, along with automated testing and deployment via GitHub Actions.

## Project Features

-   Code Quality: Enforced with ESLint and Prettier.
-   Commit Hooks: Husky and lint-staged ensure pre-commit checks.
-   Automated Testing: Configured with Jest for unit testing and Cypress for end-to-end testing.
-   Continuous Integration: Automated testing and deployment through GitHub Actions.
-   Deployment: Automatic deployment to GitHub - Pages on pushing to the master branch.

### Built With

HTML
CSS / SCSS
JavaScript

## Prerequisites

Ensure you have the following installed:

-   Node.js (version 16 or later)
-   npm (Node Package Manager)

### Setup

-   Clone the repository:
    bash
    git clone https://github.com/BergitTveit/workflow

### Install Dependencies

bash
npm install
Build the project:
bash
npm run build

Running the Development Server:
bash
npm run dev

## Testing

This project uses Jest for unit testing and Cypress for end-to-end testing. Tests are run automatically through GitHub Actions on push, but you can also run them locally:

-   Unit Tests (Jest):
    bash
    npm run test:unit
-   End-to-End Tests (Cypress):
    bash
    npm run test:e2e
    To run all tests:
    bash
-   npm run test

## Deployment

Deployment to GitHub Pages is automated. Simply push your changes to the master branch, and the GitHub Actions workflow will handle the rest.

## Status

Automated Unit Testing: Enabled
Automated E2E Testing: Enabled
Deployme
