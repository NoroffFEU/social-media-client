describe('Login Form Error Handling', () => {
    it('shows an error message when invalid credentials are submitted', () => {
        cy.visitHomePage();
        cy.get('[data-bs-toggle="modal"]').contains('Login').click();
        cy.get('#loginModal').should('be.visible');

        cy.fixture('loginDataInvalid.json').then(loginDataInvalid => {
            cy.get('[data-cy="emailInput"]').type(loginDataInvalid.email);
            cy.get('[data-cy="passwordInput"]').type(loginDataInvalid.password);
        });

        cy.get('[data-cy="loginSubmit"]').click();
        cy.on('window:alert', text => {
            expect(text).to.equal(
                'Either your username was not found or your password is incorrect'
            );
        });
        cy.window().then(win => {
            expect(win.localStorage.getItem('token')).to.be.null;
        });
    });
});
