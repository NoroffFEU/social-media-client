describe('Login', () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  beforeEach(() => {
    // navigate to login page
  });
  it('User should navigate to main screen', () => {
    Cypress.config('baseUrl', 'http://127.0.0.1:8080/');
    cy.visit('/');
    cy.wait(3000);
    cy.get('#loginButtonOnTheHeader', { timeout: 100000 })
      .should('be.visible')
      .click();
    // cy.get('#loginEmail', { timeout: 600000 })
    // .type('Ethmane.Bilal@stud.noroff.no', { delay: 1000 });
    cy.get('#loginEmail').invoke('val', 'Ethmane.Bilal@stud.noroff.no');
    cy.get('#loginPassword', { timeout: 10000 }).type('qwerldskfjls23');
    cy.get('#btnLoginSubmit', { timeout: 10000 }).click();

    //cy.get('#loginEmail').invoke('val', 'log@stud.noroff.no');

    // assert that user is logged in
    cy.url().should(
      'include',
      '/?email=Ethmane.Bilal%40stud.noroff.no&password='
    );
    // cy.get('h1').should('contain', 'Welcome, user@example.com');
  });

  
});
