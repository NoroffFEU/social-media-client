describe("A valid login to the Noroff Social App", () => {
  it("When provided the correct credentials, you should get an valid login", () => {
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
  });
});
