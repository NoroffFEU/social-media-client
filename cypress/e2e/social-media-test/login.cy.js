describe('Can login to the page', () => {
  it('passes', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(800);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(800);
    // cy.get("input[type='email']:visible").should("exist").type(Cypress.env("EMAIL"));
    cy.get("input[type='email']:visible")
      .should('exist')
      .type(Cypress.env('EMAIL'));
    cy.get("input[type='password']:visible")
      .should('exist')
      .type(Cypress.env('PASSWORD'));
  });

  /*   it("Login", () => {
    cy.visit("/");
  }) */
});
