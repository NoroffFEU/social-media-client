/* eslint-disable no-undef */
describe('Logout Functionality', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');

    cy.get('#loginEmail').type('validUser@noroff.no', { force: true });
    cy.get('#loginPassword').type('validPassword', { force: true });
    cy.get('#loginForm').submit({ force: true });
    cy.url().should(
      'include',
      'https://norofffeu.github.io/social-media-client/'
    );
  });

  it('should log out successfully when the logout button is clicked', () => {
    cy.get('button[data-auth="logout"]').click({ force: true });
    cy.url().should('eq', 'https://norofffeu.github.io/social-media-client/');
    cy.get('.logout-message').should('contain', 'You have been logged out'); // Adjust according to your app
  });
});
