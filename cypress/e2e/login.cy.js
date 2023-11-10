const correctEmail = "fireworks@noroff.no";
const correctPassword = "fireworks";

describe("Authenticates and logs in", () => {
  it("Pass authentication", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get(`#registerForm [data-auth="login"]`)
      .contains("Login")
      .should("exist")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail").type(correctEmail);
    cy.get("input#loginPassword").type(correctPassword);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
  });
});