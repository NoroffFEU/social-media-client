describe('Valid_login', () => {
  it('can log in with the login form with valid credentials', () => {
    cy.visit('/index.html');
    cy.get(".modal-footer button[data-auth='login']").click();
    cy.get('#loginEmail').type('VetSka94785@stud.noroff.no', { delay: 200 });
    cy.get('#loginPassword').click();
    cy.get('#loginPassword').type('123123123', { delay: 200 });
    cy.get("#loginForm button.btn.btn-success[type='submit']").click();
    cy.get('div.btn.btn-success').contains('vetles'), { delay: 1000 };
  });
});

describe('Valid_logout', () => {
  it('can log out with the logout button', () => {
    cy.get("button.btn.btn-outline-warning[data-auth='logout']").click();
    cy.get(".modal-footer button[data-auth='login']").should('be.visible');
  });
});
