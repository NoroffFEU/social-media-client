describe('Login test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
    cy.clearLocalStorage();
  });

  it('Can login', () => {
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
  });

  it("Can't login with invalid email input", () => {
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(1000);
    cy.get('#loginForm input[name=email]')
      .should('exist')
      .type('karla@hotmail.com', { force: true });
    cy.wait(1000);
    cy.get('#loginForm input[name=password]').should('exist').type('karla123');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.get("input[type='email']:invalid")
      .invoke('prop', 'validationMessage')
      .should('equal', 'Vennligst fyll ut dette feltet.');
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.setItem('token')).to.be.null);
    cy.then(() => expect(window.localStorage.setItem('profile')).to.be.null);
    cy.url().should('not.include', 'profile');
  });

  /* it("Can't login with invalid password input", () => {
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
    cy.get('#loginForm input[name=password]').should('exist').type('123');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem('token')).to.be.null);
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
  }); */
});
