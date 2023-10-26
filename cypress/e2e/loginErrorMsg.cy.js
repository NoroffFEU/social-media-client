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
    cy.get("form").submit();

    // Wait for the error message to be displayed
    cy.get(".error-message").should("be.visible");
  });
});
