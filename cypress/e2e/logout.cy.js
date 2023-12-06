describe("Logout", () => {
  it("use the Logout button to log out", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("[data-auth=login]").click({ multiple: true, force: true });
    cy.wait(1000);
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type("sayed123456@stud.noroff.no");
    cy.get("#loginPassword").type("12345678");
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(5000);
    cy.get("[data-auth=logout]").contains("Logout").click();

    cy.wait(1000);
    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");
      expect(token).to.not.exist;
    });
  });
});
