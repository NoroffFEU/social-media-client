describe('Logout', () => {
  beforeEach(() => {
    cy.visit('./');
    cy.clearLocalStorage();
  });

  it('Can log out user', () => {
    cy.get('#registerModalLabel')
      .should('have.text', 'Create Profile')
      .should('be.visible');
    cy.wait(1000);
    cy.get('#registerForm')
      .find('.btn-outline-success')
      .should('be.visible')
      .click({ force: true });
    cy.get('#loginModalLabel')
      .should('have.text', 'Login')
      .should('be.visible');
    cy.wait(1000);
    cy.get('#loginEmail').type('nastiksvastik10@stud.noroff.no');
    cy.get('#loginPassword').type('12345678');
    cy.wait(1000);
    cy.get('#loginForm .btn-success')
      .should('be.visible')
      .click({ force: true });
    cy.wait(1000);
    cy.get("button[data-auth='logout']")
      .should('be.visible')
      .click({ force: true });
    cy.then(() => {
      expect(window.localStorage.getItem('token')).to.be.null;
    });
  });
});
