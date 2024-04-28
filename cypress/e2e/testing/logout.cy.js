describe("logout", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginForm #loginEmail").type(Cypress.env("validEmail"));
    cy.get("#loginForm #loginPassword").type(Cypress.env("validPassword"));
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);
  });

  it("should allow a valid user to log out", () => {
    cy.get(`header button[data-auth="logout"]`).contains("Logout").click();
    cy.wait(500);
    cy.window().then((window) => {
      const tokenAfterLogout = window.localStorage.getItem("token");
      expect(tokenAfterLogout).to.be.null;
    });
  });
});
