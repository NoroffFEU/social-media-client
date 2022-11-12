describe("Logout", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.clearLocalStorage();
  });
  it("logs out", () => {
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
    });
    cy.then(() => {
      cy.get(".text-end").within(() => {
        cy.get("button[data-auth='logout']").click();
      });
      cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    });
  });
});
