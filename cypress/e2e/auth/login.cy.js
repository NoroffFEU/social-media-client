describe('test login', () => {
  const login = (username, password) => {
    cy.visit('/');
    cy.get('#registerForm button[data-auth="login"]').click();

    cy.get('#loginForm').should('be.visible');
    cy.get('#loginEmail').type(username);
    cy.get('#loginPassword').type(password);
    cy.get('#loginForm button[type=submit]').click();
  };

  it('should allow the user to login with valid credentials', () => {
    login('blobby@stud.noroff.no', '11111111');
    cy.get('.profile').should('be.visible');

    cy.window().then((win) => {
      // eslint-disable-next-line no-unused-expressions
      expect(win.localStorage.getItem('profile')).to.exist;
      // eslint-disable-next-line no-unused-expressions
      expect(win.localStorage.getItem('token')).to.exist;
    });
  });

  it('should show error, invalid credentials', () => {
    login('not.valid@mail.no', 'thisIsNotValid');
    cy.get('.error-message').should('be.visible');
  });
});
