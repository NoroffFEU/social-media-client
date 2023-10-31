describe("Login", () => {
  it("should login a user", () => {
    cy.visit("/");
    cy.wait(2000);
    // clicks the login button
    cy.get("#registerForm").within(() => {
      cy.contains("button", "Login").click();
    });
    cy.wait(2000);
    cy.get("#loginForm").within(() => {
      cy.get("input#loginEmail").type("testepost_01@noroff.no");
      cy.get("input#loginPassword").type("123123123");
      cy.contains("button", "Login").click();
    });
  });
});
