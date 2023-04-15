describe("Logout user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail").type(Cypress.env("email"));
    cy.get("input#loginPassword").type(Cypress.env("password"));
    cy.wait(500);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
  });

  it("logs out user", () => {
    cy.wait(2000);
    cy.get("button").contains("Logout").should("be.visible").click();
  });
});
