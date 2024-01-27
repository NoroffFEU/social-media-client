describe('Successful login with valid email and password', () => {
  beforeEach(() => {
    cy.visit('index.html');
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get('form#registerForm').within(() => {
      cy.get("button[data-bs-target='#loginModal']").click();
    });
    cy.wait(2000);
  });

  it('Successful logout', () => {
    cy.login('testemail12345@noroff.no', '12345678');

    cy.get(window.localStorage.getItem('profile')).should('not.be.empty');
    cy.get(window.localStorage.getItem('token')).should('not.be.empty');

    cy.wait(1000);

    cy.get("button[data-auth='logout']:visible").click();

    cy.wait(2000);

    cy.window().its('localStorage.profile').should('not.exist');
    cy.window().its('localStorage.token').should('not.exist');

    cy.window().then((window) => {
      expect(window.localStorage.getItem('profile')).to.be.null;
      expect(window.localStorage.getItem('token')).to.be.null;
    });
  });
});
