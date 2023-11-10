describe('Login Form Validation', () => {
  it('displays an error message for invalid credentials', () => {
    cy.visit('/login');

    const emailInput = cy.get('input[name="email"]');
    const passwordInput = cy.get('input[name="password"]');
    const submitButton = cy.get('button[type="submit"]');

    emailInput.type('invalid@example.com');
    passwordInput.type('wrongpassword');

    // Submit the form
    submitButton.click();

    // Assert error message
    cy.contains('Invalid credentials. Please try again.').should('be.visible');
  });
});