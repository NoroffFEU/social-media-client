describe('Login Functionality', () => {
  beforeEach(() => {
    // This can be your login page URL
    cy.visit('/');
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('form#registerForm button[type="reset"]').click();
    // Enter valid credentials
    cy.get('form#loginForm input[name="email"]').type('test@stud.noroff.no'); // Replace with valid test email
    cy.get('form#loginForm input[name="password"]').type('sh4500658'); // Replace with valid test password

    // Submit the form
    cy.get('form#loginForm button[type="submit"]').click();

    // Assert successful login, checking the presence of a token, or redirect
    cy.url().should('include', '/'); // Assumes successful login redirects to /dashboard

    // Verify the token is saved to local storage or cookies
    cy.window().then(window => {
      const token = window.localStorage.getItem('token');
      expect(token).to.exist;
    });
  });
});
