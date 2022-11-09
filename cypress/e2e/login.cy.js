describe('Social Media App: Login and Logout', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerModal button[type=reset]').click();
    cy.get('header button[data-auth=login]').click();
    cy.wait(1000);
    cy.get("#loginModal input[type='email']")
      .should('be.visible')
      .type(`ImBenni@noroff.no`);
    cy.wait(1000);
    cy.get("#loginModal input[type='password']")
      .should('exist')
      .type(`BenniBlanco{enter}`);
    cy.wait(1000);
  });

  it('CAN login', () => {
    cy.url().should('include', 'profile');
    cy.url().should('not.include', 'login');
    expect(localStorage.getItem('token')).to.not.be.null;
  });

  it('CAN logout', () => {
    cy.get('header button[data-auth=logout]')
      .click({ force: true })
      .should(() => {
        expect(localStorage.getItem('token')).to.be.null;
      });
  });
});
