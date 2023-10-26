describe("Cannot Submit Login Form with Invalid Credentials", () => {
  it("displays an error message for invalid credentials", () => {
    // Load the login page
    cy.visit("../../index.html");

    // Find and click the "Login" button to navigate to the login form
    cy.contains("Login").click();

    // Fill out the login form with invalid credentials
    cy.get("#loginEmail").type("invalid@email.com");
    cy.get("#loginPassword").type("invalid");

    // Submit the form
    cy.get("#loginBtn").click();

    // Wait for the error message to be displayed
    cy.get("#loginEmail:invalid").should("be.visible");
    cy.get("#loginPassword:invalid").should("be.visible");
  });
});
