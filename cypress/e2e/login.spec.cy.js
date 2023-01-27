describe('Login Feature', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-auth="login"]').click(); // navigate to the login form
  });

  it('should allow a user to log in with valid credentials', () => {
    cy.get('#username').type('valid_username');
    cy.get('#password').type('valid_password');
    cy.get('form').submit();
    cy.get('.welcome-message').should('be.visible');
  });

  it('should not allow a user to log in with invalid credentials and show a message', () => {
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('form').submit();
    cy.get('.error-message').should('be.visible');
  });

  it('should allow a user to log out with the logout button', () => {
    // log in first
    cy.get('#username').type('valid_username');
    cy.get('#password').type('valid_password');
    cy.get('form').submit();

    cy.get('[data-auth="logout"]').click();
    cy.get('.logout-message').should('be.visible');
  });
});
