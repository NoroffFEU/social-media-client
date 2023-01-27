describe('logout', () => {
  beforeEach(() => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/');
    cy.clearLocalStorage();
  });
  it('logout after you login and after logout its will clear the local storage', () => {
    cy.title().should('contain', 'Client');
    cy.title().should('eq', 'Test Client');
    cy.get('#registerForm .btn-close:visible').click();
    cy.wait(2000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(2500);
    cy.get("input[type='email']:visible")
      .type('rohit_kumar@stud.noroff.no')
      .should('have.value', 'rohit_kumar@stud.noroff.no');
    cy.get('#loginForm #loginPassword')
      .type('rohit123456')
      .should('have.value', 'rohit123456');
    cy.get('.btn-success:visible').click();
    cy.wait(2900);
    cy.get("button[data-auth='logout']:visible").click();
    cy.clearLocalStorage();
  });
});
