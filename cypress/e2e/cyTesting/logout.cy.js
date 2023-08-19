describe("Login Page", () => {
    it("Should open and close the Login modal", () => {
      // Visit the login page
      cy.visit("index.html");
  
       // waiting for the register popup to be visible
      cy.get('.modal-dialog').should('be.visible');
      cy.wait(1000);

  
      // Find and click the Login button
      cy.get('.modal-dialog button[data-auth="login"]').click();
      cy.wait(1000);

      // Find the input field and type in the emailadress
          cy.get("#loginEmail").type("test-account-a1sdsad2d223@noroff.no");
      cy.wait(1000);
  
          // Find the input field and type in the password
          cy.get("#loginPassword").type("test-account-a1sdsad2d223");
      cy.wait(1000);

      // submitting the loginform
      cy.get("#loginForm").submit();
      cy.wait(1000);

    // making sure the logout button is visible
      cy.get('button[data-auth="logout"]').should('be.visible');
      cy.wait(1000);

    // Click on the logout button
    cy.get('button[data-auth="logout"]').click();
    cy.wait(1000);

    // Verify that the login button is visible again after logout
    cy.get('button[data-auth="login"]').should('be.visible');
      
    });


});