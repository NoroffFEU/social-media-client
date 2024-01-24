describe("Social media client: login and access profile, logout, try to login with invalid password", () => {
  it("Login to profile account", () => {
    cy.visit("http://127.0.0.1:8080/index.html");
    cy.get("#registerForm > .modal-header > .btn-close").click();
    cy.get(".text-end > .btn-outline-success").click({ force: true });
    cy.get("#loginEmail").type("sabKut73328@stud.noroff.no", { force: true });
    cy.get("#loginPassword").type("kukuku16", { force: true });
    cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });
  });
  it("Logout from profile account", () => {
    cy.visit("http://127.0.0.1:8080/index.html");
    cy.get("#registerForm > .modal-header > .btn-close").click();
    cy.get(".text-end > .btn-outline-success").click({ force: true });
    cy.get("#loginEmail").type("sabKut73328@stud.noroff.no", { force: true });
    cy.get("#loginPassword").type("kukuku16", { force: true });
    cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });
    cy.get(".btn-outline-warning").click();
  });
  it("Try to login with bad password", () => {
    cy.visit("http://127.0.0.1:8080/index.html");
    cy.get("#registerForm > .modal-header > .btn-close").click();
    cy.get(".text-end > .btn-outline-success").click({ force: true });
    cy.get("#loginEmail").type("sabKut73328@stud.noroff.no", { force: true });
    cy.get("#loginPassword").type("kukuku18", { force: true });
    cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });
  });
});
