const correctEmail = 'RoaHan10771@stud.noroff.no';
const correctPassword = 'Pass1234';
const wrongEmail = 'RoaHanWRONG@stud.noroff.no';
const wrongPassword = 'Wrong1234';

describe('Login flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(500);
    cy.get('#registerModal').contains('Login').click();
    cy.wait(500);
    cy.get('#loginForm').should('be.visible');
  });

  it('should deny empty input submit', () => {
    cy.get('button[type=submit]').contains('Login').click();
    cy.get('#loginEmail:invalid').should('exist');
  });

  it('should deny empty password input', () => {
    cy.get('button[type=submit]').contains('Login').click();
    cy.get('#loginPassword:invalid').should('exist');
  });

  it('should deny invalid email', () => {
    cy.get('#loginEmail').invoke('val', 'invalidemail').trigger('input');
    cy.get('button[type=submit]').contains('Login').click();
    cy.get('#loginEmail:invalid').should('exist');
  });

  it('should deny wrong password', () => {
    cy.get('#loginEmail').type(correctEmail);
    cy.get('#loginPassword').type(wrongPassword);
    cy.get('button[type=submit]').contains('Login').click();

    cy.on('window:alert', (text) => {
      expect(text).to.include(
        'Either your username was not found or your password is incorrect',
      );
    });
  });

  it('should allow a valid user to log in', () => {
    cy.visit('/');
    cy.wait(500);
    cy.get('#registerModal').contains('Login').click();
    cy.wait(500);
    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(correctEmail);
    cy.get('#loginPassword').type(correctPassword);
    cy.get('button[type=submit]').contains('Login').click();
  });
});
