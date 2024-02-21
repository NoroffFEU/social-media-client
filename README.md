# Workflow Resit

This is a resit for Workflow. _All_ required configurations, updates and work will be uploaded to this branch.

The master/main branch of this repository has been forked from this [link](https://github.com/noroffFEU/social-media-client) as required in the Workflow CA at Noroff.

## Description

The goal of this resit is using skills from the course Workflow.

The existing application package must feature:

- A front-end login form connected to an API JWT endpoint
- A front-end logout button connected to an API JWT endpoint
- Front-end CRUD functionality for at least one object type
- A front-end profile

### Tasks for the CA

- [x] Fork the project repository to your GitHub account.
- [x] Create a new branch called "workflow".
- [] Configure the project to run ESlint on commit.
- [] Configure the project to run Prettier on commit.
- [] Configure the project with Commit Hooks.
- [] Configure the project with GitHub Actions for build/deploy if required.
- [] Record bugs found during this process (steps above) in the Issues Tab.
- [] Configure the project with Jest.
- [] Configure the project with Cypress.
- [] Create tests to cover the required test cases.
- [] README.md file is updated to include new configuration info and workflow status badges.
- [] All known bugs have been communicated in the Issues tab.
- [] Create a PR from workflow into the default branch.
- [] Submit a link to the open PR on Moodle.

#### Workflow Tests

Tests that checks the following: 

- [] The user can log in with valid credentials. 
- [] The user can't log in without valid credentials. 
- [] The user is shown a message when log in fails. 
- [] The user is able to log out with the log out button.  
- [] The login function stores a token in browser storage when a user is logged in with valid credentials. 
- [] The logout function clear the token from browser storage. 