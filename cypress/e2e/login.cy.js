describe('User Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');
  });

  it('should successfully log in with valid credentials', () => {
    cy.get('#loginEmail').type('validUser@noroff.no', { force: true });
    cy.get('#loginPassword').type('validPassword', { force: true });
    cy.get('#loginForm').submit({ force: true });
  });

  it('should log out and redirect to the homepage', () => {
    cy.get('button[data-auth="logout"]').click({ force: true });
    cy.url().should('eq', 'https://norofffeu.github.io/social-media-client/');
  });
});

describe('Error Handling During Login', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');
  });

  it('should display an error message when logging in with invalid credentials', () => {
    cy.get('#loginEmail').type('sindretest@stud.noroff.no', { force: true });
    cy.get('#loginPassword').type('12345678', { force: true });
    cy.get('#loginForm').submit({ force: true });

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
