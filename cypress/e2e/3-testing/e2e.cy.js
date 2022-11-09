describe('validate form input for login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('CAN visit the login page', () => {
    cy.visit('http://127.0.0.1:5500/');
  });
  it('CANNOT visit profile page', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile');
    cy.url().should('not.include', 'profile');
  });
  it('CAN view the register form', () => {
    cy.get(`header [data-auth='register']`).click({ force: true });
    cy.get('form button').contains('Create Profile').should('be.visible');
  });
  it('CAN view the login form', () => {
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
  });
});

describe('Social Media App: Authenticated user', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(500);
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerForm button[type=reset]')
      .contains('Close')
      .should('be.visible')
      .click();
    cy.wait(500);

    cy.get(`header [data-auth='login']`)
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(500);
    cy.get('#loginModal input[type="email"]')
      .should('be.visible')
      .type('KMTest01@noroff.no', { delay: 100 });
    cy.get('#loginModal input[type="password"]')
      .should('be.visible')
      .type('KMTest01{enter}', { delay: 100 });
    cy.wait(1000);
  });
  it('CAN login', () => {
    cy.url().should('include', 'profile');
    cy.url().should('not.include', 'login');
    expect(localStorage.getItem('token')).to.not.be.null;
  });
});
