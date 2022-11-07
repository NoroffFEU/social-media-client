Workflow CA

Installing Prettier:

```
npm install --save-dev prettier
```

Installing Eslint:

```
npm install eslint --save-dev
```

Setting up eslint with preferred settings:

```
npx eslint --init
```

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Installing Jest:

```
npm i -D jest@29.2.0
```

Add Jest scripts to package.json:

```
"scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest",
  }
```

Installing Mrm to manage pre-commit hooks:

```
npx mrm@2 lint-staged
```

Add scripts to package.json

```
"scripts": {
    "format": "prettier -w src/js/",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix",
}
```

```
"lint-staged": {
    "*.js": [
      "eslint --cache --fix",
      "prettier --write",
      "jest --findRelatedTests"
    ],
    "*.html": [
      "prettier --write"
    ],
    "*.scss": [
      "prettier --write"
    ],
    "*.src/js/": "prettier --write"
  }
```

Install Babel

```
npm -D install @babel/core@7.19.3 @babel/preset-env@7.19.4
```

Create `babel.config.json` file and add the following:

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```
