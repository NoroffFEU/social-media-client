describe('Using login form, the user', () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173/index.html');
        cy.get('.btn.btn-outline-success.me-2').contains('Login').click();
        cy.get('#loginModal').should('be.visible');
    });

    it('should log in with valid credentials', () => {
        cy.get('#loginEmail').type('ingridoo@stud.noroff.no');
        cy.get('#loginPassword').type('password123');
        cy.get('#loginForm').find('button[type="submit"]').click();
        cy.url().should('include', '?view=profile&name=');
    });

    it('should not log in with invalid credentials', () => {
        cy.get('#loginEmail').type('unknown@stud.noroff.no');
        cy.get('#loginPassword').type('password123');
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Either your username was not found or your password is incorrect')
        });
        cy.get('#loginForm').find('button[type="submit"]').click();
    });

    it('should logout when clicking logout button', () => {
        cy.get('#loginEmail').type('ingridoo@stud.noroff.no');
        cy.get('#loginPassword').type('password123');
        cy.get('#loginForm').find('button[type="submit"]').click();
        cy.url().should('include', '?view=profile&name=');
        cy.get('header').should('be.visible');
        cy.get('.text-end').find('button[data-auth="logout"]').click();
        cy.get('.btn.btn-outline-success.me-2').contains('Login').should('be.visible');
    });
});