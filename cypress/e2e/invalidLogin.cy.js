describe("Authentication fails", () => {
  it("fails authentication", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get(`#registerForm [data-auth="login"]`)
      .contains("Login")
      .should("exist")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail").type("marius@outlook.com");
    cy.get("input#loginPassword").type("testPass");
    cy.get("#loginForm button").contains("Login").should("be.visible").click();

    const alertHandler = cy.stub().as("alertHandler");
    cy.on("window:alert", alertHandler);
    cy.wrap(alertHandler).should("exist");
  });
});
