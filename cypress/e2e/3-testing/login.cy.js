describe('Login functionality', () => {
  it('User cannot submit login form with invalid credentials', () => {
    cy.visit('/');
    cy.get('#loginForm input[name="email"]').type('invalidemail@example.com');
    cy.get('#loginForm input[name="password"]').type('invalidpassword');
    cy.get('#loginForm button[type="submit"]').click();
    // cy.wait(5000);
    // cy.contains('Invalid credentials. Please try again.').should('be.visible');

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contains('Invalid credentials. Please try again.');
    });
  });
});
