describe("Login Failure", () => {
  it("shows an error message for invalid login credentials", () => {
    cy.visit("https://dariodelafuente.github.io/social-media-client/");

    cy.wait(2000);

    cy.get("#registerForm button.btn.btn-outline-success").contains("Login").click();

    cy.get("input#loginEmail").type("invalid@noroff.no", { force: true });
    cy.get("input#loginPassword").type("invalidPassword", { force: true });

    cy.get("#loginForm button").contains("Login").should("be.visible").click();

    //Checking the window alert text
    cy.on("window:alert", (txt) => {
      //Assertion
      expect(txt).to.contains("Either your username was not found or your password is incorrect");
    });
  });
});
