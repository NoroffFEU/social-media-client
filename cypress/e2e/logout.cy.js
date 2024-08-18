describe("Logout from the Noroff Social App", () => {
  it("Successfully logout, you can log in with the login form with valid credentials", () => {
    cy.visit("/");
    cy.wait(300);
    cy.get('button[data-auth="login"]').last().click();
    cy.fixture("loginValid.json").then((loginValid) => {
      cy.get("input#loginEmail").type(loginValid.email, { force: true });
      cy.get("input#loginPassword").type(loginValid.password, { force: true });
    });

    cy.get('form#loginForm button[type="submit"]')
      .contains("Login")
      .click({ force: true });
    cy.url().should("include", "/?view=profile&name");

    // Check the token in local storage after successful login
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).not.to.be.empty;
    });

    //Log out
    cy.wait(3000);
    cy.get('button[data-auth="logout"]').first().click();

    // Check the token in local storage after successful logout
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
