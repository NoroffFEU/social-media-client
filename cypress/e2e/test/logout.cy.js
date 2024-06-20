import { validEmail, validPassword } from '../../support/testdata';

describe('Login first then logout', () => {
  it('Can login with valid credentials then logout after logout button appears', () => {
    // Visit the login page
    cy.visit('https://bekzatbagdat.github.io/social-media-client/');

    // Ensuring the register modal is not visible
    cy.get('#registerModal').then(($modal) => {
      if ($modal.is(':visible')) {
        // Close the modal
        cy.get('#registerModal').click('topRight');
      }
    });

    // The Login button is visible before clicking
    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').should(
      'be.visible',
    );

    // Click the login button to open the login modal
    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').eq(1).click();

    // Fill in valid credentials
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);

    // Click the login button in the form
    cy.get('#loginForm button').contains('Login').click();

    // Verifying that the logout button is visible after login
    cy.get('button').contains('Logout').should('be.visible');

    cy.wait(2000);

    // Click the logout button
    cy.get('button[data-auth="logout"]').click();

    // Verify that the user is logged out
    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').should(
      'be.visible',
    );
  });
});
