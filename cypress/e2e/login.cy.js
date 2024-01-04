describe('Access profile client', () => {
  it('log in', () => {
    const testEmail = Cypress.env('EMAIL');
    const testPassword = Cypress.env('PASSWORD');

    cy.visit('/');
    cy.wait(2000);

    cy.get('#registerForm button.btn.btn-outline-success')
      .contains('Login')
      .click();

    cy.get('form#loginForm input#loginEmail')
      .should('be.visible')
      .type(testEmail, { force: true });
    cy.get('form#loginForm input#loginPassword')
      .should('be.visible')
      .type(testPassword, { force: true });

    cy.get('#loginForm button').contains('Login').should('be.visible').click();

    cy.get('.profile').should('be.visible');
  });
});
