describe('Social Media logout', () => {
  beforeEach(() => {
    cy.visit('./');
  });

  it('can logout the user', () => {
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .wait(1000)
      .click();
    cy.wait(1000);
    const email = 'enirose@noroff.no';
    cy.get('input#loginEmail[name="email"]').type(`${email}`);
    const password = 'enirose123';
    cy.get('input#loginPassword[name="password"]').type(`${password}`);
    cy.get('button[type="submit"]').contains('Login').click({ force: true });
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
    cy.wait(3000);
    cy.get('button').contains('Logout').click();
  });
});
