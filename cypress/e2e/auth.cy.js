describe('Authentication Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('The user can log in with valid credentials', () => {
    cy.get('#loginEmail').type('valid@stud.noroff.no');
    cy.get('#loginPassword').type('validPassword123');
    cy.get('#login').click();

    cy.get('#logout').should('be.visible');
  });

  it('The user cannot log in with invalid credentials and sees an alert', () => {
    cy.get('#loginEmail').type('invalid@stud.noroff.no');
    cy.get('#loginPassword').type('wrongPassword');
    cy.get('#login').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Either your username was not found or your password is incorrect'
      );
    });
  });

  it('The user can log out with the logout button', () => {
    cy.get('#loginEmail').type('valid@stud.noroff.no');
    cy.get('#loginPassword').type('validPassword123');
    cy.get('#login').click();

    cy.get('#logout').click();

    cy.get('#login').should('be.visible');
  });
});
