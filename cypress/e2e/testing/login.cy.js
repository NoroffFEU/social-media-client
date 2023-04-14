describe('Login Form', () => {
  it('can be submitted with valid credentials', () => {
    cy.visit('/index.html');
    cy.get('input[name=email]').first().type('valid-email@example.com');
    cy.get('input[name=password]').first().type('valid-password');
    cy.get('#loginForm').submit();
    cy.wait(5000);
  });

  it('shows an alert box with invalid credentials', () => {
    cy.visit('/index.html');
    cy.get('input[name=email]').first().type('invalid-email@example.com');
    cy.get('input[name=password]').first().type('invalid-password');
    cy.get('#loginForm').submit();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal(
        'Login failed. Please check your credentials and try again.'
      );
    });
  });
});
