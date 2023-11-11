describe('Login functionality', () => {
  it('should allow a user to log in and access their profile', () => {
    // Navigate to login
    cy.visit('index.html');

    // Fill in details, ensuring we target the input within the login form
    cy.get('#loginForm input[name=email]').type('testuser@stud.noroff.no');
    cy.get('#loginForm input[name=password]').type('testPassword123');

    // Submit the form
    cy.get('#loginForm button[type="submit"]').click();

    // Check if the logout button is visible as an indication of successful login
    cy.get('button[data-auth="logout"]').should('be.visible');
  });

  it('should show an error message when login fails', () => {
    // Navigate to login
    cy.visit('index.html');

    // Fill in wrong details, ensuring we target the input within the login form
    cy.get('#loginForm input[name=email]').type('wronguser@stud.noroff.no');
    cy.get('#loginForm input[name=password]').type('wrongPassword123');

    // Submit the form
    cy.get('#loginForm button[type="submit"]').click();

    // Replace '.error-message' with the actual selector for error messages in your application
    // Check for error message
    cy.get('.alert, .error').should('be.visible');
  });
  it('should allow a user to log out', () => {
    // Assume the user is already logged in
    cy.visit('index.html');

    // Click on logout button
    cy.get('button[data-auth="logout"]').click();

    // Check if the login button is visible as an indication of successful logout
    cy.get('button[data-auth="login"]').should('be.visible');
  });
});
