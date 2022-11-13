describe('Logout test', () => {
  const wait = 2500;
  beforeEach(() => {
    cy.visit('./');
    cy.clearLocalStorage();
  });

  it('should log out', () => {
    cy.get('#registerModalLabel')
      .should('have.text', 'Create Profile')
      .should('be.visible');
    cy.wait(wait);
    cy.get('#registerForm')
      .find('.btn-outline-success')
      .should('be.visible')
      .click();
    cy.get('#loginModalLabel')
      .should('have.text', 'Login')
      .should('be.visible');
    const email = 'gonzalo02@stud.noroff.no';
    cy.wait(wait);
    const password = 'Gonzalo123';
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${password}`);
    cy.wait(wait);
    cy.get('#loginForm .btn-success').should('be.visible').click();
    cy.wait(wait);
    cy.get("button[data-auth='logout']").should('be.visible').click();
    cy.then(() => {
      expect(window.localStorage.getItem('token')).to.be.null;
    });
  });
});
