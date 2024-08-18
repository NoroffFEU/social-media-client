describe('Login E2E test', () => {
    it('allows user to log in with the login form with valid credentials', () => {
        // Visit the home page
        cy.visitHomePage();
        cy.get('[data-bs-toggle="modal"]').contains('Login').click();
        cy.get('#loginModal').should('be.visible');
        cy.fixture('loginData.json').then(loginData => {
            cy.get('[data-cy="emailInput"]').type(loginData.email);
            cy.get('[data-cy="passwordInput"]').type(loginData.password);
        });
        cy.get('[data-cy="loginSubmit"]').click();
        cy.window().its('localStorage.token').should('exist');
    });
});
