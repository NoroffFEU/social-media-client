describe("Noroff SoMe application: User login INVALID credentials", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
  });

  it("can login", () => {
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail[type='email']").type(Cypress.env("user-email"));
    cy.get("input#loginPassword[type='password']").type(`wrongPassword123`);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.on("window:alert", (Text) => {
      expect(Text).to.eq(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
