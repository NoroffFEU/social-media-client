it('can log out by removing token from localStorage', () => {
  cy.get('button[data-auth=logout]')
    .contains(/log[\s]?out/i)
    .click({ force: true })
    .should(() => {
      expect(localStorage.getItem('token')).to.be.null;
    });
});
