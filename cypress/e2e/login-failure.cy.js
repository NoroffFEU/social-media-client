
describe('Login Failure Test', () => {
    it('should display an error message for failed login', () => {
      // Visit the local test page using the specified port and localhost
      cy.visit('http://localhost:5500/');
  
      // Click on the "Login" button to open the login modal
      cy.get('button[data-auth="login"]').first().click({ force: true });
  
      // Ensure that the modal is fully visible
      cy.get('#loginModal', { timeout: 10000 }).within(() => {
        cy.get('.modal-body').should('be.visible');
  
        // Enter incorrect login details
        cy.get('input[name="username"]').type('incorrect-username');
        cy.get('input[name="password"]').type('incorrect-password');
  
        // Click the login button inside the modal
        cy.get('button[data-auth="login"]').click();
  
        // Check if the error message is displayed
        cy.get('.error-message').should('be.visible').contains('Login failure. Please check your login or password.');
      });
  
    });
  });
  