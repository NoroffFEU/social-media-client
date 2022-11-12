describe('user can not log in with invalid inputs', () => {
  it('user can not log in', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('form#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1000);
    cy.get(
      'form#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('per@noroff.no');
    cy.get(
      'form#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('wrong-password');
    cy.get('form#loginForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});

describe('user can log in with valid inputs', () => {
  it('user can log in', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('form#registerForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1000);
    cy.get(
      'form#loginForm > div.modal-body > div.form-floating > input[type=email]'
    ).type('per@noroff.no');
    cy.get(
      'form#loginForm > div.modal-body > div.form-floating > input[type=password]'
    ).type('pernoroff');
    cy.get('form#loginForm > div.modal-footer > button')
      .contains('Login')
      .click();
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem('token')).to.not.be.null);
  });
});

describe('user can log out', () => {
  it('logs the user out when logout button is clicked', () => {
    cy.wait(1000);
    cy.get('div.text-end > button').contains('Logout').click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
  });
});
