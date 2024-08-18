


# Workflow, year 2- 



Workflow was a project that spanned our summer months.
It was our first introduction to Unit testing and E2E testing- 
We were provided a repo to pull on which we were to perform said tests via ESlint, Jest and Cypress.




Our Brief:

    
    Although Quality Assurance is a practice we should be concerned with throughout the development cycle, it is common to sprint towards an MVP version of an application before later improving the quality. In this exercise you are tasked with improving the quality of an existing application by providing various development workflows as well as a testing strategy.

    There are two ways to complete this assignment:

    Teams of two developers, working on each other’s applications
    Solo developers, working on the provided application
    The existing application package must feature:

    A front-end login form connected to an API JWT endpoint
    A front-end logout button connected to browser storage
    Front-end CRUD functionality for at least one object type
    A front-end profile page
    The Noroff API Social Media client works well with this exercise.
    User can react to a post content item`





## Important notes- 

    
    Test Failure: In some cases, a well written test will still fail if the project does not meet the expectations. For example, the project may not show user error messages. In      this case the test case The user cannot submit the login form with invalid credentials and is shown a message. should fail. Writing tests that always pass is not the purpose       of this assignment.

    Issues: While working on another project you may encounter bugs or issues with this project. If a test is failing, create a new Issue to contact the project owner. If you         wish to offer a fix for this bug, please do so in a separate Pull Request, for example from the branch worfklow-fixes.

    Process
    Find a partner to work with or select the example repository.
    Fork the project repository to your GitHub account.
    Create a new branch called workflow.
    Configure the project with eslint, prettier and commit hooks.
    Configure the project with GitHub Actions for build/deploy if required.
    Record any bugs found during this process in the Issues tab.
    Configure the project for Jest and Cypress.
    Create tests to cover the required test cases.
    Create a Pull Request from workflow into the default branch.
    Request a review from your peers to help improve your submission.
    Make any final changes based on this feedback.
    Submit a link to the Open Pull Request on Moodle.







## Site purpose:


** Important **

Though the site purpose does as it should in regards to practicality- our main objective is to ensure that our testing ran smoothly.
Because of this we made no changes to the already available code- merely installed the neccessary dependencies and test script.






** Note **


<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" width="50" height="50"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" width="50" height="50"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" width="50" height="50"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VSCode-Dark.svg" width="50" height="50"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bootstrap.svg" width="50" height="50">







#### Getting Started

Installing

Clone the repo:

 
    git clone git@github.com: https://github.com/AutopsyTurvy/social-media-client.git


Running

To run the app, run the following commands:

    npm run start
    




### Development Dependencies


- **`@eslint/js`**: The official ESLint package to lint JavaScript code.
  - **Installation**: 
    ```bash
    npm install @eslint/js --save-dev
    ```

- **`concurrently`**: Used to run multiple scripts simultaneously during development.
  - **Installation**: 
    ```bash
    npm install concurrently --save-dev
    ```

- **`cypress`**: End-to-end testing framework to ensure the application behaves as expected.
  - **Installation**: 
    ```bash
    npm install cypress --save-dev
    ```

- **`eslint`**: Linter for identifying and fixing issues in JavaScript code, enforcing coding standards.
  - **Installation**: 
    ```bash
    npm install eslint --save-dev
    ```

- **`globals`**: A package that provides a global variable list for ESLint.
  - **Installation**: 
    ```bash
    npm install globals --save-dev
    ```

- **`husky`**: Runs Git hooks, like running linters before committing code, to enforce code quality.
  - **Installation**: 
    ```bash
    npm install husky --save-dev
    ```

- **`jest`**: Testing framework for unit tests, ensuring the correctness of JavaScript code.
  - **Installation**: 
    ```bash
    npm install jest --save-dev
    ```

- **`lint-staged`**: Runs linters on staged files before committing to maintain code quality.
  - **Installation**: 
    ```bash
    npm install lint-staged --save-dev
    ```

- **`live-server`**: Development server that reloads in real-time as you edit your code.
  - **Installation**: 
    ```bash
    npm install live-server --save-dev
    ```

- **`prettier`**: Code formatter to enforce consistent styling across the codebase.
  - **Installation**: 
    ```bash
    npm install prettier --save-dev
    ```

- **`sass`**: Preprocessor for writing more maintainable and scalable CSS.
  - **Installation**: 
    ```bash
    npm install sass --save-dev
    ```

### Notes

- To install **all dependencies** at once, simply run:
  ```bash
  npm install


### Notes

- To install **all dependencies** at once, simply run:
  ```bash
  npm install




(You may also choose to add to/ clone this code in another way than through the command line or terminal, and you may do this by opening it in your chosen code editor, via GitHub desktop, and subsequently, VScode. )


---


## Configuration Information

### Available Scripts

In the project directory, you can run the following commands:

- **`npm start`**: Starts the development server with live reloading. This runs `sass` in watch mode and serves the files using `live-server`.

- **`npm run build`**: Compiles the SCSS files to CSS and outputs them to the `dist/css` directory.

- **`npm run format`**: Formats all files in the project using Prettier to ensure consistent code style.

- **`npm run cypress:open`**: Opens the Cypress end-to-end test runner for interactive testing.

- **`npm run cypress:run`**: Runs the Cypress end-to-end tests in headless mode, typically used in CI pipelines.

- **`npm test`**: Runs the Jest unit tests.

- **`npm run test:jest`**: Runs Jest in watch mode, re-running tests on file changes.

- **`npm run prepare`**: Installs Husky Git hooks. This is automatically run by Git hooks.

### Linting and Formatting

- **ESLint**: To lint your JavaScript files and automatically fix problems, run:
  ```bash
  npm run lint


**note**
To format all files according to Prettier’s rules, run:
    npm run format




---
[![Build and Deploy](https://github.com/AutopsyTurvy/social-media-client/actions/workflows/deploy.yml/badge.svg)](https://github.com/AutopsyTurvy/social-media-client/actions/workflows/deploy.yml)
[![Deploy static content to Pages](https://github.com/AutopsyTurvy/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/AutopsyTurvy/social-media-client/actions/workflows/pages.yml)


[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Tested with Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://jestjs.io/)
[![ESLint](https://img.shields.io/badge/linted_with-eslint-4b32c3.svg)](https://eslint.org/)
[![Cypress](https://img.shields.io/badge/tested_with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Bootstrap](https://img.shields.io/badge/bootstrap-5.1.3-blue.svg)](https://getbootstrap.com/)






---


Contributing


Contributions are welcome, but I would request that the invidicual that does so, clones the code and adds notes so that I can review any changes before they are comitted to the project permanently. Thank you! 

---

Contact:


Email me: 
autopsyturvycoding@gmail.com

<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Gmail-Dark.svg" width="50" height="50"> <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Discord.svg" width="50" height="50">



Find me on Discord:
(Kitty Alice Case
kittyalicerayworth)

---
