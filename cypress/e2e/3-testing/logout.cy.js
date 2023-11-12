describe('noroff logout', () => {
  it('can log out from application', () => {
    cy.get('#logout-button').click();
  });
});
