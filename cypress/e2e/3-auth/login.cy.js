describe("login page", () => {
    it("should contain login and register links, and after a successful login, redirect, not show these links", () => {
        cy.visit("/");

        cy.wait(1000)

        //click the login button

        cy.get(".btn-outline-success.me-2").click();

        // Find the input field with Id "loginEmail" and type the email
        cy.get("#loginEmail").type("mariuskvaal15@noroff.no");
        cy.get("#loginPassword").type("mariuskvaal15");

        // Submit the form
        cy.get(".btn.btn-success").eq(1).click();

        
        cy.wait(1000)

         // Clicks the profile Name
         cy.get(".btn-success.ps-4").click();

         cy.wait(1000)
/*
        // The login and register links should not exist
        cy.get(".btn-outline-success").contains("Login").should("not.exist");
        cy.get(".btn-outline-success").contains("Register").should("not.exist");
*/
        // The logout button should exist
        cy.get(".btn.btn-outline-warning.me-2").should("exist");

        // The profile name and profile email should exist
        cy.get(".mb-0.profile-name").should("exist");
        cy.get(".text-muted.d-block.profile-email").should("exist");



        cy.wait(1000)

        //click the log OUT button

        cy.get(".btn-outline-warning.me-2").click();  
    });
});
