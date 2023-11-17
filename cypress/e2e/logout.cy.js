describe("Access profile client", () => {
  it("log in and access profile page", () => {
    const testEmail = Cypress.env("TEST_EMAIL");
    const testPassword = Cypress.env("TEST_PASSWORD");

    cy.log(`Test Email: ${testEmail}`);
    cy.log(`Test Password: ${testPassword}`);

    cy.visit("https://dariodelafuente.github.io/social-media-client/");
    cy.wait(2000);

    cy.get("#registerForm button.btn.btn-outline-success").contains("Login").click();

    cy.get("form#loginForm input#loginEmail").should("be.visible").type(testEmail, { force: true });
    cy.get("form#loginForm input#loginPassword")
      .should("be.visible")
      .type(testPassword, { force: true });

    cy.get("#loginForm button").contains("Login").should("be.visible").click();

    cy.get("button").contains("Logout").should("be.visible").click();

    cy.get("#registerModalLabel").should("be.visible");
  });
});
