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
      cy.get("input#loginEmail").type("invalid@invalid.inv");
      cy.get("input#loginPassword").type("asdasdasd");
      cy.contains("button", "Login").click();
    });
  });
});
