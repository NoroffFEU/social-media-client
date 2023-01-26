# CA-WORKFLOW

![Skjermbilde_20230120_121534](https://user-images.githubusercontent.com/56642663/213682756-22f8b9e6-248f-49ff-8f28-3d51cdea4e33.png)


[![Deploy static content to the Pages](https://github.com/JoranEngelund/ca-workflow/actions/workflows/pages.yml/badge.svg)](https://github.com/JoranEngelund/ca-workflow/actions/workflows/pages.yml)

[![Automated E2E Testing](https://github.com/JoranEngelund/ca-workflow/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/JoranEngelund/ca-workflow/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/JoranEngelund/ca-workflow/actions/workflows/unit-test.yml/badge.svg)](https://github.com/JoranEngelund/ca-workflow/actions/workflows/unit-test.yml)

## Deployed on GitHub Pages:
[Social-Media-Client](https://joranengelund.github.io/ca-workflow/)

## Built With
- ```HTML```
- ```JavaScript```
- ```CSS```
- - ```Bootstrap```
- - ```SASS/SCSS```

## Getting Started

### Installing


1. Clone the repo:

```bash
git clone git@github.com:JoranEngelund/ca-workflow.git

```

2. Install the dependencies:

```
GitHub Desktop - https://desktop.github.com/
Code Editor (example: Visual Studio Code)
Live Server extension in Visual Studio Code
```

### Running

To run the app, run the following commands:

```bash
- Clone the repository in GitHub Desktop and open with Visual Studio Code from the menu (CTRL + SHIFT + A)
- In Visual studio code, open the explorer menu on the right side (CTRL + SHIFT + E)
- Open terminal in VSC to run npm commands:
- npm i
- npm run build
- Run Live Server by right-clicking on a desired html file (ALT + L -> ALT + O)
```

### Development

To work on SCSS/SASS, run the following commands in the terminal:

```bash
- npm run start
```

### Testing

To run Unit-test or end-to-end test, run the following commands in the terminal:

```bash
- For both Cypress and Jest:
- - npm run test

- For only Jest:
- - npm run test-unit

- For only Cypress:
- - npm run test-e2e (This will open cypress client and run test in Electron
- - npm run test-e2e-cli (This will run cypress e2e tests in the CLI)
```

### Formatting

To run Prettier for formatting, run the following commands in the terminal:

```bash
- npm run format
```

### Linting

To run ESLint, run the following commands in the terminal:

```bash
- npm run lint
```
