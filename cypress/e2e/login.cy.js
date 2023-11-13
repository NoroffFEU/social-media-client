describe('User Login Functionality', () => {
  it('should log in successfully', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.wait(1000);

    cy.get('[data-auth=login]').eq(1).click();

    cy.wait(1000);

    // Fill out the login form
    cy.get('#loginEmail').type('user@stud.noroff.no');
    cy.get('#loginPassword').type('invalidpassword');
    cy.get('#loginForm').submit();

    // Assert that the login form is not submitted
    cy.url().should('not.include', 'view=profile');

    // Get error message and check if contains incorrect info
    cy.get('.error-message').should('contain', 'Incorrect');
    
  });
});