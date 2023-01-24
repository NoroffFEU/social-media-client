describe('auth login', () => {
  beforeEach(() => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/');

    cy.get('#registerForm .btn-close').click();
    wait(500);
  });

  it('register valid user', () => {
    //
  });
  it('logging valid user', () => {
    cy.get(`#loginForm button[type="submit"]`).click();
    cy.url().should(
      'include',
      'https://rohitamdahl.github.io/social-media-client-ca/?view=profile'
    );
    cy.get(`input[name="email"]'`).type('testUser@stud.noroff.no');
    cy.get('#loginForm #loginPassword').type('testUser123');
    cy.getAllLocalStorage().then((storage) =>
      expect(storage[`${baseUrl}`].token).to.have.length.greaterThan(1)
    );
  });
});
