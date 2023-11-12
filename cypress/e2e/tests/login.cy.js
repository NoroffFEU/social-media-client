describe('User can log in and access their profile', () => {
    it('should log in and access the user profile', () => {
        cy.visit('/index.html')

        // Open login modal
        cy.get("button[data-auth='login']").first().click();
        cy.wait(300);

        // Log in
        cy.get('#loginEmail').type('js2ca2023@stud.noroff.no');
        cy.get('#loginPassword').type('js2ca666');
        cy.get('button[type="submit"]').first().click(); 
        cy.wait(500);

        // Verify that the login was successful
        cy.url().should('include', 'view=profile');
    })
})