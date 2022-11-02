# social-media-client
Workflow-CA
# Initial setup steps

install prettier as dev dependency

```
npm install --save-dev prettier
```

install eslint as dev

```
npm install eslint --save-dev
```

setup eslint

```
npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Update scripts in package file

```
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
```

Install Mrm, for pre-commit hooks to run eslint and prettier;

```
npx mrm@2 lint-staged
```

Update package file with tasks

```
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

Install Jest for unit testing.

```
npm i -D jest@29.2.0
```

Update scripts in package

```
"test-unit": "jest"
```

Install eslint jest plugin

```
npm i -D eslint-plugin-jest
```

Update eslint configuration

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

Install Babel

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

add babel.config.json and add configuration

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

Install Cypress for end to end testing

```
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```

Updated scripts

```
    "test": "npm run test-unit && npm run test-e2e-cli",
    "test-unit": "jest",
    "test-e2e": "cypress open",
    "test-e2e-cli": "cypress run"
```

Updated eslint config

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
