describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('will login', () => {
    cy.visit('/');
    cy.wait(1000);
    cy.get('.btn-close:visible').click();
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('cocomarcia@noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('cocomarcia1');
    cy.get('.btn-success:visible').click();
    cy.wait(3000);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.url().should('include', 'profile');
  });

  it('Can create item', () => {
    cy.visit('/?view=post');
    cy.get('form#postForm')
      .should('exist')
      .within(() => {
        cy.get("input[name='title']")
          .should('exist')
          .type('Cypress test title');
        cy.get("textarea[name='body']")
          .should('exist')
          .type('Cypress test body');
        cy.get("input[name='tags']").should('exist').type('Cypress, test');
        cy.get("button[data-action='submit']").should('exist').click();
      });
  });
});
