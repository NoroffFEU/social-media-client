describe("false log in", () => {
  it("cannot submit the login form with invalid credentials and is shown a message", () => {
    cy.visit("http://127.0.0.1:53395/");
    cy.wait(6000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(5000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.get("input#loginEmail").type("false@hotmail.com");
    cy.get("input#loginPassword").type("false123");
    cy.get(".btn-success:visible").contains("Login").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains(
        "Either your username was not found or your password is incorrect!"
      );
    });
    cy.url()
      .should("not.include", "profile")
      .then(() => {
        expect(window.localStorage.getItem("token")).to.be.null;
        expect(window.localStorage.getItem("profile")).to.be.null;
      });
  });
});
