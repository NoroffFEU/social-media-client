describe('Login with credentials', () => {
  beforeEach(() => {
    cy.visit('./');
    if (window.localStorage.getItem('token')) {
      cy.clearLocalStorage();
    }
  });

  it('Logs in', () => {
    cy.visit('/');
    cy.wait(1000);

    cy.get(`#registerForm [data-auth="login"]`)
      .contains('Login')
      .should('exist')
      .click();
    cy.wait(1000);
    cy.get('input#loginEmail').type('MarHag76645@stud.noroff.no');
    cy.get('input#loginPassword').type('12345678');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.wait(1000);
    cy.get("button[data-auth='logout']").should('be.visible').click();
    cy.then(() => {
      expect(window.localStorage.getItem('token')).to.be.null;
    });
  });
});
