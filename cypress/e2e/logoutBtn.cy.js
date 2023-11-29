describe("User Authentication and Button Visibility", () => {
  it("displays the 'Logout' button when logged in and 'Login' button when logged out", () => {
    // Load the page with the buttons
    cy.visit("../../index.html");

    // Find and click the "Login" button to navigate to the login form
    cy.contains("Login").click();

    // Fill out the login form
    cy.get("#loginEmail").type("cypressTest@noroff.no");
    cy.get("#loginPassword").type("cypresstest");

    // Submit the form
    cy.get("#loginBtn").click();

    // Wait for the login to complete and check if the user is redirected to the profile page
    cy.url().should("include", "profile");

    // Simulate logging out
    cy.get("#logoutBtn").click();

    // Check if the user is redirected to the home page
    cy.url().should("not.include", "profile");
  });
});
