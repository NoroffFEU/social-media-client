describe("Authenticated user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("#loginEmail").should("exist").type("maytest25@noroff.no");
    cy.get("#loginPassword").should("exist").type("maytestpassword{enter}");
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
    cy.url().should("not.include", "login");
  });

  it("Can logout", () => {
    cy.wait(1000);
    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(localStorage.getItem("profile")).to.be.null);
    cy.then(() => expect(localStorage.getItem("token")).to.be.null);
  });
});
