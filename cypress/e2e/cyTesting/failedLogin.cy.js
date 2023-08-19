// test is supposed to fail

describe("Login Page", () => {
    it("Should show an error message upon failed login attempt", () => {
      cy.visit("index.html");
  
      // waiting for the register popup to be visible
      cy.get('.modal-dialog').should('be.visible');
      cy.wait(1000);

      // Find and click the Login button
      cy.get('.modal-dialog button[data-auth="login"]').click();
      cy.wait(1000);
  
          // Find the input field and type in the emailadress
          cy.get("#loginEmail").type("incorrectUsername99@noroff.no");
      cy.wait(1000);

          // Find the input field and type in the password
          cy.get("#loginPassword").type("incorrectPassword24124");
      cy.wait(1000);

          // Find the form with id "loginForm" and submit it
          cy.get("#loginForm").submit();
          cy.wait(1000);

          //making sure the logout button is not visible, since the user should not be logged in
          cy.get('button[data-auth="logout"]').should('not.be.visible');
      });
  
    
  });