describe('Logout functionality', () => {
  cy.window().then(window => {
    const token = window.localStorage.getItem('token');
    expect(token).to.exist;
  });

  it('should log the user out when the logout button is clicked', () => {
    // Simulate the user clicking the logout button
    cy.get('button#logout').click(); // assuming your logout button has an ID of 'logout'

    // token is removed from localStorage after logout
    cy.window().then(window => {
      const token = window.localStorage.getItem('token');
      expect(token).to.be.null; // Token should be removed after logout
    });

    // redirect to the login page or home page after logging out
    cy.url().should('include', '/');
  });
});
