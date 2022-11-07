# Social Media Client - Workflow CA

[![Deploy static content to Pages](https://github.com/Mariannebp/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Mariannebp/social-media-client/actions/workflows/pages.yml)

[![Automated E2E Testing](https://github.com/Mariannebp/social-media-client/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Mariannebp/social-media-client/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/Mariannebp/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Mariannebp/social-media-client/actions/workflows/unit-test.yml)


## Description

This is my work for the course assignment in workflow at Noroff.

For this assignment I have forked a teachers repository for a social media app. The goal for the assignment was to improve the quality on an existing environment by establishing useful workflows that make the development process more efficient. 


## Github actions

Github actions that has been created:
- Deploy static content to Pages
- Automated E2E Testing
- Automated Unit Testing


## Setting up

Elements to install:
- [Prettier](#prettier)
- [Eslint](#eslint)
- [Jest](#jest)
- [Babel](#babel)
- [Cypress](#cypress)
- [mrm](#mrm)
- [vite](#vite)


#### Prettier

Install
```md
npm install --save-dev prettier
```

Update package.json scripts
```json
  "format": "prettier -w src/js/**/*.js",
```

#### Eslint

Install
```md
npm install eslint --save-dev
```

Initialize
```md
npx eslint --init
```

Recommended answers:
```md
	✔ How would you like to use ESLint? · problems
  ✔ What type of modules does your project use? · esm
  ✔ Which framework does your project use? · none
  ✔ Does your project use TypeScript? · No
  ✔ Where does your code run? · browser
  ✔ What format do you want your config file to be in? · JSON
```

Update package.json scripts:
```json
"lint": "eslint src/**/*.js",
"lint-fix": "eslint src/**/*.js --cache --fix",
```

#### Jest

Install
```md
npm i -D jest@29.2.0
```

Update package.json scripts
```json
"test": "npm run test-unit",
"test-unit": "jest",
```

Install eslint plugin for jest
```md
npm i -D eslint-plugin-jest
```

Update .eslintrc.json
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

#### Babel

Install
```md
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Create babel.config.json and add
```json
	{
	  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

#### Cypress

Install
```md
npm i -D cypress@10.7.0 eslint-plugin-cypress@2.12.1
```

Update .eslintrc.json
```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
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
            "files": [
                "**/*.cy.js",
                "cypress.config.js"
            ],
            "env": {
                "cypress/globals": true,
                "node": true
            },
            "plugins": ["cypress"],
            "extends": ["plugin:cypress/recommended"],
            "rules": {
                "cypress/no-unnecessary-waiting": "off",
                "no-unused-vars": "off"
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

Update package.json scripts
```json
"test": "npm run test-unit && npm run test-e2e-cli",
"test-e2e": "cypress open",
"test-e2e-report": "cypress run --reporter mochawesome",
"test-e2e-cli": "cypress run",
```

#### mrm
This configuration creates pre-commit hooks for 
- prettier
- eslint
- jest

Install
```md
npx mrm@2 lint-staged
```

Update package.json
```json
	"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write",
    "jest --findRelatedTests --passWithNoTests"
  ],
  "*.html": [
    "prettier --write"
  ],
  "*.scss": [
    "prettier --write"
  ]
}
```

#### Vite

Install
```md
npm install -D vite
```

Create vite.config.json and add
```js

```

Update package.json scripts
```json
"dev": "vite",
"vite-build": "vite-build",
"vite-preview": "vite preview"
```

To open server in browser, run
```md
npm run dev
```
