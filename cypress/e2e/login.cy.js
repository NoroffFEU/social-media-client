describe('register user', () => {
  beforeEach(() => {
    cy.fixture('user').then(function (data) {
      this.data = data;
    });
  });

  it('register valid user', () => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/');

    cy.contains('Create Profile').click();
    cy.get(`input[name="name"]`).type(this.data.name);
    cy.get(`input[name="email"]`).type(this.data.email);
    cy.get(`input[name="password"]`).type(this.data.password);
    cy.get(`input[name="avatar"]`).type('');
    //
  });
  it('register valid user', () => {
    cy.visit('https://rohitamdahl.github.io/social-media-client-ca/');
    wait(500);

    cy.get(`input[name="email"]'`).type(this.data.email);
    cy.get(`input[name="password"]`).type(this.data.password);
    cy.get('.btn btn-success').click();
  });
});
