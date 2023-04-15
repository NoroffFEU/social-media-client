describe('Login social media plattform', () => {
  it('can login user', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.btn-outline-success').contains('Login').click();
    cy.wait(500);
    cy.get('#loginEmail').type('bernt22@nngfh.no{enter}', { delay: 100 });
    cy.get('#loginPassword').type('dfgdfg{enter}', { delay: 100 });
    cy.get('#loginForm').submit();
  });
});
