const email = 'cbtest3@noroff.no';
const validPassword = 'abcd1234';
const invalidPassword = 'abcd123';
const url = 'https://chrisbekk.github.io/social-media-client/';

describe('Log in functionality', () => {
  it('can log in and visit profile page', () => {
    cy.visit(url), { delay: 1000 };

    cy.get('#login-button').click();
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${validPassword}{enter}`);
    cy.get('button[type="submit"].btn.btn-success').contains('Login');
    cy.wait(2000);
    cy.window().then((win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.not.be.null;
    });
    cy.url().should('include', '?view=profile');
  });
  it('cannot log in with incorrect password', () => {
    cy.visit(url), { delay: 1000 };
    cy.get('#login-button').click();
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${invalidPassword}{enter}`);

    cy.url().should('not.include', '?view=profile');
    cy.wait(2000);
    cy.window().then((win) => {
      const tokenAfterLogout = win.localStorage.getItem('token');
      expect(tokenAfterLogout).to.be.null;
    });
  });
});
