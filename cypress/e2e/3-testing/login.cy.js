describe("login", () => {
  it("logs in, visits profile page and logs out", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get(".modal-footer [data-auth=login]").click();
    cy.wait(500);
    cy.intercept("/?view=profile&name=Tora").as("loggedIn");
    cy.get("#loginEmail").type(Cypress.env("TEST_USER_EMAIL"));
    cy.get("#loginPassword").type(Cypress.env("TEST_USER_PASSWORD"));
    cy.get("#loginForm .btn-success").click();
    cy.wait("@loggedIn");
    cy.contains("Tora").should("be.visible");
    cy.contains("button", "Logout").click();
    cy.then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
