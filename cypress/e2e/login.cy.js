describe("Login Test with valid and invalid credentials", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
  });

  it("logs in if correct credentials are provided", () => {
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);
    cy.get("#loginEmail").type("yes123@noroff.no");
    cy.get("#loginPassword").type(`Menkina1`);
    cy.get('button[type="submit"]').contains("Login").click();
    cy.wait(1000);
    cy.get('button[data-auth="logout"]')
      .contains("Logout")
      .should("be.visible");
  });

  it("shows an error message with invalid credentials", () => {
    cy.get('#registerForm button[data-auth="login"]').click();
    cy.wait(500);
    cy.get("#loginEmail").type("invalidemail@example.com");
    cy.get("#loginPassword").type("invalidpassword");
    cy.get('button[type="submit"]').contains("Login").click();
    cy.wait(1000);
  });

  it("logs out when the logout button is clicked", () => {
    // Assuming the user is already logged in
    cy.get('button[data-auth="logout"]').click({ force: true });
    cy.wait(1000);
    cy.get('#registerForm button[data-auth="login"]').should("be.visible");
  });
});
