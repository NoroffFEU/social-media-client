# CA | Workflow | Noroff

[![Automated Unit Testing](https://github.com/ShaindalDev/workflowCA_Robin_Johnsen/actions/workflows/unit-test.yml/badge.svg)](https://github.com/ShaindalDev/workflowCA_Robin_Johnsen/actions/workflows/unit-test.yml)
[![Automated E2E Testing](https://github.com/ShaindalDev/workflowCA_Robin_Johnsen/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/ShaindalDev/workflowCA_Robin_Johnsen/actions/workflows/e2e-test.yml)
[![Deploy static content to Pages](https://github.com/ShaindalDev/workflowCA_Robin_Johnsen/actions/workflows/pages.yml/badge.svg)](https://github.com/ShaindalDev/workflowCA_Robin_Johnsen/actions/workflows/pages.yml)

## Information about the project

This project is my delivery for the Course Assignment in Workflow from Noroff.
It's meant **to improve the quality of an existing environment by establishing useful workflows that make the development process more efficient**

The assignment is going over how to work inside the terminal, how to plan and setup your own work environment. The project is using github actions to run testing of some part of the code, and deploy the changes made to the code on to [github pages](https://pages.github.com/).

The code in the project repository is **forked** from a teachers repository and is meant to be illustrating how the student's could have created the course assignment from javascript 2.

The project itself is a social media platform that is using Noroff's API. You can create posts, read other's posts and interact with other user's.

---

## Project installing and running

This project have a lot fo dependencies that need to set up. If any if them is failing refer to the [Dependencies](#Dependencies) section of this readme.

After downloading the zip file run `npm init`, this should start up with installing the dependencies for this project.

If the style is not showing up, make sure to run `npm run build`. This will run the build script to create css from scss files.
When working with the project and doing style changes, its recommended to run `npm run start`. This will run a script that is watching the changes that is done and applying changes on save of the file.

Dependencies used is as follows.
---

1. [Prettier](https://prettier.io/) - An opinionated code formatter
2. [ESlint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems.
3. [Mrm](https://www.npmjs.com/package/mrm-task-lint-staged) - This tasks will try to infer extensions from your npm scripts
4. [Jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
5. [Babel](https://babeljs.io/) - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
6. [Cypress](https://www.cypress.io/) - Cypress is the new standard in front-end testing that every developer and QA engineer needs.
7. [Bootstrap](https://npm.io/package/bootstrap) - Powerful, extensible, and feature-packed frontend toolkit.
8. [SASS](https://sass-lang.com/) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
9. [Vite](https://vitejs.dev/) - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

Github actions that is set up
---

1. Deploying to github pages
2. Running end to end testing
3. Running unit testing

### Dependencies

The following list is describing how to install and configure the different dependencies used in this project. If there is any dependencies that is breaking, please referee to this section and install them again.

#### Vite

```md
npm install -D vite
```

Add this to package.json

```json
    "dev": "vite",
    "vite-build": "vite build",
    "vite-preview": "vite preview"
```

Vite configuration.

```js
export default {
  server: {
    port: 5501,
    hot: true,
    host: '127.0.0.1',
  },
};
```

After setting this up you can run

```md
npm run dev
```

Open your browser and go to `http://127.0.0.1:5501`to see your server running

#### Bootstrap

Installing Bootstrap

```md
npm i bootstrap
```

#### SASS/SCSS

Installing SCSS

```md
npm i scss
```

#### Prettier

Install prettier as dev dependency

```md
npm install --save-dev prettier
```

> [Link to page](https://npm.io/package/prettier)

#### ESlint

Install eslint as dev

```md
npm install eslint --save-dev
```

ESlint setup

```md
npx eslint --init
```

In the command line you will choose these options:

```md
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Updated package.json scripts

```json
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
```

> [Link to page](https://npm.io/package/eslint)

#### Mrm

Install Mrm, for pre-commit hooks to run eslint and prettier

```md
npx mrm@2 lint-staged
```

Updated package.json tasks

```json
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

> [Link to page](https://npm.io/package/mrm)

#### Jest

Install Jest for unit testing

```md
npm i -D jest@29.2.0
```

Updated package.json scripts

```json
"test-unit": "jest"
```

> [Link to page](https://npm.io/package/jest)

#### ESlint Jest plugin

Install eslint jest plugin

```md
npm i -D eslint-plugin-jest
```

Update eslint configuration

```json
{
  "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
      {
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
```

> [Link to page](https://npm.io/package/eslint-plugin-jest)

#### Babel

Install Babel

```md
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Add babel.config.json and add configuration

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

> [Link to page](https://npm.io/package/babel-npm-install)

#### Cypress

Install Cypress for end-to-end testing

```md
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```

Updated package.json scripts

```json
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-unit": "jest",
    "test-e2e": "cypress open",
    "test-e2e-cli": "cypress run"
```

Updated eslint config

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
    {
      "files": ["**/*.cy.js"],
      "env": { "cypress/globals": true },
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "rules": {
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off"
      }
    },
    {
      "files": ["**/*.test.js"],
      "env": { "jest": true },
      "plugins": ["jest"],
      "extends": ["plugin:jest/recommended"],
      "rules": { "jest/prefer-expect-assertions": "off" }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```

> [Link to page](https://npm.io/package/eslint-plugin-cypress)

