describe('test login', () => {
  const login = (username, password) => {
    cy.visit('/');
    cy.get('#registerForm button[data-auth="login"]').click();

    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(username);
    cy.get('#loginPassword').type(password);
    cy.get('#loginForm button[type=submit]').click();
  };

  it('should show error, invalid credentials', () => {
    login('not.valid@mail.no', 'thisIsNotValid');
    cy.get('.error-message').should('be.visible');
  });
});
