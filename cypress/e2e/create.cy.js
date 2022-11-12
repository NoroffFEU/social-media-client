describe('Social Media App: Create Post', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerModal button[type=reset]').click();
    cy.get('header button[data-auth=login]').click();
    cy.wait(500);
    cy.get('#loginEmail').type(`ImBenni@noroff.no`, {
      force: true,
      delay: 100,
    });
    cy.wait(500);
    cy.get('#loginPassword').type(`BenniBlanco`, { delay: 100 });
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.wait(3000);
  });

  it('CAN make a new post', () => {
    cy.get("footer [data-visible='loggedIn']")
      .contains('New Post')
      .should('be.visible')
      .click({ force: true });
    cy.wait(3000);
    cy.get('#postForm')
      .should('exist')
      .within(() => {
        cy.get('#postTitle')
          .should('be.visible')
          .type(`Cypress Test Title`, { force: true, delay: 100 });
        cy.get('#postTags')
          .should('be.visible')
          .type('Test', { force: true, delay: 100 });
        cy.get('#postMedia')
          .should('be.visible')
          .type(`https://picsum.photos/200`, { force: true, delay: 50 });
        cy.get('#postBody')
          .should('be.visible')
          .type(`Cypress Test Body`, { force: true, delay: 100 });
        cy.wait(1500);
        // cy.get("#postForm button > span").contains("Publish").should("be.visible").click({ force: true });
      });
  });

  // it('CAN delete an existing post', () => {
  //   cy.visit('http://127.0.0.1:5500/?view=profile&name=ImBenni');
  //   cy.wait(1000);
  //   // cy.get(".profile-posts").should("exist")
  //   cy.get(".profile-posts a[data-action='view']")
  //     .should('exist')
  //     .first()
  //     .click({ force: true });
  //   cy.wait(1000);
  //   cy.get('#nav-default').within(() => {
  //     cy.get("button[data-action='delete']").should('exist').click();
  //   });
  // });
});
