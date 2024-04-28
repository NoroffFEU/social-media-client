describe('Invalid login test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    });

    it('should display an error message for invalid credentials', () => {
        cy.get("button[data-bs-target='#loginModal']:visible").first().click();
        cy.wait(1000)
        cy.get("#loginModal input[type='email']").type('idontexist@stud.noroff.no');
        cy.get("#loginModal input[type='password']").type('invalid');
        cy.wait(1000)
        cy.get("#loginModal button[type='submit']").click();
        cy.wait(1000)
        cy.on('window:alert', (text) => {
            expect(text).to.include('Either your username was not found or your password is incorrect');
        });

        cy.window().its('localStorage').should('not.have.property', 'token');
    });
});