import cy from 'cypress';
describe('Logout Feature', () => {
  beforeEach(() => {
    cy.login();
    cy.wait(3000);
  });

  it('should successfully log out when clicked', () => {
    cy.get('button[data-testid="logout-button"]', { timeout: 20000 }).should(
      'be.visible'
    );
    cy.get('button[data-testid="logout-button"]').click();
    cy.wait(3000);
    cy.url().should('include', '/');
  });
});
