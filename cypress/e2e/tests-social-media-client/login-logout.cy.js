// cypress/integration/login_spec.js

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080"); 
    });

    it('should login using the modal form and log out afterwards', () => {
        cy.get("#registerModal").should("be.visible").find("[data-auth='login']").click();
        cy.get("#registerModal").invoke("hide"); 
        

    

         //Wait for modal to close
         cy.wait(1000);


        // Type in email and password
        cy.get("#loginEmail").type("test@stud.noroff.no");
        cy.get("#loginPassword").type("cypress-test");
        
      

        // Submitting the form
        cy.get("#loginForm").submit();


        // Checking if the URL includes dashboard after login
        cy.get("[data-visible='loggedIn']").should("be.visible");
        
        // This is only so that the person running the test in Cypress can acctualy see the profil dashboard before cypress go to the next step of the testing
        cy.wait(1000);

        cy.get("[data-auth='logout']").click();


        cy.get("[data-visible='loggedIn']").should("not.be.visible");

    });
});

