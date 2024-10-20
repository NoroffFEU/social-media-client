describe("Logout Test", () => {
  beforeEach(() => {
    // Visit the application
    cy.visit("http://127.0.0.1:5500/");
  });

  it("should logout successfully", () => {
    // Ensure the register modal is visible
    cy.get("#registerModal").should("be.visible");

    // Close the register modal if it's open
    cy.get("#registerModal .btn-close").click(); // Close the modal
    cy.get("#registerModal").should("not.be.visible"); // Ensure the modal is closed

    // Open the login modal
    cy.get("[data-auth='login']").first().click(); // Open login modal

    // Ensure the login modal is visible
    cy.get("#loginModal").should("be.visible"); // Ensure login modal is visible

    // Fill in the login form with the correct credentials
    cy.get('input[name="email"]').first().type("user@example.com"); // Ensure this email is valid
    cy.get('input[name="password"]').first().type("string"); // Ensure this password is valid
    cy.get("form#loginForm").submit(); // Submit the form

    // Wait for the logout button to become visible
    cy.get("[data-auth='logout']")
      .should("be.visible")
      .then(($btn) => {
        console.log("Logout button is visible:", $btn.is(":visible"));
      });

    // Optional: Debugging point
    // cy.debug();

    // Log out
    cy.get("[data-auth='logout']").click(); // Click logout button

    // Assert that the user is logged out and the register modal is visible again
    cy.get("#registerModal").should("be.visible"); // Ensure register modal is visible again
  });
});
