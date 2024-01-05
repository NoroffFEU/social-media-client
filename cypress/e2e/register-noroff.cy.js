describe("User Registration", () => {
    it("creates a new profile", () => {
      const testName = "BB";
      const testEmail = "Bartgaj65913@stud.noroff.no";
      const testPassword = "Pass123";
      const testAvatarUrl = "https://example.com/avatar.jpg";
  
      cy.visit("../../index.html");
  
      // Find and click all "Register" buttons to open the registration form
      cy.get('button[data-auth="register"][data-visible="loggedOut"]', { timeout: 10000 })
        .should('exist') // Check if the elements exist in the DOM
        .click({ multiple: true, force: true }); // Click on all 'Register' buttons forcefully
  
  
      // Fill out the registration form with valid data
      cy.get("form#registerForm input#registerName").type(testName);
      cy.get("form#registerForm input#registerEmail").type(testEmail);
      cy.get("form#registerForm input#registerPassword").type(testPassword);
      cy.get("form#registerForm input#registerAvatar").type(testAvatarUrl);
  
      // Click the "Create Profile" button
      cy.get("form#registerForm button.btn.btn-success").contains("Create Profile").click();
  
      // Log the response from the server
      cy.intercept("POST", "https://nf-api.onrender.com/api/v1/social/auth/register").as("registrationRequest");
  
      // Wait for the registration request to complete
      cy.wait("@registrationRequest").then((interception) => {
        // Log the response body
        cy.log("Registration Response: ", interception.response.body);
      });
      cy.debug();
      // Check if the user is now logged in after successful registration. Adjust the selector accordingly.
      cy.get('button[data-auth="logout"]').should('exist');
    });
    
  });
  