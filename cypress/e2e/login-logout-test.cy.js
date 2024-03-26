describe('Your Test Suite Description', () => {
  it('Should perform the desired actions', () => {
    cy.visit('https://bilal1998a.github.io/workflow/');
    cy.wait(1000);
    cy.get(
      '#registerForm > div.modal-footer > button.btn.btn-outline-success',
    ).click();
    cy.wait(1000);

    cy.get('#loginEmail').click();
    cy.get('#loginEmail').type('general@noroff.no');

    cy.get('#loginPassword').click();
    cy.get('#loginPassword').type('general123');

    cy.get('#loginForm .btn-success').click();
    cy.wait(2000);
    cy.get(
      'body > header > div > div > div > button.btn.btn-outline-warning.me-2',
    ).click();
    cy.wait(1000);

    // No need for cy.get('#loginForm').submit();
  });
});
