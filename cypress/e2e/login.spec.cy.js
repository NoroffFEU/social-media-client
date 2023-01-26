/* eslint-disable no-undef */
describe('Login form', () => {
  it('should successfully log in with valid credentials', () => {
    cy.visit('/');
    cy.get('input[name="email"]').type('valid@email.com');
    cy.get('input[name="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
  it('should not log in with invalid credentials and show an error message', () => {
    cy.visit('/');
    cy.get('input[name="email"]').type('invalid@email.com');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });
});
