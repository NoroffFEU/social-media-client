## Workflow CA
 The scope of this project is to improve the quality of the forked repository from Noroff University, by providing various development workflows as well as a testing strategy.

### Requirements
- Configure the project with eslint, prettier and commit hooks.
- Configure the project with GitHub Actions for build/deploy if required.
- Configure the project for Jest and Cypress.

### Test Cases 
- The user can log in with the login form with valid credentials.
- The user cannot submit the login form with invalid credentials and is shown a message.
- The user can log out with the logout button.

### Set up project
<ol>
  <strong><li>Clone repository:</li></strong>
  <pre>gh repo clone KristaKaza/social-media-client</pre>

<ol>
  <strong><li>install dependencies:</li></strong>
  <pre>npm install</pre>

### Testing:

<strong><li>Run Jest and Cypress tests by entering:</li></strong>

<pre>npm run test-unit & npm run test-e2e-cli</pre>

