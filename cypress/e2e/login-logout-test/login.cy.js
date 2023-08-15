// cypress/integration/login_spec.js

describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080"); 
    });

    it('should login using the modal form', () => {
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

    });
});

