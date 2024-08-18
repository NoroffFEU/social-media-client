describe('Logout E2E test', () => {
    before(() => {
        cy.visitHomePage();
        cy.get('[data-bs-toggle="modal"]').contains('Login').click();
        cy.get('#loginModal').should('be.visible');
        cy.fixture('loginData.json').then(loginData => {
            cy.get('[data-cy="emailInput"]').type(loginData.email);
            cy.get('[data-cy="passwordInput"]').type(loginData.password);
        });
        cy.get('[data-cy="loginSubmit"]').click();
        cy.window().its('localStorage.token').should('exist');
        cy.wait(1000);
    });

    it('allows the user to log out with the logout button', () => {
        cy.get('[data-cy="logOutBtn"]').click();
        cy.window().its('localStorage.token').should('not.exist');
    });
});
