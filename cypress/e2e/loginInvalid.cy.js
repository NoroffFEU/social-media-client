describe("A invalid and failed login to the Noroff Social App", () => {
  it("When provided the uncorrect credentials, you should get an invalid login", () => {
    cy.visit("/");
    cy.wait(300);
    cy.get('button[data-auth="login"]').first().click();
    cy.fixture("loginInvalid.json").then((loginInfo) => {
      cy.get("input#loginEmail").type(loginInfo.email);
      cy.get("input#loginPassword").type(loginInfo.password);
    });
    cy.get('button[type="submit"]').contains("Login").click();
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Something went wrong. Please check your credentials",
      );
    });
    cy.get("#loginEmail").should(
      "be.visible",
      "have.attr",
      "title",
      "Invalid login ID",
    );

    // There should not be a visible token in localstorage
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
