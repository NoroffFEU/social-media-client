Course assignment for workflow


- Installed node modules (npm init, npm i)
- Adding ("type": "module") in package.json.



Configures Prettier, ESlint and Jest to run on commit:

- Installing ESlint (npm install eslint --save-dev)
- Initializing ESlint (npx eslint --init)
- Adding this ("test": "node src/js/joker.js") under scripts in package.json

- Installing Prettier (npm install --save-dev prettier)
- Testing Prettier (npx prettier -c src/**/*.js)
- Running Prettier (npx prettier -w src/**/*.js)
- Adding this ("format": "prettier -w src/**/*.js") under scripts in package.json

- Installing Jest (npm install --save-dev jest)
- Installing eslint-plugin-test (npm i -D eslint-plugin-jest)
- Adding this ({
        "files": ["**/*.test.js"],
        "env": { "jest": true },
        "plugins": ["jest"],
        "extends": ["plugin:jest/recommended"],
        "rules": { "jest/prefer-expect-assertions": "off" }
      }) under overrides in .eslintrc.json
- Made sum.js and sum.test.js to run a jest test to check if it works.
- Added this ("test": "jest") under scripts in package.json
- Runs (npm test) in terminal to run the test.

- Runs (npx mrm@2 lint-staged) in terminal.
- Changed to this ("lint-staged": {
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
}) in package.json.




The following workflows/hooks are required:

Project is configured to run Prettier on commit
Project is configured to run ESLint on commit
Project is configured to run Jest on commit
Project is configured to deploy to pages on merge to default
The following file changes are required:

Project readme file is updated to include new configuration information and status badges
Project is configured for hosting (e.g. CDN links or a Bundler)
The following features must be automatically tested with unit tests:

The login function returns a valid token when provided with valid credentials
The logout function clears the token from browser storage
The create item function creates a new item on the API
The following features must be automatically tested with end-to-end tests:

The login form validates user inputs correctly based on API restrictions
The create item form validates user inputs correctly based on API restrictions
The logout button logs the user out when clicked