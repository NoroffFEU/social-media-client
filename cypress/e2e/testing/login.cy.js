describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should deny an invalid user to log in and show error message", () => {
    cy.wait(500);
    cy.get("#registerForm .btn-close").click();
    cy.get(`header button[data-bs-target="#loginModal"]`).click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginForm #loginEmail").type(Cypress.env("wrongEmail"));
    cy.get("#loginForm #loginPassword").type(Cypress.env("wrongPassword"));
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.on("window:alert", (text) => {
      expect(text).to.include(
        "Either your username was not found or your password is incorrect",
      );
    });
    cy.window()
      .its("localStorage")
      .invoke("getItem", "token")
      .should("be.null");
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
    cy.get(`header button[data-auth="logout"]`).should("be.visible");
  });
});
