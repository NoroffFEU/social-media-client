describe("Can log out of page", () => {
  it("logs out of page", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("button[data-auth='login']:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("form input[id='loginEmail']").type("testingtiesto@noroff.no", {
      force: true,
    });
    cy.get("form input[id='loginPassword']").type("asdf1234", {
      force: true,
    });
    cy.get("button[type='submit']").contains("Login").click({ force: true });
    cy.get("button[data-auth='logout']:visible").contains("Logout").click();
    cy.wait(2000).then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
