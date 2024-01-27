describe("Noroff SoMe application: User logout", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail[type='email']").type(Cypress.env("user-email"));
    cy.get("input#loginPassword[type='password']").type(
      Cypress.env("user-password")
    );
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.wait(1500);
  });

  it("can logout", () => {
    cy.get("button").contains("Logout").click();
    cy.wait(1000).should(() => {
      expect(localStorage.token).eq(undefined);
    });
  });
});
