describe('Login Form', () => {
  it('can login with valid credentials', () => {
    cy.visit('./');
    cy.get('input[name=email]').first().type('valid-name@example.com');
    cy.get('input[name=password]').first().type('valid-password');
    cy.get('#loginForm').submit();
    cy.wait(3500);
  });

  it('brings out an alert box with invalid credentials', () => {
    cy.visit('./');
    cy.get('input[name=email]').first().type('invalid-name@example.com');
    cy.get('input[name=password]').first().type('invalid-password');
    cy.get('#loginForm').submit();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(
        'Login failed, please check your email or password and try again.'
      );
    });
  });
});