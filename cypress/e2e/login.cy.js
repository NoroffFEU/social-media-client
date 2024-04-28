describe('The user can login', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(1000)
        cy.get('#registerForm > div.modal-header > button').click();
        cy.get("button[data-bs-target='#loginModal']").should('exist');
        cy.get("input[type='email']:visible").should('exist');
        cy.get("input[type='password']:visible").should('exist');
        cy.get('button[type="submit"]:visible').should('exist');
    });

    it('should log in and access the user profile', () => {
        cy.get("button[data-bs-target='#loginModal']:visible").first().click();
        cy.wait(1000)
        cy.get("input[id='loginEmail']").type('oyvrem02836@stud.noroff.no');
        cy.get("input[id='loginPassword']").type('mysupersafepassword123');
        cy.get('#loginForm > .modal-footer > .btn.btn-success').click();
        cy.wait(1000)
        cy.window().its('localStorage').should('have.property', 'token');
    });
});