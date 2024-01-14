describe("User Registration", () => {
  const testName = "Test";
  const testEmail = Cypress.env("TEST_EMAIL");
  const testPassword = Cypress.env("TEST_PASSWORD");
  const testAvatarUrl =
    "https://robohash.org/8fa9b313ed3709475c2aa05cad064347?set=set4&bgset=&size=400x400";

  before(() => {
    cy.visit("https://piasun.github.io/social-media-client/");
    cy.wait(2000);
  });

  it("should create a new user profile", () => {
    cy.get(`#registerForm button`).contains("Create Profile").should("exist");

    cy.get("form#registerForm input#registerName").type(testName);

    cy.get("form#registerForm input#registerEmail").type(testEmail);

    cy.get("form#registerForm input#registerPassword").type(testPassword);

    cy.get("form#registerForm input#registerAvatar").type(testAvatarUrl);

    cy.get("form#registerForm button")
      .contains("Create Profile")
      .should("be.visible")
      .click();
  });
});
