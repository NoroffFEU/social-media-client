describe('login user', () => {
  it('can log a user in', () => {
    cy.visit('http://localhost:5501');
    cy.get('input#registerEmail').type('ThoJen84480@stud.noroff.no{enter}');
    cy.get('input#registerPassword').type('!Yzems225{enter}');
    cy.get('form#registerForm.modal-content button.btn.btn-outline-success')
      .click;
    cy.get('#loginModal.modal.fade').invoke('css', 'display', 'block');
    cy.get('input#registerName').invoke('css', 'display', 'none');
    cy.get('input#registerEmail').invoke('css', 'display', 'none');
    cy.get('#registerModal').invoke('css', 'display', 'none');
    cy.get('.modal-header').invoke('css', 'display', 'none');
    cy.get('input#loginEmail').type('ThoJen84480@stud.noroff.no{enter}');
    cy.get('input#loginPassword').type('!Yzems225{enter}');
    cy.get('form#loginForm.modal-content button.btn.btn-success').click;
  });
});
