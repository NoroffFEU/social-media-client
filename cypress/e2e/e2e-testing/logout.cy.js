describe('Logout test', () => {
    beforeEach(() => {
      cy.visit('./');
      cy.clearLocalStorage();
    });
  
    it('can logout', () => {
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
      const email = 'maria@example.no';
      cy.wait(1000);
      const password = 'SecurePassword123!';
      cy.get('#loginEmail').type(`${email}`);
      cy.get('#loginPassword').type(`${password}`);
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
  