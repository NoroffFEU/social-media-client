describe('auth login', () => {
  beforeEach(() => {
    it('closing resister form and should click the login in from header', () => {
      cy.visit('https://rohitamdahl.github.io/social-media-client-ca/', {
        delay: 500,
      });
      cy.get('#registerForm .btn-close').click();
      cy.get(`header button[data-auth="login"]`).click();
    });
  });
  it('logging valid user', () => {
    cy.get(`#loginForm button[type="submit"]`).click();
    cy.url().should(
      'include',
      'https://rohitamdahl.github.io/social-media-client-ca/?view=profile',
      { delay: 1000 }
    );
    cy.get('#loginForm #loginEmail').type('tiger_User@stud.noroff.no');
    cy.get('#loginForm #loginPassword').type('tiger_User223');
    cy.getAllLocalStorage().then((storage) =>
      expect(
        storage[`https://rohitamdahl.github.io/social-media-client-ca/`].token
      ).to.have.length.greaterThan(10)
    );
  });

  it('cannot submit the login form with invalid credentials', () => {
    cy.get('#loginForm #loginEmail').type('tiger_user@stud.noroff.com');
    cy.get('#loginForm #loginPassword').type('tiger_User223');

    cy.on('window:alert', (alert) =>
      expect(alert).to.be.equal('username or password is incorrect')
    );
    cy.get(`#loginForm button[type="submit"]`).click();
  });
});
