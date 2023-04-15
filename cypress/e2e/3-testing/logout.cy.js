describe('Logout social media plattform', () => {
  it('can logout user', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('.btn-outline-warning').contains('Logout').click();
  });
});
