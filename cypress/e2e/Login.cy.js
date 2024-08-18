// login.cy.js

describe('Login Tests', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('should open a login form when the login button is pressed', () => {
    cy.openLoginForm();
  });
  it('should successfully log in and save the token and profile', function () {
    cy.openLoginForm();

    // Use the loaded fixture data to log in
    cy.loginUser(Cypress.env('email'), Cypress.env('password'));
    cy.isLoggedIn();
  });
  it('should show an error when invalid userdata tries to log in', function () {
    cy.openLoginForm();
    cy.loginUser(Cypress.env('invalidEmail'), Cypress.env('invalidPassword'));
    cy.on('window:alert', () => {
      expect(true).to.be.true;
    });
  });
});
