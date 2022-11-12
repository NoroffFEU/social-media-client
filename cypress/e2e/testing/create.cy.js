describe('Create post test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#loginForm input[name=email]')
      .should('exist')
      .type('karla@stud.noroff.no');
    cy.wait(1000);
    cy.get('#loginForm input[name=password]').should('exist').type('karla123');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.wait(2000);
    cy.visit('http://127.0.0.1:5500/?view=post');
  });
});
