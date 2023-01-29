describe('invalid_login', () => {
  it('cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.visit('/index.html');
    cy.get(".modal-footer button[data-auth='login']").click();
    cy.get('#loginEmail').type('VetSka94785@stud.noroff.no', { delay: 200 });
    cy.get('#loginPassword').type('notvalidcredentials', { delay: 200 });
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert');
    });
    cy.get("#loginForm button.btn.btn-success[type='submit']").click();
    cy.get('@alert').should(
      'have.been.calledOnceWith',
      'Either your username was not found or your password is incorrect'
    );
  });
});
