describe('Login functionality', () => {
    it('should allow a user to log in and access their profile', () => {
      // Navigate to login
      cy.visit('index.html');
  
      // Fill in details
      cy.get('input[name=email]').type('testuser@stud.noroff.no');
      cy.get('input[name=password]').type('testPassword123');
  
      // Submit the form
      cy.get('button[type=submit]').click();
  
      // Check redirection to profile
      cy.url().should('include', 'index.html');
  
      // Check profile details
      cy.get('.username').should('contain', 'Test User');
    });
  });
  