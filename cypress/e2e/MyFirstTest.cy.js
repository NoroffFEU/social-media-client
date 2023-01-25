describe('My First Test', () => {
  it('should successfully log in with valid credentials', () => {
    cy.visit('../login');
    cy.get('input[name="email"]').type('example@stud.noroff.no');
    cy.get('input[name="password"]').type('validpassword');
    cy.get('button[type="submit"]').click();
    cy.title().should('eq', 'Test client');
    cy.url().should('include', '/dashboard');
  });
  it('should not log in with invalid credentials and show an error message', () => {
    cy.visit('/');
    cy.get('input[name="email"]').type('invalid@stud.noroff.no');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
  });
 
});
