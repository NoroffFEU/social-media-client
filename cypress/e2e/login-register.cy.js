
describe('Registration Test', () => {
    it('should successfully register', () => {
      // Visit the local test page using the specified port and localhost
      cy.visit('http://localhost:5500/');
  
      // Wait for the modal to be fully visible
      cy.get('#loginModal', { timeout: 10000 }).should('not.be.visible');
  
      // Click on the "Register" button to open the register modal
      cy.get('button[data-auth="register"]').first().click({ force: true });
  
      // Wait for the modal to be fully visible
      cy.get('#loginModal', { timeout: 10000 }).should('be.visible');
  
      // Enter registration details
      cy.get('input[name="name"]').type('Your Name');
  
      // use eq(0) to select the first matching element with the name "email"
      cy.get('#loginModal input[name="email"]').eq(0).type('user@stud.noroff.no');
  
      cy.get('#loginModal input[name="password"]').type('your-password'); 
      cy.get('#loginModal input[name="avatar"]').type('https://example.com/avatar.jpg'); 
  
      // Click the register button inside the modal
      cy.get('#registerModal button[data-auth="register"]').click();
  
      cy.url().should('eq', 'https://localhost:5500/dashboard'); 
    });
  });
  