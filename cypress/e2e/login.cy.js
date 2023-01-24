describe('auth login', () => {
  beforeEach(() => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/');
    cy.get('#registerForm .btn-close').click();
  });

  it('logging valid user', () => {
    cy.get(`#loginForm button[type="submit"]`).click();
    cy.url().should(
      'include',
      'https://rohitamdahl.github.io/social-media-client-ca/?view=profile'
    );
    cy.get('#loginEmail').type('test_User258@stud.noroff.no');
    cy.get('#loginForm #loginPassword').type('test_User123');
    cy.getAllLocalStorage().then((storage) =>
      expect(
        storage[`https://rohitamdahl.github.io/social-media-client-ca/`].token
      ).to.have.length.greaterThan(1)
    );
  });
  it('cannot submit the login form with invalid credentials', () => {
    cy.get('#loginForm #loginPassword').type('1test_user123');
    cy.on('window:alert', (alert) =>
      expect(alert).to.equal('Either username or password is incorrect')
    );
    cy.get(`#loginForm button[type="submit"]`).click();
  });
});
