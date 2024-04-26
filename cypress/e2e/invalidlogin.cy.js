describe('Invalid login test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000); // Wait for elements to be visible before interacting with them
    });

    it('should display an error message for invalid credentials', () => {
        // Click the login button to open the login modal
        cy.get("button[data-bs-target='#loginModal']:visible").first().click();
        cy.wait(1000)
        // Fill in the login form with invalid credentials
        cy.get("#loginModal input[type='email']").type('invalid@stud.noroff.no');
        cy.get("#loginModal input[type='password']").type('invalid');
        cy.wait(1000)
        // Click the submit button within the login modal
        cy.get("#loginModal button[type='submit']").click();
        cy.wait(1000)
        // Check if an error message is displayed
        cy.on('window:alert', (text) => {
            expect(text).to.include('Either your username was not found or your password is incorrect');
        });

        // Check if token is not stored in localStorage after login attempt
        cy.window().its('localStorage').should('not.have.property', 'token');
    });
});
