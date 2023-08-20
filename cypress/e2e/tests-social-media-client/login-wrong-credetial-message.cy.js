describe('Login Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080"); 
    });

    it('should display alert message that the user has incorrect credentials', () => {

        //could i have just changed loginEmail and loginPassword without the widow:alert function so that the test failed
        //that would have given the same outcome in a way?

        cy.on('window:alert', (text) => {
            expect(text).to.equal('Either your username was not found or your password is incorrect');
        });

        cy.get("#registerModal").should("be.visible").find("[data-auth='login']").click();
        cy.get("#registerModal").invoke("hide"); 
        

    

         //Wait for modal to close
         cy.wait(1000);


        // Type in email and password
        cy.get("#loginEmail").type("wrong-credetials@stud.noroff.no");
        cy.get("#loginPassword").type("thisIsGoingToFail");
        
      

        // Submitting the form
        cy.get("#loginForm").submit();
        

    });
});
