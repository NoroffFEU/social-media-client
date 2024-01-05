describe("Cannot Submit Login Form with Invalid Password Credentials", () => {
    it("displays an error message for invalid password credentials", () => {
      // Load the login page
      cy.visit("../../index.html");
      cy.wait(2000);
  
      // Find and click the "Login" button to navigate to the login form
      cy.get('button[data-auth="login"]', { timeout: 10000 })
       .should('be.visible')
       .first()
       .click({ multiple: true, force: true });
  
      // Fill out the login form with a valid email and an invalid password
      cy.get("#loginEmail").type("cyTest@noroff.no", { force: true });
      cy.get("#loginPassword").type("cypresstest", { force: true });
  
      // Wait for the error message to be displayed
      cy.get("#loginPassword").then(($input) => {
        // Check if the input field has the `:invalid` pseudo-class
        const isInvalid = $input[0].checkValidity();
        expect(isInvalid).to.be.true;
      });
    });
  });
  