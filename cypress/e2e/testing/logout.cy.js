describe("Logout form and delete token", () => {
  it("logout", () => {
    cy.visit("/");
    cy.wait(600);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(600);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("eoinoro@noroff.no");
    cy.get("#loginPassword").type("123456789");
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);

    cy.url().should("include", "view=profile");
    cy.wait(800);

    cy.get("button[data-auth=logout]")
      .should("be.visible")
      .click({ force: true });
    cy.then(() => {
      expect(window.localStorage.getItem("token")).to.be.null;
    });
  });
});
