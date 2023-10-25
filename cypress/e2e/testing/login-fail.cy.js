describe('Invalid User Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('The user cannot submit the login form with invalid credentials and is shown a message.', () => {
    cy.wait(1000);
    cy.get('#btn-go-to-login').first().click();

    // Fill in the email and password with invalid credentials
    cy.get('#loginEmail').type('email@email.com');
    cy.get('#loginPassword').type('password');

    // Submit the login form
    cy.get('#loginForm').submit();

    // Check if the user is still on the login page or the form is still visible
    cy.get('#loginForm').should('be.visible');

    // Check for an error message
    cy.get('.error-message').should('be.visible');

    // Also verify the input attributes to ensure they have the correct validation attributes
    cy.get('#loginEmail')
      .should('have.attr', 'pattern', '[\\w\\-.]+@(stud.)?noroff.no$')
      .should('have.attr', 'required');

    cy.get('#loginPassword')
      .should('have.attr', 'required')
      .should('have.attr', 'minlength', '8');
  });
});
