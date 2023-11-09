it("should show an error message upon a failed login attempt", () => {

    cy.visit("http://127.0.0.1:5500");

    cy.wait(1000);
  
    // Click the login button
    cy.get(".btn-outline-success.me-2").click();
  
    // Add your login logic here

    cy.get("#loginEmail").type("mariuskval87@noroff.no");

    cy.get("#loginPassword").type("mariuskvaal87");

    // Verify that the error message is logged in the console
    cy.window().then((win) => {
      cy.spy(win.console, "error").as("consoleError");
    });

    // Wait for any potential asynchronous actions (e.g., validation)
    cy.wait(1000);

    // Assert that the console error message contains your expected text
    cy.get("@consoleError").should
      "be.calledWithMatch",
      "Either your username was not found or your password is incorrect" // Replace with the expected error message
  });