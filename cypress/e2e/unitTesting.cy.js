describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://sanhamm.github.io/social-media-client/');

    cy.get('input[id="loginEmail"]')
      .type('sanderhamm@noroff.no')
      .should('have.value', 'sanderhamm@noroff.no');

    cy.get('input[id="loginPassword"]')
      .type('sander199797')
      .should('have.value', 'sander199797');

    cy.get('button[id="loginButton"]').click();
  });
});
