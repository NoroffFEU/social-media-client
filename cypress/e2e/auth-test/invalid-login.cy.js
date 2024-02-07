describe("Login Test with invalid credentials", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // Returning false prevents Cypress from failing the test
      return false;
    });
    cy.visit("/");
    cy.wait(500);
  });
  it("does not log in if incorrect credentials are provided", () => {
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);
    cy.get("#loginEmail").type("error@test.no");
    cy.get("#loginPassword").type(`errortest`);
    cy.get('button[type="submit"]').contains("Login").click();
    cy.wait(1000);
    cy.log("Error occurred! Invalid credentials.");
  });
});
