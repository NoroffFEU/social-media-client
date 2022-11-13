describe('Create post test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
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
  });

  it('can create a post', () => {
    cy.wait(1000);
    cy.visit('http://127.0.0.1:5173/?view=post');
    cy.get('#postTitle').should('exist').type('Good evening!');
    cy.get('#postTags').should('exist').type('Cypress');
    cy.get('#postBody').should('exist').type('Pushing through!');
    cy.wait(500);
    cy.get("#postForm [data-action='submit']").should('be.visible').click();
  });
});
