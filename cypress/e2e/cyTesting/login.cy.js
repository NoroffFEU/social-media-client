describe("Login Page", () => {
  it("Should open and close the Login modal", () => {
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
    // the login button should not be visible since the user should be logged in
    cy.get('.modal-dialog button[data-auth="login"]').should("not.be.visible");
  });

  
});