describe('Login functionality', () => {
  it('should allow a user to log in and access their profile', () => {
    cy.visit('index.html');

    // Close the register modal if it's open
    cy.get('body').then(($body) => {
      if ($body.find('#registerModal').hasClass('show')) {
        cy.get('#registerModal .btn-close').click();
      }
    });

    // Open the login modal
    cy.get('button[data-bs-target="#loginModal"]').first().click();

    // Fill in login details
    cy.get('#loginEmail').type('testuseruser@stud.noroff.no');
    cy.get('#loginPassword').type('testPassword123');

    // Submit the login form
    cy.get('#loginForm').submit();

    // Check if the logout button is visible as an indication of successful login
    cy.get('button[data-auth="logout"]').should('be.visible');
    // Check if token is set in localStorage
    cy.window().its('localStorage.token').should('exist');
  });

  it('should show an error message when login fails', () => {
    cy.visit('index.html');

    // Close the register modal if it's open
    // Replace with the actual selector and action to close the register modal
    cy.get('#registerModal').then(modal => {
      if (modal.is(':visible')) {
        cy.get('button[data-bs-dismiss="modal"]').click();
      }
    });

    // Open the login modal
    cy.get('button[data-auth="login"]').first().click();

    // Fill in wrong details
    cy.get('#loginEmail').type('wronguser@stud.noroff.no');
    cy.get('#loginPassword').type('wrongPassword123');

    // Submit the form
    cy.get('#loginForm button[type="submit"]').click();

    // Check for error message
    cy.get('.alert, .error').should('be.visible');
  });

  it('should allow a user to log out', () => {
    // Assume the user is already logged in
    cy.visit('index.html');

    // You may need to log in the user first or set the application state to logged in

    // Click on logout button
    // Use force: true if necessary, but better to ensure the button is visible
    cy.get('button[data-auth="logout"]').click({ force: true });

    // Check if the login button is visible as an indication of successful logout
    cy.get('button[data-auth="login"]').should('be.visible');

    // Check if token is cleared from localStorage
    cy.window().its('localStorage.token').should('not.exist');
  });
});
