describe("User Registration", () => {
    it("creates a new profile", () => {
      // Load the page with the buttons
      cy.visit("../../index.html");
  
      // Find and click all "Register" buttons to open the registration form
      cy.get('button[data-auth="register"][data-visible="loggedOut"]', { timeout: 10000 })
        .should('exist') // Check if the elements exist in the DOM
        .click({ multiple: true, force: true }); // Click on all 'Register' buttons forcefully
  
      // Check if the registration modal is visible (optional, depends on your needs)
      cy.get("#registerModal").should("be.visible");
  
      // Fill out the registration form
      cy.get("#registerName").type("Bart12345");
      cy.get("#registerEmail").type("Bartgaj65913@stud.noroff.no");
      cy.get("#registerPassword").type("Test12345");
      cy.get("#registerAvatar").type("https://example.com/avatar.jpg");
  
      // Submit the registration form
      cy.get("#registerForm").submit();
  
      cy.intercept("POST", "https://nf-api.onrender.com/api/v1/social/auth/register", {
        statusCode: 200,
        body: { message: "Registration successful" },
      });

    });
  });
  