describe('Checking form rules', () => {
  it('Check if unauthorized', () => {
    cy.visit('https://griphaugland.github.io/ca_workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`thisirnadomteskt@noroff.no`);
    cy.get('#loginPassword').type(`aisr!3!pASjdmnef{enter}`);
    cy.wait(1000);
    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
  it('Check for validation message', () => {
    cy.visit('https://griphaugland.github.io/ca_workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);
    // Not possible to check for validation message as there is none. Only a browser standard.
    cy.get('#loginEmail').type('invalidemail');
  });
});
