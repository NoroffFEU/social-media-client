// Valid
describe('Login Tests', () => {
    it('allows a user to log in with valid credentials', () => {
      cy.visit('/'); 

  
   
      cy.get('input[name=email]').type('validUser'); 
      cy.get('input[name=password]').type('validPassword'); 
      cy.get('#loginform').submit();
  
   
    });

  
    // Invalid
    it('prevents a user from logging in with invalid credentials', () => {
      cy.visit('/'); 
  

      cy.get('input[name=email]').type('invalidUser');
      cy.get('input[name=password]').type('wrongPassword');
      cy.get('#loginform').submit();
  
      cy.get('.error-message').should('be.visible'); 
    });
  });
  