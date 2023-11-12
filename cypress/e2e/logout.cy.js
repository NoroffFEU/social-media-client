describe("Logout", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
  });

  it("Can log out", () => {
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(Cypress.env("EMAIL"));
      cy.get("input[type='password']:visible")
        .should("exist")
        .type(Cypress.env("PASSWORD"));
      cy.get("button[type='submit']").click();
    });
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.get("button[data-auth='logout']").click();
    cy.wait(2000);
    cy.url().should("not.include", "profile");
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
  });
});
