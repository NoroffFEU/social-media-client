describe("template spec", () => {
  it("The user can log in with the login form with valid credentials", () => {
    cy.visit("/");
    cy.contains("button", "Login").eq(1).click();
  });
});
