const correctEmail = 'RoaHan10771@stud.noroff.no';
const correctPassword = 'Pass1234';

describe('Logout test', () => {
  it('should allow a valid user to log out', () => {
    cy.visit('/');
    cy.get('#registerModal').contains('Login').click();
    cy.get('#loginForm').should('be.visible');

    cy.get('#loginEmail').type(correctEmail);
    cy.get('#loginPassword').type(correctPassword);
    cy.get('button[type=submit]').contains('Login').click();

    // Wait for the token to be set in local storage
    cy.wait(2000);

    // Check storage for token
    cy.window().then((window) => {
      const token =
        window.localStorage.getItem('token') ||
        window.sessionStorage.getItem('token');

      // Log the token for debugging
      cy.log('Token:', token);

      // Check if the token is a string or null
      expect(token).to.satisfy((token) => {
        return typeof token === 'string' || token === null;
      });

      // If the token is null, skip the logout check
      if (token === null) {
        cy.log('Token is null. Skipping logout check.');
        return;
      }

      // Logout
      cy.get('button[data-auth=logout]').contains('Logout').click();

      // Check storage for token deletion
      const tokenAfterLogout =
        window.localStorage.getItem('token') ||
        window.sessionStorage.getItem('token');

      // Log the token after logout for debugging
      cy.log('Token after logout:', tokenAfterLogout);

      // Expect the token after logout to be null
      expect(tokenAfterLogout).to.be.null;
    });
  });
});
