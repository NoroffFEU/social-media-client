import '@testing-library/cypress/add-commands';

import cy from 'cypress';
describe('My First Test', () => {
  it('should successfully log in with valid credentials', () => {
    cy.visit('/');
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('#login-button').click();
    cy.url().should('include', '/dashboard');
  });

  it('should not log in with invalid credentials and show an error message', () => {
    cy.visit('/src/components/login');
    cy.get('#username').type('admin');
    cy.get('#password').type('wrongpassword');
    cy.get('#login-button').click();
    cy.get('.error-message').should('be.visible');
  });
});
