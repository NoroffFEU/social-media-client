describe("Login Form - Invalid Credentials", () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  it("should show an error message when logging in with invalid credentials", () => {
    // Intercept the login request with a 401 status code for invalid credentials
    cy.intercept("POST", "**/auth/login", {
      statusCode: 401,
      body: {
        message:
          "Either your username was not found or your password is incorrect",
      },
    }).as("loginRequest");

    // Open the login modal
    cy.get('button[data-bs-target="#loginModal"]').first().click();

    // Fill in the login form with invalid credentials
    cy.get("#loginEmail").type("invalid@stud.noroff.no");
    cy.get("#loginPassword").type("invalidpassword");

    // Submit the login form
    cy.get("#loginForm").submit();

    // Wait for the login request to complete
    cy.wait("@loginRequest");

    // Check for the error message
    cy.get("#loginModal").should(
      "contain",
      "Either your username was not found or your password is incorrect",
    );
  });
});
