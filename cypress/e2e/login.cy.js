/* eslint-env mocha */
/* global cy */

describe('Login Tests', () => {
  const validEmail = 'test123@stud.noroff.no';
  const validPassword = 'test1234';
  const invalidEmail = 'test@hotmail.com';
  const invalidPassword = 'test';

  it('allows a user with correct credentials to log in', () => {
    cy.visit('/');
    cy.get('#registerModal').contains('Login').click();
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('button[type=submit]').contains('Login').click();
  });

  it('displays an error for login with incorrect credentials', () => {
    cy.visit('/');
    cy.get('#registerModal').contains('Login').click();
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(invalidEmail);
    cy.get('#loginPassword').type(invalidPassword);
    cy.get('button[type=submit]').contains('Login').click();
  });
});
