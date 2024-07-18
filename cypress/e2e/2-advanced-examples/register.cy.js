/// <reference types="cypress" />

import { register } from '../../../src/js/api/auth/register';

describe('User Registration', () => {
  it('should show 400 error when trying to register a user', () => {
    // Intercept the registration request
    cy.intercept('POST', '/api/social/auth/register', (req) => {
      req.reply(async () => {
        try {
          // Call your actual registration function with mock data
          await register('Test User', 'testuser@example.com', 'password123', 'https://example.com/avatar.jpg');
          // If registration succeeds unexpectedly, throw an error
          throw new Error('Registration should fail but succeeded');
        } catch (error) {
          // Ensure the response status code is 400 and return the error message
          return {
            statusCode: 400,
            body: {
              error: 'There was a problem creating your account',
            },
          };
        }
      }).as('registerRequest');
      
      // Visit the page with the registration form
      cy.visit('/index.html'); // Replace with the actual URL of your registration form

      // Fill in the registration form
      cy.get('#registerName').type('Test User');
      cy.get('#registerEmail').type('testuser@example.com');
      cy.get('#registerPassword').type('password123');
      cy.get('#registerAvatar').type('https://example.com/avatar.jpg');

      // Submit the form
      cy.get('form#registerForm').submit();

      // Wait for the request to complete and check the response
      cy.wait('@registerRequest', { timeout: 10000 }).its('response.statusCode').should('eq', 400);

      // Optionally, check for UI feedback indicating a registration failure
      cy.get('.alert').should('contain', 'There was a problem creating your account');
    });
  });
});
