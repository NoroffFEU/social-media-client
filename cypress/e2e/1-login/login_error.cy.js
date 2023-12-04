describe('login user', () => {
  it('can log a user in', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('input#registerEmail').type(`${Cypress.env('userEmail')}{enter}`);
    cy.get('input#registerPassword').type(
      `${Cypress.env('userPassword')}{enter}`,
    );
    cy.get(
      'form#registerForm.modal-content button.btn.btn-outline-success',
    ).click();
    cy.get('#loginModal.modal.fade').invoke('css', 'display', 'block');
    cy.get('input#registerName').invoke('css', 'display', 'none');
    cy.get('input#registerEmail').invoke('css', 'display', 'none');
    cy.get('#registerModal').invoke('css', 'display', 'none');
    cy.get('input#loginEmail').type(`${Cypress.env('userEmail')}{enter}`);
    cy.get('input#loginPassword').type(
      `${Cypress.env('userWrongPassword')}{enter}`,
    );
    cy.get('form#loginForm.modal-content button.btn.btn-success').click();
    cy.intercept(
      `${Cypress.env('baseUrl')}/?view=profile&name=${Cypress.env('userName')}`,
    ).as('profilePage');
    cy.visit(
      `${Cypress.env('baseUrl')}/?view=profile&name=${Cypress.env('userName')}`,
    );
    cy.wait('@profilePage');
    cy.get('input#loginPassword').should(
      'equal',
      `${Cypress.env('userPassword')}`,
    );
  });
});
