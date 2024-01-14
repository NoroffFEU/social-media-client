describe("Login Failure", () => {
  before(() => {
    cy.visit("https://piasun.github.io/social-media-client/");
    cy.wait(2000);
    cy.get("#registerForm button.btn.btn-outline-success")
      .contains("Login")
      .click();
  });

  it("should display an error message for invalid login credentials", () => {
    const invalidEmail = "invalid@noroff.no";
    const invalidPassword = "invalidPassword";

    cy.get("input#loginEmail").type(invalidEmail, { force: true });
    cy.get("input#loginPassword").type(invalidPassword, { force: true });

    cy.get("#loginForm button").contains("Login").should("be.visible").click();

    // Asserting the displayed error message
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.contains(
        "Your provided username was not located, or the password you entered is incorrect",
      );
    });
  });
});
