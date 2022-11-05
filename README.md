# Workflow CA 

## Info 
Course assignment at Noroff. The purpose of this assignment is to improve an existing working environment, with useful workflows to speed up the development process. 

## Project setup 

Install Prettier:
```
npm install --save-dev prettier
```

Install ESLint:

```
npm install eslint --save-dev
```

Setting up ESLint:

```
npx eslint --init
```

Choose these options in command line: 

```
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
```

Install Mrm to use pre-commit hooks: 

```
npx mrm@2 lint-staged
```

Add scripts to the `package.json` file:

```json
"scripts": {
    "format": "prettier -w src/**/*.js",
    "lint": "eslint src/**/*.js",
    "lint-fix": "eslint src/**/*.js --cache --fix"
}
```

Update `lint-staged` in `package.json`:

```json
"lint-staged": {
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
}
```


