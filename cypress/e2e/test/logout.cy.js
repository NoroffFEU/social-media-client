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

    // Wait for the token to be set in the local storage
    cy.getCookie('token', { timeout: 10000 }).should('exist');

    // Logout
    cy.get('button[data-auth=logout]').contains('Logout').click();

    // Check storage for token deletion
    cy.getCookie('token', { timeout: 10000 }).should(
      'have.property',
      'value',
      null,
    );
  });
});
