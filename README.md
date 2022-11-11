Course assignment for workflow


- Installed node modules (npm init, npm i)

Configures Prettier and ESlint to run on commit:
- Installing ESlint (npm install eslint --save-dev)
- Initializing ESlint (npx eslint --init)
- Adding this ("test": "node src/js/joker.js") under scripts in package.json
- Installing Prettier (npm install --save-dev prettier)
- Testing Prettier (npx prettier -c src/**/*.js)
- Running Prettier (npx prettier -w src/**/*.js)
- Adding this ("format": "prettier -w src/**/*.js") under scripts in package.json


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