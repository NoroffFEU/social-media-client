- Initialized npm

- Added package.json

- Ran npm audit;
  3 high severity vulnerabilities.

- Ran npm audit fix --force

-Installed prettier
npm install --save-dev prettier

-Installed ESlint
npm install --save-dev eslint

-Set up ESlint
npx eslint --init
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON

- Install husky and lint-staged, for pre-commit Hook
  npx mrm@2 lint-staged

-Edit package.json file with;
"format": "prettier -w src/**/\*.js",
"lint": "eslint src/**/_.js",
"lint-fix": "eslint src/\*\*/_.js --cache --fix"

- Replace "lint-staged" in package.json with;
  "lint-staged": {
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

-Added linting rules to .vscode/settings.json file;
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
}

-Install Jest
npm i -D jest@29.2.0

- Add to package.json;
  "test": "npm run test-unit",
  "test-unit": "jest"

- Install eslint plugin
  npm i -D eslint-plugin-jest

-Update .eslintrc.json file with;
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
"rules": { "jest/prefer-expect-assertions": "off", "no-undef": "off" }
}
],
"parserOptions": {
"ecmaVersion": "latest",
"sourceType": "module"
},
"rules": {}
}

- Install babel
  npm install --save-dev babel-jest @babel/core @babel/preset-env

-Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project;
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

-
