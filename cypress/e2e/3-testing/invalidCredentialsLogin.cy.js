describe("Invalid credentials login", () => {
  it("does not login and is shown a message", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get(".modal-footer [data-auth=login]").click();
    cy.wait(500);
    cy.get("#loginEmail").type("invalid@stud.noroff.no");
    cy.get("#loginPassword").type("password");
    cy.get("#loginForm .btn-success").click();
    cy.wait(500);
    const alertMessage = cy.stub().as("alertMessage");
    cy.on("window:alert", alertMessage);
    cy.get("@alertMessage").should(
      "have.been.calledOnceWith",
      "Either your username was not found or your password is incorrect",
    );
  });
});
