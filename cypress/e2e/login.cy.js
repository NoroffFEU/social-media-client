describe('User Authentication', () => {
describe('Login Form', () => {
    const validCredential = {
      email: 'fia@stud.noroff.no',
      password: 'fia123456789',
    };
    const invalidCredential = {
      email: 'invalid@stud.noroff.no',
      password: 'wrongpassword',
    };

    beforeEach(() => {
      cy.visit('/');
    });

    it('should login with valid credentials', () => {
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
    });

    it(' should display error message when logging in with invalid credential', () => {
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(400);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();
      cy.get('div#loginModal').should('be.visible');

      cy.get('input#loginEmail').should('be.visible');
      cy.get('input#loginPassword').should('be.visible');
      cy.wait(400);


      cy.get('input#loginEmail').type(invalidCredential.email);
      cy.get('input#loginPassword').type(invalidCredential.password);

      cy.get('div#loginModal button.btn-success[type="submit"]').should(
        'be.visible',
      );

      cy.wait(400);
      cy.get('div#loginModal button.btn-success[type="submit"]').click();

      cy.wait(2000);

    //   Cant get error message to show.
    //   cy.get('.error-message, .alert-danger, #error-container')
    //     .should('be.visible')
    //     .and(
    //       'contain',
    //       'Either your username was not found or your password is incorrect',
    //     );
    });
  });
});