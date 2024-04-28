describe('The user can login', () => {
    beforeEach(() => {
      cy.visit('index.html');
      cy.get("button[data-bs-target='#loginModal']:visible").should('exist');
      cy.get("input[type='email']:visible").should('exist');
      cy.get("input[type='password']:visible").should('exist');
      cy.get('button[type="submit"]:visible').should('exist');
    });
  
    it('should log in and access the user profile', () => {
      cy.get("button[data-bs-target='#loginModal']").click();
  
      cy.get("input[type='email']").type('oyvrem02836@stud.noroff.no');
      cy.get("input[type='password']").type('mysupersafepassword123');
      cy.get('button[type="submit"]').click();
  
      cy.window().its('localStorage').should('have.property', 'token');
    });
  });