const email = 'cbtest3@noroff.no';
const validPassword = 'abcd1234';
const invalidPassword = 'abcd123';
const url = 'https://chrisbekk.github.io/social-media-client/';

describe('Log in and log out functionality', () => {
  it('can log in and visit profile page', () => {
    cy.visit(url), { delay: 1000 };
    cy.get('#login-button').click();
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${validPassword}{enter}`);
    cy.get('#logout-button').click();
  });
});
