describe('Social Media login', () => {
  beforeEach(() => {
    cy.visit('./');
    cy.clearLocalStorage();
  });

  it('can not login or Unauthenticated', () => {
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1000);
    const email = 'email@gmail.no';
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type(`${email}`);
    const password = 'pass123456';
    cy.get(
      '#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type(`${password}`);
    cy.get('#loginForm div.modal-footer > button').contains('Login').click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });

  it('can log in or user Authenticated', () => {
    cy.get('#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1000);
    const email = 'enirose@noroff.no';
    cy.get(
      '#loginEmail > div.modal-body > div.form-floating > input[type=email]'
    ).type(`${email}`);
    const password = 'enirose123';
    cy.get(
      '#loginPassword > div.modal-body > div.form-floating > input[type=password]'
    ).type(`${password}`);
    cy.get('#loginForm div.modal-footer > button').contains('Login').click();
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
  });
});
