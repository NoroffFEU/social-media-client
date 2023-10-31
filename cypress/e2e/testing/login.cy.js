describe("Login", () => {
  it("should login a user", () => {
    cy.visit("/");
    cy.wait(2000);
    // clicks the login button
    cy.get("#registerForm").within(() => {
      cy.contains("button", "Login").click();
    });
    cy.wait(2000);
    cy.get("#loginForm").within(() => {
      cy.get("input#loginEmail").type(Cypress.env("LOGIN_TEST_EMAIL"));
      cy.get("input#loginPassword").type(Cypress.env("LOGIN_TEST_PASSWORD"));
      cy.contains("button", "Login").click();
    });
  });
});
