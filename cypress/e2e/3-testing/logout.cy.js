describe('Logout functionality', () => {
  it('User can log out with the logout button and token should be null', () => {
    cy.visit('/');

    cy.get('#loginForm input[name="email"]').type('validemail@example.com');
    cy.get('#loginForm input[name="password"]').type('validpassword');
    cy.get('#loginForm button[type="submit"]').click();

    cy.get('button[data-auth="logout"]').should('be.visible');

    cy.get('button[data-auth="logout"]').click();

    cy.url().should('include', '/');
    cy.get('button[data-auth="login"]').should('be.visible');

    cy.window().then((win) => {
      expect(win.localStorage.getItem('token')).to.be.null;
    });
  });
});
