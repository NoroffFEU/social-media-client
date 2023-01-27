import cy from 'cypress';

describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-auth="login"]').click(); // navigate to the login form
  });

  it('should allow a user to log in', () => {
    cy.get('#username').type('Ethmane.Bilal@stud.noroff.no');
    cy.get('#password').type('qwerldskfjls23');
    cy.get('form').submit();
    cy.get('.welcome-message').should('be.visible');
  });
});
