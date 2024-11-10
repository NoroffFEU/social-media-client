describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it("Makes the user able to log in with correct info and a @stud.noroff.no email", () => {
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);

    cy.get("#loginEmail").type("OleHau46630@stud.noroff.no");
    cy.get("#loginPassword").type("Deterlett123");

    cy.get("#loginForm").submit();
    cy.wait(500);

    cy.get('button[data-auth="logout"]')
      .should("be.visible");
  });

  it("Shows an error for non-Noroff emails", () => {
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);

    cy.get("#loginEmail").type("invaliduser@example.com");
    cy.get("#loginPassword").type("validPassword123");

    cy.get("#loginForm").submit();

    cy.get("#loginEmail")
      .invoke("prop", "validationMessage")
      .should("contain", "Valid Noroff student or teacher emails only");
  });
});