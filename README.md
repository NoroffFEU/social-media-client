# Social Media client for Workflow CA

[![Deploy content to pages](https://github.com/Gabrielzouad/Social-media-workflow-CA/actions/workflows/pages.yml)
[![e2e testing](https://github.com/Gabrielzouad/Social-media-workflow-CA/actions/workflows/e2etesing.yml)
[![Unit-testing](https://github.com/Gabrielzouad/Social-media-workflow-CA/actions/workflows/unit-testing.yml)

## description

This is my workflow for the social media client at noroff

In this assignment, we forked a project given from school, the assignment we were given was to implement and improve existing code and create workflow that made the development more efficients

## Github Actions

Github actions are one of the workflow methods that we used

- Automated E2e Testing
- Automated Unit Testing
- Deploy content into Github Pages

## How to use workflow methods

Install

```md
npm install
```

Build

```md
npm run build
```

## Dependencies and framework

- [Bootstrap](#bootstrap-dark-5)

## This is my development dependencies.

- [Prettier](#prettier)
- [Eslint](#eslint)
- [Eslint-cypress](#eslint-cypress)
- [Eslint-Jest](#eslint-jest)
- [Cypress](#cypress)
- [Jest](#jest)
- [Husky](#husky)
- [Sass](#sass)
- [Live-server](#live-server)
- [Live-staged](#live-staged)
- [babel](#babel)

## Requirements

### Scripts

"build": "sass src/scss:dist/css",
"start": "sass --watch src/scss:dist/css & live-server",
"prepare": "husky install",
"lint": "eslint src/\*_/_.js",
"test-unit": "jest",
"test-e2e": "cypress open"

### package.json prehooks

```md
"lint-staged": {
"_.js": [
"prettier --write"
],
"_.html": [
"prettier --write"
],
"\*.scss": [
"prettier --write"
]
}
```

### Eslint overrides and babel configuration

#### Eslint overrides

```md
"overrides": [
{
"files": ["**/*.test.js"],
"env": {
"jest": true
},
"plugins": ["jest"],
"extends": ["plugin:jest/recommended"],
"rules": {
"jest/prefer-expect-assertions": "off"
}
},
{
"files": ["**/*.cy.js"],
"env": { "cypress/globals": true },
"plugins": ["cypress"],
"extends": ["plugin:cypress/recommended"],
"rules": {
"cypress/no-unnecessary-waiting": "off",
"no-unused-vars": "off"
}
}
]
```

#### Babel config

Make sure to create the babel file with the following path name
babel.config.json

```md
{
"presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```
