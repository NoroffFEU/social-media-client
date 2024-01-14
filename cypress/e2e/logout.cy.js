describe("Access profile client", () => {
  const testEmail = Cypress.env("TEST_EMAIL");
  const testPassword = Cypress.env("TEST_PASSWORD");

  before(() => {
    cy.log(`Test Email: ${testEmail}`);
    cy.log(`Test Password: ${testPassword}`);
    cy.visit("https://piasun.github.io/social-media-client/");
    cy.wait(2000);
    cy.get("#registerForm button.btn.btn-outline-success")
      .contains("Login")
      .click();
    cy.get("form#loginForm input#loginEmail")
      .should("be.visible")
      .type(testEmail, { force: true });
    cy.get("form#loginForm input#loginPassword")
      .should("be.visible")
      .type(testPassword, { force: true });
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
  });

  it("Login should be successful, and the profile page should be accessible", () => {
    cy.get("button").contains("Logout").should("be.visible").click();
    cy.get("#registerModalLabel").should("be.visible");
  });
});
