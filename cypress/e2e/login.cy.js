describe("Login to your profile", () => {
  it("should log in to your profile ", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("[data-auth=login]").click({ multiple: true, force: true });
    cy.wait(1000);
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type("sayed12345@stud.noroff.no");
    cy.get("#loginPassword").type("12345678");
    cy.get("button[type=submit]").contains("Login").click();

    cy.wait(1000);
    cy.window().then((window) => {
      const token = window.localStorage.getItem("token");
      expect(token).to.exist;
    });
  });
});
