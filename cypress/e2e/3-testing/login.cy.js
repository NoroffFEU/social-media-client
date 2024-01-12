describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:6949/');
    cy.wait(500); // waiting for the modal to fully initialize
    cy.get('#modalLoginBtn').click();
  });

  it('fails to log in with invalid email', () => {
    cy.get('#loginEmail').should('be.visible').clear();
    cy.get('#loginEmail').type('test@test{enter}');

    // invalid email
    cy.get('#loginEmail').clear();
    cy.get('#loginEmail').type('error@test{enter}');
    cy.wait(600);

    //  valid email
    cy.get('#loginEmail').clear();
    cy.get('#loginEmail').type('arnetestkonto1@noroff.no{enter}');

    // invalid password
    cy.get('#loginPassword').should('be.visible').clear();
    cy.get('#loginPassword').type('errortest{enter}');
    cy.wait(600);

    //valid password
    cy.get('#loginPassword').clear();
    cy.get('#loginPassword').type('<zxcvbnm{enter}');

    // Checking that local storage has a profile- and token value
    cy.wait(500);
    cy.window().then(window => {
      const profile = window.localStorage.getItem('profile');
      const token = window.localStorage.getItem('token');
      expect(profile).to.not.be.null;
      expect(token).to.not.be.null;
    });

    // Clicking the logout button
    cy.get('button[data-auth="logout"]').click();
  });
});
