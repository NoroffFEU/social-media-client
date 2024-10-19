describe('Logout Function', () => {
    beforeEach(() => {
        cy.visit('./');
    });
    it('should logout successfully and remove access token', () => {
        cy.login();
        cy.wait(1000);
        cy.logout();
    });
});
