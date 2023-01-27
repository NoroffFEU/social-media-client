describe('invalid_login', () => {
  it('cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.visit('/index.html');
    cy.get(".modal-footer button[data-auth='login']").click();
    cy.get('#loginEmail').type('test@hotmail.com', { delay: 200 });
    cy.get('#loginPassword').click();
    cy.get('#loginPassword').type('notvalidcredentials', { delay: 200 });
    cy.get("#loginForm button.btn.btn-success[type='submit']").click();
  });
});
