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
    cy.wait(700);
    cy.clearLocalStorage();
    cy.wait(700);
    cy.get('#registerForm button[type=reset]')
      .contains('Close')
      .should('be.visible')
      .click();
    cy.wait(700);

    cy.get(`header [data-auth='login']`)
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(700);
    cy.get('#loginModal input[type="email"]')
      .should('be.visible')
      .type('KMTest01@noroff.no', { delay: 100 });
    cy.get('#loginModal input[type="password"]')
      .should('be.visible')
      .type('KMTest01{enter}', { delay: 100 });
    cy.wait(700);
  });
  it('CAN login', () => {
    cy.url().should('include', 'profile');
    cy.url().should('not.include', 'login');
    expect(localStorage.getItem('token')).to.not.be.null;
  });
});
describe('Social Media App: Authenticated user post', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.wait(700);
    cy.clearLocalStorage();
    cy.wait(700);
    cy.get('#registerForm button[type=reset]')
      .contains('Close')
      .should('be.visible')
      .click();
    cy.wait(700);

    cy.get(`header [data-auth='login']`)
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(700);
    cy.get('#loginModal input[type="email"]')
      .should('be.visible')
      .type('KMTest01@noroff.no', { delay: 100 });
    cy.get('#loginModal input[type="password"]')
      .should('be.visible')
      .type('KMTest01{enter}', { delay: 100 });
    cy.wait(700);
  });
  it('CAN create new post and delete it', () => {
    cy.get(`footer [data-visible='loggedIn']`)
      .contains('New Post')
      .should('be.visible')
      .click();
    cy.wait(700);
    cy.get('#postTitle')
      .should('be.visible')
      .type('Cypress test post', { delay: 100 });
    cy.get('#postTags')
      .should('be.visible')
      .type('Cypress, Testing', { delay: 100 });
    cy.get('#postBody')
      .should('be.visible')
      .type('This is a test post for Cypress E2E testing', { delay: 100 });
    cy.get(`#postForm [data-action='submit']`)
      .contains('Publish')
      .should('be.visible')
      .click();
    cy.wait(700);
    cy.get(`header [href='./']`).should('be.visible').click();
    cy.wait(700);
    cy.get(`main button[data-action='delete']`)
      .contains('Delete')
      .should('be.visible')
      .click({ force: true });
    cy.wait(700);
  });
});
