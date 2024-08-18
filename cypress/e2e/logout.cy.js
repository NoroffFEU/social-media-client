describe("Logout from Noroff Social App", () => {
  it("should let you logout", () => {
    cy.visit("/");
    cy.wait(300);
    cy.get('button[data-auth="login"]').first().click();
    cy.fixture("loginValid.json").then((loginInfo) => {
      cy.get("input#loginEmail").type(loginInfo.email);
      cy.get("input#loginPassword").type(loginInfo.password);
    });
    cy.get('button[type="submit"]').contains("Login").click();
    cy.window().then((win) => {
      const profileName = win.localStorage.getItem("profile");
      cy.url().should("include", "/?view=profile&name", profileName);
      cy.get(".profile-name")
        .invoke("html")
        .then((innerHTML) => {
          cy.log(innerHTML);
        });
    });
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.a("string");
      expect(token).not.to.be.empty;
    });

    cy.wait(3000);
    cy.get('button[data-auth="logout"]').first().click();

    // There should not be a visible token in localstorage when you logout
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
