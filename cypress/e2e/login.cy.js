/* eslint-disable no-undef */


describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not log in with invalid credentials and show an error message', () => {
    cy.get('input[name="email"]').type('invalid@email.com');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('form').submit();
    cy.get('.error-message').should('be.visible');
  });
});
