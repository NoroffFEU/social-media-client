describe("User Authentication and Button Visibility", () => {
  it("displays the 'Logout' button when logged in and 'Login' button when logged out", () => {
    // Load the page with the buttons
    cy.visit("../../index.html");

    // Check if the user is logged in before attempting to log out
    cy.get('button[data-auth="logout"]')
      .should('exist') // Check if the 'Logout' button exists in the DOM
      .then((logoutButton) => {
        if (logoutButton.is(':visible')) {
          // User is logged in, proceed with logout
          logoutButton.click({ force: true }); // Click on the 'Logout' button forcefully
          // Check if the modal is not visible after logout
          cy.get("#registerModal").should("not.be.visible");
          // Check for a logout success message
          cy.get('.logout-message')
            .should('exist') // Check if the logout message element exists
            .should('be.visible') // Check if the logout message is visible
            .contains('Logout successful'); // Check if the text contains 'Logout successful'
        } else {
          // User is not logged in, handle accordingly (e.g., log in)
          cy.get('button[data-auth="login"]').should('exist').first().click({ force: true }); // Click the first 'Login' button forcefully
          // Add further steps to log in if needed
        }
          // Pause execution to inspect the state
          cy.debug();
      });
  });
});
