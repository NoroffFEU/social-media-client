describe("Logout Functionality", () => {
  const loginPageUrl = "http://127.0.0.1:5500/";
  const profilePageUrl = "http://127.0.0.1:5500/?view=profile&name=John_Doe";

  const email = "testusername21212@noroff.no";
  const password = "Banner1212";

  const logoutButtonSelector = '[data-auth="logout"]';

  it("should log out the user when the logout button is clicked", () => {
    cy.visit(loginPageUrl);
    cy.wait(500);
    cy.get('#registerForm [data-auth="login"]').click();
    cy.wait(500);

    cy.get("#loginForm input[name=email]").type(email);
    cy.get("#loginForm input[name=password]").type(password);
    cy.get("#loginForm button[type=submit]").click();

    cy.url().should("eq", profilePageUrl);

    cy.get(logoutButtonSelector).click();

    cy.url().should("eq", loginPageUrl);

    cy.window().its("localStorage").should("not.have.key", "token");
    cy.window().its("localStorage").should("not.have.key", "profile");
  });
});
