describe('Logout', () => {
  const validEmail = 'test123@stud.noroff.no';
  const validPassword = 'test1234';

  it('enables a logged-in user to log out successfully', function () {
    cy.visit('/');
    cy.wait(500);
    cy.get('#registerForm').contains('Login').click();
    cy.wait(500);
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);
    cy.get('#loginForm').submit();
    cy.wait(2000);

    cy.window().then((win) => {
      expect(win.localStorage.token).to.exist;
    });

    cy.get('button').contains('Logout').click();

    cy.window().then((win) => {
      expect(win.localStorage.token).to.not.exist;
    });
  });
});
