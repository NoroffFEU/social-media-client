describe('Social Media App: Unauthenticated', () => {
  it('can NOT log in', () => {
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
    ).type('12345678910');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});

describe('Social Media App: Authenticated', () => {
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
    cy.wait(500);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
  });
});
