require('dotenv/config');
const email = Cypress.env('LOGIN_USERNAME');
const password = Cypress.env('LOGIN_PASSWORD');

describe('logging in and loggin out', () => {
  it('log in and checking log-out button', () => {
    cy.visit('https://griphaugland.github.io/ca_workflow/');
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${password}{enter}`);
    cy.get('.btn-outline-warning').click();
    cy.get('#registerModalLabel').should('have.text', 'Create Profile');
  });
});
