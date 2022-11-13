# Social media app CA

[![Automated E2E Testing](https://github.com/Littlaa/social-media-client-ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Littlaa/social-media-client-ca/actions/workflows/e2e-test.yml)
[![Automated Unit Testing](https://github.com/Littlaa/social-media-client-ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Littlaa/social-media-client-ca/actions/workflows/unit-test.yml)
[![Deploy static content to Pages](https://github.com/Littlaa/social-media-client-ca/actions/workflows/pages.yml/badge.svg)](https://github.com/Littlaa/social-media-client-ca/actions/workflows/pages.yml)

## The following workflows/hooks are configured:

- [x] Project is configured to run Prettier on commit
- [x] Project is configured to run ESLint on commit
- [x] Project is configured to run Jest on commit
- [x] Project is configured to deploy to pages on merge to default

## The following files are changed:

- [x] Project readme file is updated to include new configuration information and status badges
- [x] Project is configured for hosting (e.g. CDN links or a Bundler)

## The following features are automatically tested with unit tests:

- [x] The login function returns a valid token when provided with valid credentials
- [x] The logout function clears the token from browser storage
- [x] The create item function creates a new item on the API

## The following features are automatically tested with end-to-end tests:

- [x] The login form validates user inputs correctly based on API restrictions
- [x] The create item form validates user inputs correctly based on API restrictions
- [x] The logout button logs the user out when clicked

## Run the App

Install project locally:

`npm i`

`npm run start`

---

### Prettier:

Install:

`npm install --save-dev prettier`

In package.json:

`"format": "prettier -w src/js/**/*.js"`

Run prettier:

`npm run format`

Configured prettier:

```javascript
{
  "singleQuote": true
}
```

### ESlint

Install:

`npm install eslint --save-dev`

Setting up ESlint:

`npx eslint --init`

This will ask you a series of questions. Here are the recommended answers:

> - How would you like to use ESLint? · problems

- What type of modules does your project use? · esm
- Which framework does your project use? · none
- Does your project use TypeScript? · No
- Where does your code run? · browser
- What format do you want your config file to be in? · JSON
