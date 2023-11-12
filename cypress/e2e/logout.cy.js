/* eslint-env mocha */
/* global cy */

describe('Logout Test', () => {
  const validEmail = 'test123@stud.noroff.no';
  const validPassword = 'test1234';

  it('enables a logged-in user to log out successfully', () => {
    cy.visit('/');
    cy.get('#registerModal').contains('Login').click();
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('button[type=submit]').contains('Login').click();

    cy.get("button[data-auth='logout']").click();
  });
});
