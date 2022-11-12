# Social Media Client - Workflow CA

[![Deploy static content to Pages](https://github.com/ImBenni/workflow-assignment/actions/workflows/static.yml/badge.svg)](https://github.com/ImBenni/workflow-assignment/actions/workflows/static.yml)
[![Automated E2E Testing](https://github.com/ImBenni/workflow-assignment/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/ImBenni/workflow-assignment/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/ImBenni/workflow-assignment/actions/workflows/unit-test.yml/badge.svg)](https://github.com/ImBenni/workflow-assignment/actions/workflows/unit-test.yml)


## Description

This is my work for the Course assignment at Noroff.
The goal was to make a good quality enviroment by using workflows.

## Installing and Running
 
 Start by cloning this repo and run "npm i" to install the necessary packages.
 
    npm i
    
Then shortly after that, run the sass build.

    npm run build
    
## Setup and Configuration

Installing Prettier

    npm install --save-dev prettier

Installing ESlint

    npm install eslint --save-dev

Setting up ESLint, This will create a .eslintrc file that holds all the rules that eslint will follow.

    npx eslint --init

Recommended answers for this project

    How would you like to use ESLint? · problems
    What type of modules does your project use? · esm
    Which framework does your project use? · none
    Does your project use TypeScript? · No
    Where does your code run? · browser
    What format do you want your config file to be in? · JSON

Install pre-commit package

    npx mrm@2 lint-staged

Update script in package.json file

```json
  "scripts": {
    "format": "prettier -w src/js/**/**/*.js",
    "lint": "eslint src/js/**/**/*.js",
    "lint-fix": "eslint src/js/**/**/*.js --cache --fix"
  }
```

Update lint-staged to run scripts on commit

```json
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```
