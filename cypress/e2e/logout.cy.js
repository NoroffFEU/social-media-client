describe("User logout", () => {
  it("logs out when the 'Logout' button is clicked", () => {
    // Load the page with the buttons
    cy.visit("../../index.html");

    // Check if the user is logged in before attempting to log out
    cy.get('button[data-auth="logout"]')
      .should('exist') // Check if the 'Logout' button exists in the DOM
      .then((logoutButton) => {
        if (logoutButton.is(':visible')) {
          // User is logged in, proceed with logout
          logoutButton.click({ force: true });
        } else {
          // User is not logged in, handle accordingly (e.g., log in)
          cy.get('button[data-auth="login"]').should('exist').first().click({ force: true });
          // Add further steps to log in if needed
        }
      });
  });
});
