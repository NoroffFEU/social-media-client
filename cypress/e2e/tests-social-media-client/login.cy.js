// cypress/integration/login_spec.js

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080"); 
    });

    it('should login using the modal form', () => {
        //loging in using cypress commands
        cy.login("test@stud.noroff.no", "cypress-test");
        // Checking if the URL includes dashboard after login
        cy.get("[data-visible='loggedIn']").should("be.visible");
        

    });
});

