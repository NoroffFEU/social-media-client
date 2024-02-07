describe("Logout", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // Returning false prevents Cypress from failing the test
      return false;
    });
    cy.visit("/");
    cy.wait(500);
  });
  it("logs out user when logout button is clicked", () => {
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);
    cy.get("#loginEmail").type("bibi@stud.noroff.no");
    cy.get("#loginPassword").type(`blabla123`);
    cy.get('button[type="submit"]').contains("Login").click();
    cy.wait(1000);
    cy.get('button[data-auth="logout"]')
      .contains("Logout")
      .should("be.visible")
      .click();
    cy.wait(600);
    cy.log("Logout ok!");
  });
});
