describe("Authenticates and logs in", () => {
  it("Pass authentication", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get(`#registerForm [data-auth="login"]`)
      .contains("Login")
      .should("exist")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail").type("marius@stud.noroff.no");
    cy.get("input#loginPassword").type("testPass");
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
  });
});
