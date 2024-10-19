describe('Login Function', () => {
    beforeEach(() => {
        cy.visit('./');
    });
    it('should not login and must throw an error ', () => {
        cy.loginFail();
    });
});
