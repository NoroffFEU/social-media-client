describe('Checking form rules', () => {
  it('Check if unauthorized', () => {
    cy.visit('https://bilal1998a.github.io/workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.get('#loginEmail').type(`thisirnadomteskt@noroff.no`);
    cy.get('#loginPassword').type(`aisr!3!pASjdmnef{enter}`);
    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
  it('Check for validation message', () => {
    cy.visit('https://bilal1998a.github.io/workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type('invalidemail@email.no');
    cy.get('#loginPassword').type('invalidpassword{enter}');
    cy.wait(1000);
    cy.get('#loginModalLabel').should('have.text', 'Login');
    // Not possible to check for validation message as there is none. Only a browser standard.
    // So testing whether or not the modal is still open.
  });
});
