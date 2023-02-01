# social-media-client
## Workflow
### Course Assignment

This course assignment is about learning WORKFLOW. We learn how to communicate or working other project using github, Installing and Testing through terminal, testing using cypress and fixing or reporting bugs.

During this lecture its a big challenge and struggle to learn all this, specially you working on the other project. Looking for bugs, learning git using command tags and testing if all works smoothly.
We learn a lot how we figure out things on our own and the process step by step is challenging.

### The Process

On this project i choosed what my teacher´s provide, and then i fork and make a new branch, named it Workflow and set it into default.

Using the command line i clone the project to my vs code, and start the task or the challenge course assignment.

-i make sure the git, node.js and npm package is installed

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


-from there i can now install all i need at command line like package.JSON file, to clone the project, pull, push, commit and install that i need for testing like JEST and Cypres and more.

**Clone**

-Type git clone in the terminal, paste the URL you copied earlier, and press “enter” to create your local clone.

**Push and Commit**

      -git add. 
      
      -git commit -m "the comment"
      
      -git push
      
      
### How to install
<strong><pre>npm install</pre></strong>

**Installing ESlint**

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

1.In the embedded Terminal ( Alt+F12 ) , type one of the following commands: 

-npm install --g eslint for global installation. 

-npm install --save-dev eslint to install ESLint as a development dependency.

2.Optionally, install additional plugins, for example, eslint-plugin-react to lint React applications.

more about eslint

https://www.jetbrains.com/help/webstorm/eslint.html

**Inatalling Cypress**

To install Cypress using the npm (Node package manager) navigate to the project directory and execute the following command:

-npm init.

-npm install cypress --save-dev.

-yarn add cypress --dev.


***How to open cypress in terminal?***

-cypress open Or by using yarn. yarn run cypress open.

-The long way with the full path. ./node_modules/.bin/cypress open.

-Or with the shortcut using npm bin. $(npm bin)/cypress open.

***One way to keep track in everything you installed, you can find in the package.JSON***


**Here is the testings that i´ve done to this project**

    -"start": "sass --watch src/scss:dist/css & live-server",

    -"test": "npm run test-unit && npm run test-e2e",

    -"test-unit": "jest",
    
    -"test-e2e": "cypress open",
    
    -"test-e2e-cli": "cypress run"
    
### Testing
[![Unit Testing with Jest](https://github.com/Khintin/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow&event=pull_request)](https://github.com/Khintin/social-media-client/actions/workflows/unit-test.yml)

[![End to End Testing with Cypress](https://github.com/Khintin/social-media-client/actions/workflows/end-to-end-testing-with-cypress.yml/badge.svg?branch=workflow&event=pull_request)](https://github.com/Khintin/social-media-client/actions/workflows/end-to-end-testing-with-cypress.yml)

[![Deploy static content to Pages](https://github.com/Khintin/social-media-client/actions/workflows/pages.yml/badge.svg?branch=workflow&event=push)](https://github.com/Khintin/social-media-client/actions/workflows/pages.yml)




