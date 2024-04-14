// Login function with valid credentials
describe("Login Function Valid", () => {
  it("lets user log in with valid credentials", () => {
    cy.visitHomepage();

    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.logsIn();
    // cy.loggedIn();
  });
});
