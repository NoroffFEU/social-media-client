describe('Login Function', () => {
    beforeEach(() => {
        cy.visit('./');
    });
    it('should login successfully and save user data', () => {
        cy.login();
        cy.url().should('include', 'profile');
        cy.get('button[data-auth="logout"]').should('be.visible');
    });
});
