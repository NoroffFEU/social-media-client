describe("Login with Valid Credentials", () => {
  it("logs in successfully with valid credentials", () => {
    // Load the page with the user registration form
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
  });
});
