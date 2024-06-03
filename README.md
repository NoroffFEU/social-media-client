# Workflow CA 

This CA was to help us learn how to use both unit testing and End-to-End testing. 

## Description:
This is my CA for workflow. The CA allows you to run tests from both unit testing with Jest and End-to-end testing with Cypress. I used some other NPM tools just to make things work together a little bit better.

## NPM Tools:
* Babel
* Cypress
* Prettier
* Husky
* Jest
* Eslint
* vite

## Installation
If you want to try this project out yourself, clone this repository, open it in your code editor of choice and initilize git.

``` git init ``` 

Install dependencies

``` npm i ```

Build SASS

``` npm run build ```


## Unit tests:

The Unit tests are located in src/unit-tests folder.

## To Run Unit-tests:

``` npm run test-unit ```

There is a login function that stores a token in the local storage of your browser. 
There is also a function that deletes and removes the token from the local storage.

## E2E test

The E2E tests are located in cypress/e2e folder.

## to run E2E test:

``` npm run test-e2e-cli ```

The user can login with the correct credentials. 
The user can logout and the token is removed from localStorage.
Form validation checks.

## Contributing
No contributions for this.

## Contact

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christian-g-33443213b/)
