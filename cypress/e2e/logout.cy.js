describe('Logout test', () => {
    const validCredential = {
      email: 'fia@stud.noroff.no',
      password: 'fia123456789',
    };

    beforeEach(() => {
      cy.visit('/');
    })

    it('should logout successfully', () => {
    cy.get(
        'form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(400);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();

      cy.get('div#loginModal').should('be.visible');
      cy.get('input#loginEmail').should('be.visible');
      cy.get('input#loginPassword').should('be.visible');
      cy.wait(400);


      cy.get('input#loginEmail').type(validCredential.email);
      cy.get('input#loginPassword').type(validCredential.password);

      cy.get('div#loginModal button.btn-success[type="submit"]').click();

      cy.wait(1000);
      
      cy.window().then((win) => {
        const token = win.localStorage.getItem('token');
        expect(token).to.exist;
        expect(token).to.not.be.empty;
      });

    cy.get('[data-auth="logout"]').should('be.visible');
    cy.get('[data-auth="logout"]').click();

    cy.wait(500);
    cy.window().then((win) => {
      const token = win.localStorage.getItem('token');
      expect(token).to.be.null;
    });
})
});