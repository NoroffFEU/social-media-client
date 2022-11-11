describe("E2E test - test login validates", () => {
  it("Test with wrong email", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.loginE2E();
    //Getting email input and on purpose mising a f in noroff
    cy.get("#loginEmail").type("rotta@norof.no");
    cy.get("#loginPassword").type("rotta123");
    cy.get("#loginForm button").contains("Login").click();
    //cy.wait(1000);

    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("Test with wrong password", () => {
    cy.visit("/");
    cy.loginE2E();
    cy.get("#loginEmail").type("rotta@noroff.no");
    cy.get("#loginPassword").type("rotta12");
    cy.get("#loginForm button").contains("Login").click();
    //cy.wait(1000);

    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });

  it("Test with wrong email and password", () => {
    cy.visit("/");
    cy.loginE2E();
    cy.get("#loginEmail").type("rotta@norof.no");
    cy.get("#loginPassword").type("rotta12");
    cy.get("#loginForm button").contains("Login").click();
    //cy.wait(1000);
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
