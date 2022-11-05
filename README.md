# Workflow CA

## **Test Status Badges**

## **Project Setup**

### **Code Formatters**

This guide is done using VSC, you will need the `Prettier - Code formatter` and `ESLint` extensions installed to vsc for on save actions to work.

Install Prettier.

```
npm install -D prettier
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

Add scripts to `package.json`

```
scripts{
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

Replace default lint-staged scripts this.

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

Add workspace settings for VSC, `.vscode/settings.json` (may differ for other code editors).

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

### **Unit Testing Packages**

Install Jest

```
npm i -D jest@29.2.0
```

Add Jest scripts to `package.json`

```
    "test": "npm run test-unit",
    "test-unit": "jest"
```

Install eslint plugin for Jest.

```
npm i -D eslint-plugin-jest
```

Update `.eslintrc.json` settings

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
        "rules": { "jest/prefer-expect-assertions": "off", "no-undef": "off"  }
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

Create `babel.config.json` and add

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

To add pre-commit hook for Jest, `.husky/pre-commit` add to file.;
```
npm run test-unit
```

### **End To End Test Packages**

## **Unit Testing**

Add the following test files;
- login.test.js
- logout.test.js
- create.test.js

To run these tests use;

```
npm run test-unit
```
