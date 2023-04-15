describe("Login with valid credentials", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
  });

  it("logs in user", () => {
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("input#loginEmail").type("notrealmail@gmail.com");
    cy.get("input#loginPassword").type("notapassword123");
    cy.wait(500);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
  });
});
