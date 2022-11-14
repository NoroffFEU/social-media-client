describe("Log out button logs the user out", () => {
  before(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.login();
  });

  it("Log user out", () => {
    cy.wait(2000);
    cy.get("button[data-auth='logout']:visible").click();
    cy.wait(2000);
    cy.get("body").should("not.have.class", "logged-in");
  });
});
