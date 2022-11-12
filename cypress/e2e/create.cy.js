describe('Social Media App: Create and Delete Posts', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get('#registerModal button[type=reset]').click();
    cy.get('header button[data-auth=login]').click();
    cy.wait(1000);
    cy.get("#loginModal input[type='email']")
      .should('be.visible')
      .type(`ImBenni@noroff.no`);
    cy.wait(1000);
    cy.get("#loginModal input[type='password']")
      .should('exist')
      .type(`BenniBlanco{enter}`);
    cy.wait(1000);
  });

  it('CAN make a new post', () => {
    cy.get('#footerActions > a.btn').contains('New Post').click();
    cy.get('#postForm')
      .should('exist')
      .within(() => {
        cy.get('input[name="title"]')
          .should('be.visible')
          .type(`Cypress Test Title`);
        cy.get('input[name="tags"]')
          .should('be.visible')
          .type(`Cypress Test Tag`);
        // cy.get('#postMedia').should('exist').type(`https://picsum.photos/200`);
        cy.get('textarea[name="body"]')
          .should('be.visible')
          .type(`Cypress Test Body`);
        cy.wait(1000);
        cy.get('button[data-action=submit]').click({ force: true });
        cy.wait(1000);
      });
  });

  it('CAN delete an existing post', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile&name=ImBenni');
    cy.wait(1000);
    // cy.get(".profile-posts").should("exist")
    cy.get(".profile-posts a[data-action='view']")
      .should('exist')
      .first()
      .click({ force: true });
    cy.wait(1000);
    cy.get('#nav-default').within(() => {
      cy.get("button[data-action='delete']").should('exist').click();
    });
  });
});
