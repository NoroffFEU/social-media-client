describe("login page", () => {
    it("should contain login and register links, and after a successful login, redirect, not show these links", () => {
        cy.visit("http://127.0.0.1:5500");

        //click the login button

        cy.get(".btn-outline-success me-2").wait(2000).click();

        // Find the input field with Id "loginEmail" and type the email
        cy.get("#loginEmail .form-control").type("marius99@noroff.no");
        cy.get("#loginPassword .form-control").type("marius99");

        // Submit the form
        cy.get(".btn.btn-success").click();

        // The login and register links should not exist
        cy.get(".btn.btn-success").contains("Login").should("not.exist");
        cy.get(".btn.btn-outline-success").contains("Register").should("not.exist");

        // The logout button should exist
        cy.get(".btn.btn-outline-warning.me-2").should("exist");

        // The profile name and profile email should exist
        cy.get(".mb-0.profile-name").should("exist");
        cy.get(".text-muted.d-block.profile-email").should("exist");
    });
});
