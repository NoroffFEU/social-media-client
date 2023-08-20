## Setup and Development

### Installation

1. Clone the repository 
2. install the dependencies: "npm install"

### Dependencies added

1. Prettier - For formatting your files and make it easier to read
2. Eslint - To to warn you and fix syntaxerrors in your code
3. husky and lint staged - to run both prettier and eslint on commit 

Note: you can run both eslint and prettier manualy in terminal if you want to

### Run the tests manually

#### Jest

To run jest manually open the terminal and write: npm run test (or shorthand this to: npm test).
This will run Jest in terminal, and show you if the tests pass or fail.



#### Cypress

Cypress is a testing program where you can Unit test and End-to-end test. 
In this repo it is only setup for end-to-end testing. 
Cypress is a more visual tool, that means you can see the front-end when the tests are runnig.

##### Runnig cypress

1. Open terminal to start http-server. In the terminal write: http-server (this will get the server running)
2. Open a second terminal and write: npm run test-e2e (This will open the Cypress ui).


###Automated testing on push and PR
![Unit Tests](https://github.com/EM-90/social-media-client/workflows/Unit%20Tests/badge.svg)
![E2E Tests](https://github.com/EM-90/social-media-client/workflows/E2E%20Tests/badge.svg)


### Package.json

Remember if you want to know what scripts you can run, or dev-dependencies that are installed in this repo
click on the package.json file.



