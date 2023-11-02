describe("Login fail", () => {
  it("should show a alert if login fails", () => {
    cy.visit("/");
    cy.wait(2000);
    // clicks the login button
    cy.get("#registerForm").within(() => {
      cy.contains("button", "Login").click();
    });
    cy.wait(2000);
    // fill out the form
    cy.get("#loginForm").within(() => {
      cy.get("input#loginEmail").type("invalid@noroff.no");
      cy.get("input#loginPassword").type("123132123");
      cy.contains("button", "Login").click();
    });
    cy.wait(2000);
    // assert that a alert is shown
    cy.on("window:alert", (str) => {
      expect(str).equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
