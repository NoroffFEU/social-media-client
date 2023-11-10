describe('User Logout', () => {
  it('logs the user out when clicking the logout button', () => {
    cy.visit('/');

    // Select the logout button
    const logoutButton = cy.get('button[data-testid="logout-button"]');

    // Trigger the logout
    logoutButton.click();

    cy.url().should('include', '/login');
  });
});