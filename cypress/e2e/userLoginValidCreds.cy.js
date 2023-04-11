describe("Noroff SoMe application: User login VALID credentials", () => {
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
    cy.get("input#loginPassword[type='password']").type(
      Cypress.env("user-password")
    );
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.url().should("include", "profile");
  });
});
