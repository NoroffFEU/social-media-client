# Workflow CA

## Test Status Badges

## Project Setup

### Code Formatters

This guide is done using VSC, you will need the `Prettier - Code formatter` and `ESLint` extensions installed to vsc for on save actions to work.

Install Prettier.

```
npm install --save-dev prettier
```

Install eslint

```
npm install eslint --save-dev
```

Setup eslint with shown settings.

```
npx eslint --init

✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Install Mrm, to manage pre-commit hooks.

```
npx mrm@2 lint-staged
```

Add scripts to package.json

```
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

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

Add workspace settings for VSC, may differ for other code editors.

```
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript"
  ]
}
```
