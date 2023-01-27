describe("Invalid User Credentials", () => {
  beforeEach(() => {
    cy.visit("./");
    cy.clearLocalStorage();
    cy.wait(1000);
  });

  it("fails to log in with invalid email", () => {
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);

    cy.get("input#loginEmail").type("invalid@email.com");
    cy.get("input#loginPassword").type("invalidpaswsord");

    cy.wait(1000);

    cy.get('button[type="submit"]').contains("Login").click();
    cy.wait(1000);
    expect("window:alert");
  });
});
