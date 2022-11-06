[![Automated Unit Testing](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/unit-testing.yml/badge.svg)](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/unit-testing.yml)

[![Automated end-to-end Testing](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/e2e-tesiting.yml/badge.svg)](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/e2e-tesiting.yml)

[![Deploy static content to Pages](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/builddeploy.yml/badge.svg)](https://github.com/johannranudd/social-media-client-wf-ca-jr/actions/workflows/builddeploy.yml)

## .eslintrc.json config1
````
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
        },
        {
          "files": ["**/cypress.config.js"],
          "env": { "cypress/globals": true },
          "plugins": ["cypress"],
          "extends": ["plugin:cypress/recommended"],
          "rules": {
            "cypress/no-unnecessary-waiting": "off",
            "no-unused-vars": "off",
            "no-undef": "off"
          }
        }
      ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
      "no-undef": "off"
    }
}
````
## cypress.config.js

/* global _:readonly */

````
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
````
