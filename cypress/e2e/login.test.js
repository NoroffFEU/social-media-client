describe("Login Test", () => {
  beforeEach(() => {
    // Visit the local server before each test
    cy.visit("http://127.0.0.1:5500/");
  });

  it("should login successfully", () => {
    // Close the register modal if it's open
    cy.get("#registerModal").then(($modal) => {
      if ($modal.is(":visible")) {
        cy.get("#registerModal .btn-close").click(); // Close the modal
      }
    });

    // Ensure the login button is visible and click it
    cy.get("[data-auth='login']").should("be.visible").first().click(); // Click the login button

    // Ensure the login modal is visible
    cy.get("#loginModal").should("be.visible");

    // Fill in the login form
    cy.get('input[name="email"]')
      .should("have.length", 1)
      .first()
      .type("user@example.com"); // Type the email
    cy.get('input[name="password"]')
      .should("have.length", 1)
      .first()
      .type("validPassword"); // Type the password

    // Submit the form
    cy.get("form#loginForm").submit(); // Submit the form
  });

  it("should fail to login with wrong password", () => {
    // Close the register modal if it's open
    cy.get("#registerModal").then(($modal) => {
      if ($modal.is(":visible")) {
        cy.get("#registerModal .btn-close").click(); // Close the modal
      }
    });

    // Click the login button
    cy.get("[data-auth='login']").should("be.visible").first().click(); // Click the login button

    // Fill in the login form with incorrect credentials
    cy.get('input[name="email"]')
      .should("have.length", 1)
      .first()
      .type("user@example.com");
    cy.get('input[name="password"]')
      .should("have.length", 1)
      .first()
      .type("wrongPassword");

    // Submit the form
    cy.get("form#loginForm").submit(); // Submit the form

    // Assert for alert message
    cy.on("window:alert", (text) => {
      expect(text).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
