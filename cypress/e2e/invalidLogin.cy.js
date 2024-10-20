describe('Invalid login attempts', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not allow the user to submit the login form with invalid credentials and show an error message', () => {
    cy.get('form#registerForm button[type="reset"]').click();

    // Simulate entering invalid email and password into the login form
    cy.get('form#loginForm input[name="email"]').type(
      'invaliduser@stud.noroff.no'
    );
    cy.get('form#loginForm input[name="password"]').type('InvalidPassword');

    // Click the submit button to attempt login
    cy.get('form#loginForm button[type="submit"]').click();

    // Assert that the form has not successfully logged in (no token in localStorage, no redirect, etc.)
    cy.window().then(window => {
      const token = window.localStorage.getItem('token');
      expect(token).to.be.null; // There should be no token set for invalid login
    });

    // Check that an error message is displayed to the user
    cy.get('.error-message')
      .should('be.visible')
      .and('contain.text', 'Invalid email or password'); // Check if the message contains this text (or your custom message)

    // Optionally, check that the user remains on the login page or is not redirected
    cy.url().should('include', '/');
  });
});
