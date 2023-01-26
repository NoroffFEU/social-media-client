describe('Social Media login', () => {
  beforeEach(() => {
    cy.visit('./');
  });

  it('can log in or user Authenticated', () => {
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
    cy.wait(2000);
    cy.get('button[type="submit"]').contains('Login').click({ force: true });
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
    cy.wait(1000);
  });
});
