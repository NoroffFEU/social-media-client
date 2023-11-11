describe('Version 2. The user cannot submit the login form with invalid credentials', () => {
  const failEmail = `guest@noroff.no`;
  const failPassword = `12345678`;

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
    cy.wait(2000);
    cy.get('#registerForm [data-bs-target="#loginModal"]').should('be.visible').click();
    cy.get('#loginForm').should('be.visible');
  });

  it('should not allow submission with invalid credentials and is shown a message', () => {
    cy.wait(2000);
    cy.get('#loginEmail').type(failEmail);
    cy.get('#loginPassword').type(failPassword);
    cy.on('window:alert', str => {
      expect(str).to.equal('Either your username was not found or your password is incorrect');
    });
    cy.get('#loginForm .btn.btn-success').should('be.visible').click();
    cy.wait(2000);
    cy.url().should('not.include', '?view=profile&name=');

    cy.get('#loginEmail').invoke('attr', 'title').should('equal', 'Only Noroff student or teacher emails are valid.');
  });
});
