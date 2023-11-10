require('dotenv/config');
const email = Cypress.env('LOGIN_USERNAME');
const password = Cypress.env('LOGIN_PASSWORD');

describe('logging in and loggin out', () => {
  it('log in and checking log-out button', () => {
    cy.visit('https://griphaugland.github.io/ca_workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${password}{enter}`);
    cy.wait(2000);
    cy.get(
      'header > div > div > div > button.btn.btn-outline-warning.me-2',
    ).click();
    cy.wait(2000);
    cy.get('#registerModalLabel').should('have.text', 'Create Profile');
  });
});
