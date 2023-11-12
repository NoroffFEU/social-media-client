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

    // Check storage for token
    cy.window().then((window) => {
      const token =
        window.localStorage.getItem('token') ||
        window.sessionStorage.getItem('token');
      expect(token).to.be.a('string');
    });

    // Logout
    cy.get('button[data-auth=logout]').contains('Logout').click();

    // Check storage for token deletion
    cy.window().then((window) => {
      const tokenAfterLogout =
        window.localStorage.getItem('token') ||
        window.sessionStorage.getItem('token');
      expect(tokenAfterLogout).to.be.null;
    });
  });
});
