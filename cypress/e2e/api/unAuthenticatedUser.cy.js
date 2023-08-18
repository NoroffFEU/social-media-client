/// <reference types="cypress" />

describe('Unauthenticated user', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('CANNOT visit the profile page', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile');
    cy.url().should('not.include', 'profile');
  });

  it('CANNOT visit the posts page', () => {
    cy.visit('http://127.0.0.1:5500/?view=posts');
    cy.url().should('not.include', 'posts');
  });

  it('CAN view the register form', () => {
    cy.get("header [data-auth='register']").click({ force: true });
  });

  it('CAN view the login form', () => {
    cy.get("header [data-auth='login']").click({ force: true });
  });

  it('CANNOT login with invalid credentials and is shown a message', () => {
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('#registerModal .btn-close').click({ force: true });
    cy.get("header [data-auth='login']").click({ force: true });
    cy.get('#loginEmail')
      .should('be.visible')
      .wait(1000)
      .type('notauser@noroff.no');
    cy.get("#loginModal input[type='password']")
      .should('be.visible')
      .type('wrongpassword{enter}', { delay: 100 });
    cy.wait(1000);
    cy.url().should('not.include', 'profile');
    expect(localStorage.getItem('token')).to.be.null;
    expect(localStorage.getItem('profile')).to.be.null;
  });
});
