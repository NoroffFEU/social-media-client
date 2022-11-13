describe('Login test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173');
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

  it("Can't login with invalid email", () => {
    cy.wait(500);
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(500);
    cy.get('#loginForm input[name=email]')
      .should('exist')
      .type('k@stud.noroff.no');
    cy.wait(1000);
    cy.get('#loginForm input[name=password]').type('karla123');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
  });

  it("Can't login with invalid password", () => {
    cy.wait(500);
    cy.get('#registerModal button')
      .contains('Login')
      .should('be.visible')
      .click();
    cy.wait(500);
    cy.get('#loginForm input[name=email]')
      .should('exist')
      .type('karla@stud.noroff.no');
    cy.wait(1000);
    cy.get('#loginForm input[name=password]').type('wongpsw');
    cy.wait(500);
    cy.get('#loginForm button').contains('Login').should('be.visible').click();
    cy.then(() => expect(window.localStorage.getItem('profile')).to.be.null);
  });
});
