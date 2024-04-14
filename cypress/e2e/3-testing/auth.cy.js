//variables

const loginEmailInput = '[data-cy="loginEmail"]';
const loginPasswordInput = '[data-cy="loginPassword"]';
const loginFormBtn = '[data-cy="loginFormButton"]';
const loginBtn = '[data-cy="loginFormSubmit"]';
const logOutBtn = '[data-cy="logOutButton"]';

//DUMMY ACCOUNT
const email = 'testaccount4567@stud.noroff.no';
const password = 'Testaccount4567';

//COMMANDS

//Get login form command

Cypress.Commands.add('getLoginForm', () => {
  cy.visit('/');
  cy.wait(500);
  cy.get(loginFormBtn).click();
  cy.get(loginEmailInput).should('exist');
  cy.get(loginPasswordInput).should('exist');
});

//Login request command

Cypress.Commands.add('loginReq', (email, password) => {
  cy.intercept({
    method: 'POST',
    url: '**/api/v1/social/auth/login',
  }).as('loginReq');

  cy.get(loginEmailInput).type(email, { delay: 0 });
  cy.get(loginPasswordInput).type(password, { delay: 0 });
  cy.get(loginBtn).click();
});

//Logout request command

Cypress.Commands.add('logoutReq', () => {
  cy.get(logOutBtn).click();
});

//TESTS

//Test the login with valid credentials

describe('Valid Login', () => {
  it('Should successfully log you in with a valid user', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.wait('@loginReq');
  });

  it('Should respond with a code 200', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.wait('@loginReq').its('response.statusCode').should('eq', 200);
  });

  it('Should check if a token is stored in local storage', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.window().its('localStorage.token').should('exist');
  });

  it('Should check if profile information is stored in local storage', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.window().its('localStorage.profile').should('exist');
  });

  it('Should redirect it user to the profile page', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.url().should('include', 'testaccount4567');
  });

  after(() => {
    cy.log('All test in the Valid Login suite is completed');
  });
});

//Tests the login with wrong credentials

describe('Wrong Login', () => {
  it('Should try to login with invalid credentials', () => {
    cy.getLoginForm();
    cy.loginReq('incorrectemail4567@stud.noroff.no', 'Incorrectpass4567');
    cy.wait('@loginReq');
  });

  it('Should respond with a 401 error', () => {
    cy.getLoginForm();
    cy.loginReq('incorrectemail4567@stud.noroff.no', 'Incorrectpass4567');
    cy.wait('@loginReq').its('response.statusCode').should('eq', 401);
  });

  it('Should check if there is no token saved to the local storage', () => {
    cy.getLoginForm();
    cy.loginReq('incorrectemail4567@stud.noroff.no', 'Incorrectpass4567');
    cy.window().its('localStorage.token').should('be.undefined');
  });

  it('Should check if there is no profile saved to the local storage', () => {
    cy.getLoginForm();
    cy.loginReq('incorrectemail4567@stud.noroff.no', 'Incorrectpass4567');
    cy.window().its('localStorage.profile').should('be.undefined');
  });

  it('Should not redirect to another page', () => {
    cy.getLoginForm();
    cy.loginReq('incorrectemail4567@stud.noroff.no', 'Incorrectpass4567');
    cy.get(loginBtn).should('be.visible');
  });
});

//Tests the logout

describe('Log out', () => {
  it('Should test if the logout works', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.logoutReq();
    cy.get(loginFormBtn).should('be.visible');
  });

  it('Should remove token from local storage', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.window().its('localStorage.token').should('exist');
    cy.logoutReq();
    cy.window().its('localStorage.token').should('be.undefined');
  });

  it('Should remove profile from local storage', () => {
    cy.getLoginForm();
    cy.loginReq(email, password);
    cy.window().its('localStorage.profile').should('exist');
    cy.logoutReq();
    cy.window().its('localStorage.profile').should('be.undefined');
  });
});
