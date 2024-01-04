describe('Login failed', () => {
  const Email = Cypress.env('FAILEDEMAIL');
  const Password = Cypress.env('FAILEDPASSWORD');
  it('shows an error message for invalid login credentials', () => {
    cy.visit('/');

    cy.wait(2000);

    cy.get('#registerForm button.btn.btn-outline-success')
      .contains('Login')
      .click();

    cy.get('input#loginEmail').type(Email, { force: true });
    cy.get('input#loginPassword').type(Password, { force: true });

    cy.get('#loginForm button').contains('Login').should('be.visible').click();
  });
});
