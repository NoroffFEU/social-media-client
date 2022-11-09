describe('user can not log in with invalid inputs', () => {
  it("user can't log in", () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1500);
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1500);
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('oda@noroff.no');
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('odanoroff');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});

describe('user can not log in with invalid inputs', () => {
  it('user can log in', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1500);
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1500);
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('oda@noroff.no');
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('odanoroff');
    cy.get('#loginForm > div.modal-footer > button').contains('Login').click();
    cy.wait(500);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
  });
});
