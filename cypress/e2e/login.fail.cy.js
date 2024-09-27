describe("Login Fail", () => {
  it("should show error message", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("[data-auth=login]").click({ multiple: true, force: true });
    cy.wait(1000);
    cy.get("#loginModal").should("be.visible");
    cy.get("#loginEmail").type("sayed123456@stud.noroff.no");
    cy.get("#loginPassword").type("12345678");
    cy.get("button[type=submit]").contains("Login").click();

    cy.on("window:alert", (message) => {
      expect(message).to.equal("username or password incorrect");
    });
  });
});
