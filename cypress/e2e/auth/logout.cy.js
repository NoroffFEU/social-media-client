describe('test logout', () => {
  const login = (username, password) => {
    cy.visit('/');
    cy.get('#registerForm button[data-auth="login"]').click();

    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(username);
    cy.get('#loginPassword').type(password);
    cy.get('#loginForm button[type=submit]').click();
  };

  const logout = () => {
    cy.get('button[data-auth="logout"]').click();
  };

  it('should allow the user to logout successfully', () => {
    // First, login with valid credentials
    login('blobby@stud.noroff.no', '11111111');
    cy.get('.profile').should('be.visible');

    // Then, logout
    logout();
    cy.get('#registerForm').should('be.visible');

    // Verify that the user is logged out
    cy.window().then((win) => {
      // eslint-disable-next-line no-unused-expressions
      expect(win.localStorage.getItem('profile')).to.be.null;
      // eslint-disable-next-line no-unused-expressions
      expect(win.localStorage.getItem('token')).to.be.null;
    });
  });
});
