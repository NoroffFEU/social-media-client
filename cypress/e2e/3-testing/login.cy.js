describe("login", () => {
  it("logs in, visits profile page and logs out", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".modal-footer [data-auth=login]").click();
    cy.wait(1500);
    cy.get("#loginEmail").type("toreid21750@stud.noroff.no");
    cy.get("#loginPassword").type("Password1");
    cy.get("#loginForm .btn-success").click();
    cy.wait(1500);
    cy.contains("Tora").should("be.visible");
    cy.contains("button", "Logout").click();
    cy.wait(1500);
    cy.getAllLocalStorage().then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
