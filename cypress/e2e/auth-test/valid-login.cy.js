describe("Login Test with valid credentials", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
  });
  it("logs in if correct credentials are provided", () => {
    cy.get("#loginEmail").should("be.visible").clear();
    cy.wait(500);
    cy.get("#loginEmail").type("bibi@stud.noroff.no");
    // cy.get("#loginEmail").clear();
    cy.get("#loginPassword").type(`blabla123{enter}`);
  });
});
