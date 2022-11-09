# Workflow Course Assignment 

## Status


## Info 
Course assignment at Noroff. The purpose of this assignment is to improve an existing working environment, with useful workflows to speed up the development process. 

## Project setup 

Install Prettier:
```
npm install --save-dev prettier
```

Install ESLint:

```
npm install eslint --save-dev
```

Setting up ESLint:

```
npx eslint --init
```

Choose these options in command line: 

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Install Mrm to use pre-commit hooks: 

```
npx mrm@2 lint-staged
```

Add scripts to the `package.json` file:

```json
"scripts": {
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

Update `lint-staged` in `package.json`:

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
## Unit testing 

Install Jest: 

```
npm i -D jest@29.2.0
```

Update `package.json`: 

```json
"scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest"
}
```

To use pre-commit hook for jest, open `.husky/pre-commit` and add: 

```
npm run test-unit
```

Install ESLint plugin:

```
npm i -D eslint-plugin-jest
```

Update `.eslintrc.json`:

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

Install Babel: 

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Create `babel.config.json` and add: 

```json
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

## Unit testing with Jest

Test files: 
-login.test.js
-logout.test.js
-create.test.js

Run this test: 

```
npm run test-unit
```

## End to end testing with cypress: 

Test files: 

-createPost.cy.js
-login.cy.js
-logout.cy.js

Run this test and make sure to have local server ready: 

```
npm run test-e2e
```

To run the test files in command line, use: 

```
npm run test-e2e-cli
```
