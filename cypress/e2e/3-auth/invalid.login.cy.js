it("should show an error message upon a failed login attempt", () => {
    cy.visit("http://127.0.0.1:5500");
    cy.wait(1000);
  
    // Click the login button
    cy.get(".btn-outline-success.me-2").click();
  
    // Add your login logic here

    cy.get("#loginEmail").type("mariuskval87@noroff.no");
    cy.get("#loginPassword").type("mariuskvaal87");

    // For example, entering username and password and attempting to log in
  
    // Add assertions to check for error message display
    cy.get(".error-message-selector").should("be.visible");
  });
  
