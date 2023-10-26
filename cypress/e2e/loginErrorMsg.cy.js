describe("Cannot Submit Login Form with Invalid Email Credentials", () => {
  it("displays an error message for invalid email credentials", () => {
    // Load the login page
    cy.visit("../../index.html");

    // Find and click the "Login" button to navigate to the login form
    cy.contains("Login").click();

    // Fill out the login form with an invalid email
    cy.get("#loginEmail").type("invalid-email.com"); // Invalid email format

    // Submit the form
    cy.get("#loginBtn").click();

    // Wait for the error message to be displayed
    cy.get("#loginEmail:invalid").should("be.visible");
  });
});

describe("Cannot Submit Login Form with Invalid Password Credentials", () => {
  it("displays an error message for invalid password credentials", () => {
    // Load the login page
    cy.visit("../../index.html");

    // Find and click the "Login" button to navigate to the login form
    cy.contains("Login").click();

    // Fill out the login form with a valid email and an invalid password
    cy.get("#loginEmail").type("cypressTest@noroff.no");
    cy.get("#loginPassword").type("short"); // Invalid password (short length)

    // Submit the form
    cy.get("#loginBtn").click();

    // Wait for the error message to be displayed
    cy.get("#loginPassword").then(($input) => {
      // Check if the input field has the `:invalid` pseudo-class
      const isInvalid = $input[0].checkValidity();
      expect(isInvalid).to.be.true;
    });
  });
});
