Workflow CA

<!-- Installing Prettier -->

```
npm install --save-dev prettier
```

<!-- Installing Eslint  -->

```
npm install eslint --save-dev
```

<!-- Setting up eslint with preferred settings -->

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

<!-- Installing Jest  -->

```
npm i -D jest@29.2.0
```

<!-- Add Jest scripts to package.json  -->

```
"scripts": {
    "test": "npm run test-unit",
    "test-unit": "jest",
  }
```
