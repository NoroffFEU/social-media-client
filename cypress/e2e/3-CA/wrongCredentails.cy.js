describe("User cannot log in with invalid credentails", () => {
  it("Fails login with invalid credentials and sends a message", () => {
    cy.visit("http://localhost:5500/index.html");

    //More to login modal
    cy.get("#testLogInModal").contains("Login").should("exist");
    cy.wait(1000);

    cy.get("#testLogInModal").contains("Login").click();
    cy.wait(1000);

    // Fill in form with invalid user info
    cy.get("#loginForm .btn").contains("Login").should("exist");
    cy.get("#loginEmail").type("invalid@stud.noroff.no");
    cy.wait(1000);
    cy.get("#loginPassword").type("not-password");

    //Submit form
    cy.wait(1000);
    cy.get("#loginForm").submit();
    cy.wait(1000);

    // The user is shown a message
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
