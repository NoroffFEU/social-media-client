describe('Valid_login', () => {
  it('user can log in with the login form with valid credentials', () => {
    cy.visit('/index.html');
    cy.get(".modal-footer button[data-auth='login']").click();
    cy.get('#loginEmail').type(Cypress.env('user_name'), { delay: 200 });
    cy.get('#loginPassword').click();
    cy.get('#loginPassword').type(Cypress.env('user_password'), { delay: 200 });
    cy.get("#loginForm button.btn.btn-success[type='submit']").click();
    cy.get('div.btn.btn-success').contains('vetles');
  });
});
