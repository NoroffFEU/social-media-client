/* eslint-disable no-undef */
// invalid_login.spec.js
import "cypress-testing-library/add-commands";
describe('Invalid login feature', () => {
  it('prevents the user from logging in with invalid credentials', () => {
    cy.visit('/login');
    cy.get("input[name='email']").type('invalid@email.com');
    cy.get("input[name='password']").type('invalidpassword');
    cy.get('form').submit();
    cy.url().should('include', '/login');
    cy.get('.error').should('contain', 'Invalid email or password');
  });
});
