
describe('Logout Test', () => {
    it('allows a user to log out', () => {
      
      cy.visit('/'); 
      cy.get('input[name=email]').type('validUser'); 
      cy.get('input[name=password]').type('validPassword'); 
      cy.get('#loginform').submit();
  
      // After login, perform logout
      cy.get("button[data-auth='logout']").click(); 
  
      
      cy.url().should('include', '/'); 
    });
  });
  