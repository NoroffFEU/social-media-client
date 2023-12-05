describe('login user', { keystrokeDelay: 50 }, () => {
  it('cannot log a user in with wrong credentials', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('[data-cy=register-email]').type(`${Cypress.env('userEmail')}`);
    cy.get('[data-cy=register-password]').type(
      `${Cypress.env('userPassword')}`,
    );
    cy.get('[data-cy=register-submit]').click();
    cy.get('[data-cy=login-email]').type(`${Cypress.env('userEmail')}`);
    cy.get('[data-cy=login-password]').type(
      `${Cypress.env('userWrongPassword')}`,
    );
    cy.get('[data-cy=login-submit]').click();
    cy.intercept(
      `${Cypress.env('baseUrl')}/?view=profile&name=${Cypress.env('userName')}`,
    ).as('profilePage');
    cy.visit(
      `${Cypress.env('baseUrl')}/?view=profile&name=${Cypress.env('userName')}`,
    );
    cy.wait('@profilePage');
    cy.contains('Logout').should('be.visible');
  });
});
