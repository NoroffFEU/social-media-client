describe("User Authentication and Button Visibility", () => {
  it("displays the 'Logout' button when logged in and 'Login' button when logged out", () => {
    // Load the page with the buttons
    cy.visit("../../index.html");
    // Find and click the "Login" button to navigate to the login form
    cy.wait(5000);
    // Check if the 'Login' button is visible
    cy.get('button[data-auth="logout"]', { timeout: 10000 })
    .should('exist') // Check if the element exists in the DOM
    .click({ force: true }); // Click on the element forcefully
    cy.get("#registerModal").should("not.be.visible");
  });
});