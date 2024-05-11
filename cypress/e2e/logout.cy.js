describe('Logout functionality', () => {
    it('allows the user to log out', () => {
        // Assuming the user is logged in
        cy.visit('/');
        
        // Click the logout button
        cy.get('button[data-auth="logout"]').click();
        
        // Verify the user is logged out
        cy.get('button[data-auth="login"]').should('be.visible');
    });
});