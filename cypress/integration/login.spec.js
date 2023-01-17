/* eslint-disable no-undef */
// login.spec.js
import 'cypress-testing-library/add-commands';

describe('Login', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://127.0.0.1:8080/login');
  });

  it('displays the correct title', () => {
    // Assert that the title of the page is correct
    cy.title().should('equal', 'Login - My App');
  });

  it('submits the form with valid credentials', () => {
    cy.get("input[name='email']").type('valid@email.com');
    cy.get("input[name='password']").type('validPassword');
    cy.get('form').submit();
    cy.get('.alert-success').should('contain', 'You are logged in!');
  });

  it('shows an error message when submitting the form with invalid credentials', () => {
    cy.get("input[name='email']").type('invalid@email.com');
    cy.get("input[name='password']").type('invalidPassword');
    cy.get('form').submit();
    cy.get('.alert-danger').should('contain', 'Invalid email or password');
  });
});
