describe('Logout Button', () => {
  it('logs out the user', () => {
    cy.visit('index.html');
    cy.get('input[name=email]').first().type('RobMar4444@stud.noroff.no');
    cy.get('input[name=password]').first().type('robert1234');
    cy.get('#loginForm').submit();

    cy.get('[data-auth="logout"]').click();

    cy.get('#loginForm').should('be.visible');
    cy.url().should('equal', 'http://localhost:5500/');
  });
});
