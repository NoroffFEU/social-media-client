const url = 'https://chrisbekk.github.io/social-media-client/';
const email = 'cbtest3@noroff.no';
const validPassword = 'abcd1234';

describe('noroff logout', () => {
  it('can log out from application', () => {
    cy.visit(url);
    cy.wait(2000);
    cy.get('#login-button').click();
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${validPassword}{enter}`);
    cy.get('button[type="submit"].btn.btn-success').contains('Login').click();
    cy.wait(2000);
    cy.get('button[type="button"].btn.btn-outline-warning.me-2')
      .contains('Logout')
      .click();
    cy.wait(2000);
    cy.window().then((win) => {
      const tokenAfterLogout = win.localStorage.getItem('token');
      expect(tokenAfterLogout).to.be.null;
    });
  });
});
