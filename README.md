# Setup

## Terminal

### npm install --save-dev prettier

### npm install eslint --save-dev

### npx eslint --init

How would you like to use ESLint? · problems
What type of modules does your project use? · esm
Which framework does your project use? · none
Does your project use TypeScript? · No
Where does your code run? · browser
What format do you want your config file to be in? · JSON

### Package.json

```
format": "prettier -w src/**/\*.js",
lint": "eslint src/**/_.js",
lint-fix": "eslint src/\*\*/_.js --cache --fix"
```

### npx mrm@2 lint-staged

#### Package.json

```
lint-staged": {
"_.js": [
"prettier --write",
"eslint --fix"
],
"_.html": [
"prettier --write"
],
"\*.scss": [
"prettier --write"
]
}
```

### npm i -D jest@29.2.0

#### Package.json

"test-unit": "jest"

### npm i -D eslint-plugin-jest

#### eslintrc.json

```
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

### npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4

#### babel.config.json

```
{
"presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

### npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1

"test": "npm run test-unit && npm run test-e2e-cli",
"test-unit": "jest",
"test-e2e": "cypress open",
"test-e2e-cli": "cypress run"

#### eslintrc.json

```
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

#### package.json

```
{
"name": "css-frameworks-ca",
"version": "1.0.3",
"description": "",
"main": "index.js",
"scripts": {
"build": "sass src/scss",
"start": "sass --watch src/scss:dist/css & live-server",
"format": "prettier -w src/js/",
"lint": "eslint src/js/",
"lint-fix": "eslint src/js/ --cache --fix",
"prepare": "husky install",
"test": "npm run test-unit && npm run test-e2e-cli",
"test-unit": "jest",
"test-e2e": "cypress open",
"test-e2e-cli": "cypress run"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/core": "^7.19.3",
"@babel/preset-env": "^7.19.4",
"cypress": "^10.7.0",
"eslint": "^8.26.0",
"eslint-plugin-cypress": "^2.12.1",
"eslint-plugin-jest": "^27.1.3",
"husky": "^8.0.1",
"jest": "^29.2.0",
"lint-staged": "^13.0.3",
"live-server": "^1.2.2",
"prettier": "^2.7.1",
"sass": "^1.54.8",
"bootstrap": "^5.2.2"
},
"lint-staged": {
"_.js": [
"eslint --fix",
"prettier --write"
],
"_.html": [
"prettier --write"
],
"\*.scss": [
"prettier --write"
]
}
}
```

<!--  -->

```
npm install --save-dev prettier

npm install --save-dev prettier

https://github.com/Gonlonge/workflow-ca-social-media/tree/secondary

The following workflows/hooks are required

1.Project is configured to run Prettier on commit: Done

2.Project is configured to run ESLint on commit: Done

3.Project is configured to run Jest on commit: Done

4.Project is configured to deploy to pages on merge to default: Done

<!--  -->

The following file changes are required

1.Project readme file is updated to include new configuration information and status badges:
https://gonlonge.github.io/workflow-ca-social-media/

[![Deploy static content to Pages](https://github.com/Gonlonge/workflow-ca-social-media/actions/workflows/pages.yml/badge.svg)](https://github.com/Gonlonge/workflow-ca-social-media/actions/workflows/pages.yml)

2.Project is configured for hosting (e.g. CDN links or a Bundler): Done

<!--  -->

The following features must be automatically tested with unit tests

1.The login function returns a valid token when provided with valid credentials:

2.The logout function clears the token from browser storage:

3.The create item function creates a new item on the API:

<!--  -->

// Test user:
// ("gonzalo02@stud.noroff.no", "Gonzalo123")
```
