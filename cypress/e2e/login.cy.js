describe('Login functionality', () => {
    it('allows the user to log in with valid credentials', () => {
        cy.visit('/');

        // Open login modal
        cy.get('button[data-auth="login"]').first().click();

        // Fill the login form and submit
        cy.get('#loginEmail').type('validuser@example.com');
        cy.get('#loginPassword').type('validpassword');
        cy.get('#loginForm').submit();

        // Assert that logout button is visible indicating successful login
        cy.get('button[data-auth="logout"]').should('be.visible');
    });

    it('prevents login and shows a message with invalid credentials', () => {
        cy.visit('/');

        // Stub window.alert to intercept alert messages
        cy.on('window:alert', (msg) => {
            expect(msg).to.contains('Either your username was not found or your password is incorrect');
        });
    
        // Open login modal
        cy.get('button[data-auth="login"]').first().click();

        // Fill the login form and submit
        cy.get('#loginEmail').type('invaliduser@example.com');
        cy.get('#loginPassword').type('invalidpassword');
        cy.get('#loginForm').submit();
    });
});