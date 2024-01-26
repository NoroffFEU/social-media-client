describe('Logout Button', () => {
    it('logs out a user', () => {
        cy.visit('./');
        cy.get('input[name=email]').first().type('mane@suiteTeardown.noroff.no');
        cy.get('input[name=password]').first().type('mane12345');
        cy.get('#loginForm').submit();

        cy.get('[data-auth="logout"]').click();

        cy.get('#loginForm').should('be.visible');
        cy.url().should('equal', 'http://localhost:55499/');
    });
});