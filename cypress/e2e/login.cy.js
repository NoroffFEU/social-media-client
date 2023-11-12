describe('Logging in', () => {
  beforeEach(() => {
    cy.visit('./index.html');
    cy.clearLocalStorage();
  });
  it('logs in', () => {
    cy.visit('./index.html');
    cy.wait(800);
    cy.get('#registerModal button[type=button]').contains('Login').click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").type('rebekkatest@noroff.no', {
      delay: 300,
    });
    cy.get("input[type='password']:visible").type('12345678', { delay: 300 });
    cy.get('button[type=submit]').contains('Login').click();
    cy.wait(400);
  });
});
