// Login function with valid credentials
describe("Can log in and out", () => {
  it("lets user log in with valid credentials and then log out", () => {
    cy.visitHomepage();

    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.logsIn();
    // cy.loggedIn();
    cy.wait(1500);
    // });

    //it("logs out", () => { // Log Out
    cy.get('button[data-auth="logout"]').click();
    cy.visitHomepage();
    cy.get("#registerForm button").contains("Login").should("exist").click();
    cy.wait(1000);
  });
});
