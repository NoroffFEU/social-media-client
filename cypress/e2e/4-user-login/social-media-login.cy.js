describe('norrofsocialmedia.no', () => {
  it('the user can log in and access their profile', () => {
    cy.visit('http://127.0.0.1:8080');
    cy.get('input#searchInput').type('Noroff{enter}', { delay: 500 });
    cy.get('h1').contains('Noroff');
  });
});
