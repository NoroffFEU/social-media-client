# social-media-client
[![Automated Unit Testing](https://github.com/Enirose/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Enirose/social-media-client/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/Enirose/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Enirose/social-media-client/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/Enirose/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Enirose/social-media-client/actions/workflows/pages.yml)
--
![image](https://user-images.githubusercontent.com/95321157/214720154-2786f61e-a55a-4f6a-9d1a-ea5412a89536.png)

## Built with
<div id="badges">
  <img src="https://img.shields.io/badge/Visual Studio Code-blue?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VScode Badge"/>
</div>
<div id="badges">
  <img src="https://img.shields.io/badge/Github-black?style=for-the-badge&logo=github&logoColor=white" alt="github Badge"/>
</div>
<div id="badges">
  <img src="https://img.shields.io/badge/HTML 5-red?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML 5 Badge"/>
</div>
<div id="badges">
  <img src="https://img.shields.io/badge/Bootstrap-purple?style=for-the-badge&logo=css3&logoColor=white" alt="css3 Badge"/>
</div>

----
## Getting started
### The following workflows/hooks are configured:

* Run prettier on commit
* Run ESLint on commit
* Run Jest
* deploy to pages on merge to default

### README.md has been updated

## Features tested with unit test
* Create.js
* login.js
* logout.js

## Features tested with e2e test
* Login.cy.js
* Logout.cy.js
* Unauthorized-loginData.cy.js

----
# Run the App

### Clone the app and from your local IDE, then run the following command
* npm i
* npm run start
*

## Install Prettier

* npm i --save-dev prettier
* 
(In package.json file)
* scripts:

      - "format": "prettier -w src/js/**/*.js"

### Run prettier
* npm run format

### Configure prettier in .prettierrc.json
{
  "singleQuote": true
}

## Install ESLint
* npm i eslint --save-dev

### Setting up ESLint
* npx eslint --init

##### This will ask you a series of questions. Here are the recommended answers:

* How would you like to use ESLint? · problems
* What type of modules does your project use? · esm
* Which framework does your project use? · none
* Does your project use TypeScript? · No
* Where does your code run? · browser
* What format do you want your config file to be in? · JSON

(In package.json file)
* scripts:

      - "lint": "eslint src/**/*.js"
    
      - "lint-fix": "eslint src/**/*.js --cache --fix"

### Run ESLint
* npm run lint
* npm run lint-fix


## Create / Install pre-commit hooks
* npx mrm@2 lint-staged
(in package.json file)

```js
  "lint-staged": {
    "*.js": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ]
  }
  ```
  
  #### Format on save in .vscode/settings.json:
  
  ```js
{ 
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript"
  ]
}
```

## Install Jest and Cypress
* npm i -D jest@jest29.2.0
* npm i -D eslint-plugin-jest
* npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
(in package.json file)
* scripts
 ```js
  "scripts": {
    "build": "sass src/scss:dist/css",
    "start": "sass --watch src/scss:dist/css & live-server",
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint scr/**/*.js --cache --fix",
    "prepare": "husky install",
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-unit": "jest",
    "test-e2e": "cypress open",
    "test-e2e-report": "cypress run --reporter mochawesome",
    "test-e2e-cli": "cypress run"
  },
  ```
  

#### in .eslintrc.json

```js
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js", "cypress.config.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off",
        "no-undef": "off"
      }
    },
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": {
        "jest/prefer-expect-assertions": "off",
        "no-undef": "off",
        "no-global-assign": "off"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

## Install Babel
* npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

#### Babel.config.json

```js
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

----
## For testing
### Run the following command
#### Jest/Unit testing
* npm run test-unit

#### Cypress/e2e testing
* npm run test-e2e-cli
* npm run test-e2e (Testing using cypress browser)
