describe('Using login form, the user', () => {
    it('should log in with valid credentials', () => {
        cy.visit('http://localhost:5173/');
        // cy.get('#loginModal').should('be.visible');
        // cy.get('#loginEmail').type('ingrido@stud.noroff.no');
        // cy.get('#loginPassword').type('password123');
        // cy.get('#loginForm').find('button[type="submit"]').click();
    });

    it('should not log in with invalid credentials', () => {

    });

    it('should logout when clicking logout button', () => {

    });
});

