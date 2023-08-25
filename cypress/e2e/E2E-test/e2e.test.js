describe("Authentication Tests", () => {
    it("should log in with valid credentials", () => {
      cy.visit("/login"); // Assuming the login page is at "/login"
  
      // Fill in the valid credentials
      cy.get('input[name="username"]').type("validUsername");
      cy.get('input[name="password"]').type("validPassword");
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Assert that the user is redirected to the dashboard or landing page
      cy.url().should("include", "/dashboard"); // Adjust the URL accordingly
    });
  
    it("should show an error message for invalid credentials", () => {
      cy.visit("/login"); // Assuming the login page is at "/login"
  
      // Fill in invalid credentials
      cy.get('input[name="username"]').type("invalidUsername");
      cy.get('input[name="password"]').type("invalidPassword");
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Assert that an error message is displayed
      cy.get(".error-message").should("be.visible"); // Adjust the selector for the error message
    });
  
    it("should log out successfully", () => {
      // Log in first (you can use a custom Cypress command for login)
      cy.login("validUsername", "validPassword"); // Implement the login command as per your app
  
      // Locate and click the logout button
      cy.get(".logout-button").click(); // Adjust the selector for the logout button
  
      // Assert that the user is redirected to the login page or a success message is displayed
      cy.url().should("include", "/login"); // Adjust the URL accordingly
    });
  });
  