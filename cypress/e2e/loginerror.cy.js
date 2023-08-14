describe("Invalid Login Attempt", () => {
  const invalidEmail = "invalid@noroff.no";
  const invalidPassword = "wrongpassword";

  const loginPageUrl = "http://127.0.0.1:5500/";

  const errorMessageSelector = ".error-message";

  it("should not allow login with invalid credentials and show an error", () => {
    cy.visit(loginPageUrl);
    cy.wait(500);

    cy.get('#registerForm [data-auth="login"]').click();
    cy.wait(500);

    cy.get("#loginForm input[name=email]").type(invalidEmail);
    cy.get("#loginForm input[name=password]").type(invalidPassword);
    cy.get("#loginForm button[type=submit]").click();

    cy.url().should("eq", loginPageUrl);

    cy.get(errorMessageSelector).should("be.visible");
  });
});
