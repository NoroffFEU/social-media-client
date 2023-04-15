describe('no.wikipedia.org', () => {
  it('can search for Noroff', () => {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('input#passwordInput').type('{Pasvikveien18enter}', { delay: 500 });
    cy.get('input#loginInput').type('bernt22@noroff.no{enter}', { delay: 500 });
  });
});
