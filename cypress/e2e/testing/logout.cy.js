describe('Logout test', () => {
  beforeEach(() => {
    cy.visit('./');
    cy.clearLocalStorage();
  });

  it('Can logout', () => {
    cy.wait(500);
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#loginForm input[name=email]')
      .should('exist')
      .type('karla@stud.noroff.no');
    cy.wait(1000);
    cy.get('#loginForm input[name=password]').should('exist').type('karla123');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
    cy.get("button[data-auth='logout']").should('be.visible').click();
    cy.then(() => expect(window.localStorage.getItem('token')).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem('profile')).to.not.be.null
    );
  });
});
