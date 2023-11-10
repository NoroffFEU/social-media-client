require('dotenv/config');
const email = Cypress.env('LOGIN_USERNAME');
const password = Cypress.env('LOGIN_PASSWORD');

describe('logging in and checking profile name', () => {
  it('log in', () => {
    cy.visit('https://griphaugland.github.io/ca_workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`${email}`);
    cy.wait(1000);
    cy.get('#loginPassword').type(`${password}{enter}`);
    cy.wait(1000);
    cy.get('.profile-name').should('have.text', 'eirik');
  });
});
