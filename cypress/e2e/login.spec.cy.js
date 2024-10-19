describe('User Authentication', () => {
  describe('Login Form', () => {
    const eventDuration = 500;
    const asyncDuration = 2000;
    const typeDuration = 100;
    const validCredential = {
      username: 'natnoppol10000@stud.noroff.no',
      password: '123456789',
    };
    const invalidCredential = {
      username: 'invalid@example.com',
      password: 'wrongpassword',
    };

    beforeEach(() => {
      cy.visit('http://localhost:8080/');
    });

    it('displays the register modal on initial load', () => {
      cy.get('div#registerModal', { timeout: eventDuration }).should(
        'be.visible',
      );
    });

    it('navigates to the login modal', () => {
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(eventDuration);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();
      cy.get('div#loginModal', { timeout: eventDuration }).should('be.visible');
    });

    it('allows entering login credentials', () => {
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(eventDuration);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();
      cy.get('div#loginModal', { timeout: eventDuration }).should('be.visible');

      cy.get('input#loginEmail').should('be.visible');
      cy.wait(eventDuration);
      cy.get('input#loginEmail').type('natnoppol10000@stud.noroff.no', {
        delay: typeDuration,
      });
      cy.get('input#loginPassword').should('be.visible');
      cy.get('input#loginPassword').type('e1ghtsb1nary', {
        delay: typeDuration,
      });
    });

    it('submits the login form', () => {
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(eventDuration);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();
      cy.get('div#loginModal', { timeout: eventDuration }).should('be.visible');

      cy.get('input#loginEmail').should('be.visible');
      cy.get('input#loginEmail').type(validCredential.username, {
        delay: typeDuration,
      });
      cy.get('input#loginPassword').should('be.visible');
      cy.wait(eventDuration);
      cy.get('input#loginPassword').type(validCredential.password, {
        delay: typeDuration,
      });

      cy.get('div#loginModal button.btn-success[type="submit"]').should(
        'be.visible',
      );
      cy.wait(eventDuration);
      cy.get('div#loginModal button.btn-success[type="submit"]').should(
        'be.visible',
      );
      cy.wait(eventDuration);
      cy.get('div#loginModal button.btn-success[type="submit"]').click();

      // Wait for potential loading indicator to disappear
      cy.get('.loading-indicator', { timeout: eventDuration }).should(
        'not.exist',
      );
    });

    it('verifies successful login by checking localStorage', () => {
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(eventDuration);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();
      cy.get('div#loginModal', { timeout: eventDuration }).should('be.visible');

      cy.get('input#loginEmail').should('be.visible');
      cy.wait(eventDuration);
      cy.get('input#loginEmail').type(validCredential.username, {
        delay: typeDuration,
      });
      cy.get('input#loginPassword').should('be.visible');
      cy.get('input#loginPassword').type(validCredential.password, {
        delay: typeDuration,
      });

      cy.get('div#loginModal button.btn-success[type="submit"]').should(
        'be.visible',
      );
      cy.wait(eventDuration);
      cy.get('div#loginModal button.btn-success[type="submit"]').click();

      // Wait for potential loading indicator to disappear
      cy.get('.loading-indicator', { timeout: eventDuration }).should(
        'not.exist',
      );

      // Add a wait for any potential asynchronous operations
      cy.wait(asyncDuration);

      cy.window().then((win) => {
        const token = win.localStorage.getItem('token');
        expect(token).to.exist;
        expect(token).to.not.be.empty;
      });
    });

    it('display error message when login with invalid credential', () => {
      // Intercept the login API call
      // cy.intercept('POST', '**/auth/login', (req) => {
      //   // Simulate a failed login response
      //   req.reply({
      //     statusCode: 401,
      //     body: {
      //       message:
      //         'Either your username was not found or your password is incorrect',
      //     },
      //   });
      // }).as('loginRequest');

      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).should('be.visible');
      cy.wait(eventDuration);
      cy.get(
        'div.modal-dialog form#registerForm div.modal-footer button.btn-outline-success[data-auth="login"]',
      ).click();
      cy.get('div#loginModal', { timeout: eventDuration }).should('be.visible');

      cy.get('input#loginEmail').should('be.visible');
      cy.wait(eventDuration);
      cy.get('input#loginEmail').type(invalidCredential.username, {
        delay: typeDuration,
      });
      cy.get('input#loginPassword').should('be.visible');
      cy.get('input#loginPassword').type(invalidCredential.password, {
        delay: typeDuration,
      });

      cy.get('div#loginModal button.btn-success[type="submit"]').should(
        'be.visible',
      );
      cy.wait(eventDuration);
      cy.get('div#loginModal button.btn-success[type="submit"]').click();

      // Wait for the login API request to complete
      // cy.wait('@loginRequest');

      // Add a wait for any potential asynchronous operations
      cy.wait(asyncDuration);

      // Check for the error message
      // Adjust the selector based on how your application displays error messages
      cy.get('.error-message, .alert-danger, #error-container')
        .should('be.visible')
        .and(
          'contain',
          'Either your username was not found or your password is incorrect',
        );

      // Ensure we're still on the login page (URL hasn't changed)
      cy.url().should('eq', 'http://localhost:8080/');

      // Optionally, check that the login modal is still visible
      cy.get('div#loginModal').should('be.visible');
    });
  });
});
