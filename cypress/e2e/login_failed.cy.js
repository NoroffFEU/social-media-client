describe('Login failed', () => {
  it('shows an error message for invalid login credentials', () => {
    cy.visit('/');

    cy.wait(2000);

    cy.get('#registerForm button.btn.btn-outline-success')
      .contains('Login')
      .click();

    cy.get('input#loginEmail').type('hotmale@hotmail.com', { force: true });
    cy.get('input#loginPassword').type('123456789', { force: true });

    cy.get('#loginForm button').contains('Login').should('be.visible').click();
  });
});
