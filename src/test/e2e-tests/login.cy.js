describe('User Login Functionality', () => {
  it('should log in successfully', () => {
    cy.visit('/login');

    // Fill out the login form
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify redirection and profile access
    cy.url().should('include', '/profile');
    cy.get('.profile-header').should('be.visible');
  });
});