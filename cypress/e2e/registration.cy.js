describe("User Registration", () => {
  it("create a new user profile", () => {
    const testName = "Test";
    const testEmail = Cypress.env("TEST_EMAIL");
    const testPassword = Cypress.env("TEST_PASSWORD");
    const testAvatarUrl = "https://avatars.githubusercontent.com/u/33604162?v=4";

    cy.visit("https://dariodelafuente.github.io/social-media-client/");
    cy.wait(2000);

    cy.get(`#registerForm button`).contains("Create Profile").should("exist");
    cy.get("form#registerForm input#registerName").type(testName);
    cy.get("form#registerForm input#registerEmail").type(testEmail);
    cy.get("form#registerForm input#registerPassword").type(testPassword);
    cy.get("form#registerForm input#registerAvatar").type(testAvatarUrl);

    cy.get("form#registerForm button").contains("Create Profile").should("be.visible").click();
  });
});
