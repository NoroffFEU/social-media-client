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

-Added a file with formatting errors to check that prettier and ESlint were working

-Added linting rules to .vscode/settings.json file;
{
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
"eslint.validate": ["javascript"]
}

- Now it formats and lints on save automaticly.
