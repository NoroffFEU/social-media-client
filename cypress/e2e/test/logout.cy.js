const correctEmail = 'RoaHan10771@stud.noroff.no';
const correctPassword = 'Pass1234';

describe('Logout test', () => {
  it('should allow a valid user to log out', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('#registerModal').contains('Login').click(); // Fix typo: contains
    cy.wait(500);
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(correctEmail);
    cy.get('#loginPassword').type(correctPassword);
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(2000);

    // check storage for token
    cy.window().then((window) => {
      const token =
        window.localStorage.getItem('token') ||
        window.sessionStorage.getItem('token');
      expect(token).to.be.a('string');
      cy.wait(2000);
      cy.get('button[data-auth=logout]').contains('Logout').click(); // Fix typo: contains
      cy.wait(500);

      // check storage for token deletion
      cy.window().then((window) => {
        const tokenAfterLogout =
          window.localStorage.getItem('token') ||
          window.sessionStorage.getItem('token');
        expect(tokenAfterLogout).to.be.null; // Fix: to.be.null
      });
    });
  }); // Fix: Missing parenthesis
});
