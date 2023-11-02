describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("will login", () => {
    cy.visit("/");
    cy.wait(1000);
  });
});
