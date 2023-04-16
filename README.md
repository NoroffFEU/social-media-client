# Workflow CA - Social Media Client

# Project Description:

This is the Course Assignment for Workflow in FED2-22.
Im assigned in this CA to fork this social media client-project from "https://github.com/noroffFEU/social-media-client".
Then I will need to set up a branch called workflow for testing Javascript-files when sending in a pull-request.
I need to add ESLint, Cypress, Prettier. Also need to configure ESLint to unit-test .test.js files and Cypress to end-to-end test (...).js files.


# Process

1. Installed and set up the base by using npm i.
2. Created a branch called eslint to install and merge eslint into the workflow branch.
3. Installed and setup Eslint.
4. Installed and setup Cypress.
5. Created and ran two unit-tests:
    - Login function fetches and stores a token in the browser storage.
    - The logout function clears the token from the browser storage.
6. Created and ran 4 e2e-tests:
    - login.cy.js: The user can use correct userdredentials to log into the website and view their profile page.
    - logout.cy.js: The user can first log in correctly and then logout using the logout button.
    - login_fail_email.cy.js: The user tries to login with an email that is not allowed, then they recieve an error message in the browser that they need to enter an email from noroff.no.
    - login_fail_password.cy.js: The user tries to login with correct email but wrong password. There isn't currently an error message shown to the user in the browser, but the test recieves an error message saying that either the email or password are incorrect.
7. Installed and set up Prettier. Our CA says that we should set it up but not run it. 
   Therefore I have included here a couple of scripts that the lessons said should be included in package.json, but since there seemed to be an issue with having comments in the scripts part I adedd them here:
   {
    "scripts": {
    "format": "prettier -w src/**/*.js"
    "test": "node src/**/*.js"
    },
   }
8. Installed and setup lint-staged and Husky. I then removed: "*.{js,css,md}": "prettier --write" from the package.json file so it doesn't run Prettier.
9. Added a defauolt formatter file in .vscode/settings.json. This is where the projects default formatting like format on save etc are set. 
   For this CA perttier: format on    save is set to false.
10. Created workflows for automatic testing of unit-tests with eslint and e2e-testing with cypress on PR to the master branch.
    Also added status badges for these two tests in the README.md file.

PS! Note:
    When I started this CA I struggled to make things work. In this workflow branch I now see that steps 7-10 should really be at the start before I added or ran tests.
    

# Status Badges

[![Automated Unit Testing](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Yggdrass/social-media-client-workflowCA/actions/workflows/e2e-test.yml)