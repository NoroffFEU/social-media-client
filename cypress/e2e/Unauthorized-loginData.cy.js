describe('Social Media User Unauthorized', () => {
  beforeEach(() => {
    cy.visit('./');
  });

  it('cannot login or Unauthenticated user data', () => {
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .wait(1000)
      .click();
    cy.wait(1000);
    const email = 'email@gmail.no';
    cy.get('input#loginEmail[name="email"]').type(`${email}`);
    const password = 'pass123456';
    cy.get('input#loginPassword[name="password"]').type(`${password}`);
    cy.get('button[type="submit"]').contains('Login').click({ force: true });
    cy.wait(1000);
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});
