describe("login", () => {
  beforeEach(() => {
    cy.visit("127.0.0.1:5500/");
  });
  it("logs in", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(500);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(Cypress.env("EMAIL"), { force: true });
      cy.wait(1000);
      cy.get("input[type='password']:visible")
        .should("exist")
        .type(Cypress.env("PASSWORD"));
      cy.get(".btn-success:visible").click();
      cy.wait(500);
      cy.then(
        () => expect(window.localStorage.getItem("profile")).to.not.be.null
      );
      cy.then(
        () => expect(window.localStorage.getItem("token")).to.not.be.null
      );
      cy.url().should("include", "profile");
    });
  });
});
