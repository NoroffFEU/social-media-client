describe("Social media client: login and access profile", () => {
  it("Login test", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#registerForm > .modal-header > .btn-close").click();
    cy.get(".text-end > .btn-outline-success").click({ force: true });
    cy.get("#loginEmail").type("sabKut73328@stud.noroff.no", { force: true });
    cy.get("#loginPassword").type("kukuku16", { force: true });
    cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });
  });
});
