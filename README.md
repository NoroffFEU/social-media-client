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


    Need Peer Feedback