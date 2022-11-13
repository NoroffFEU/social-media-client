describe('Social Media App: Logout', () => {
  it('can log in', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(500);
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('mona.test@noroff.no');
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('123456789');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
  });
  it('can logout', () => {
    cy.wait(1000);
    cy.get('div.text-end > button').contains('Logout').click();
  });
});
