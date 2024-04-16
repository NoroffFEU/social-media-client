describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should allow a valid user to log in", () => {
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-bs-target="#loginModal"]`).click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginForm #loginEmail").type(Cypress.env("validEmail"));
    cy.get("#loginForm #loginPassword").type(Cypress.env("validPassword"));
    cy.get("button[type=submit]").contains("Login").click();
  });
});
