/* eslint-disable no-undef */
describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');

    cy.window().then((win) => {
      win.localStorage.clear();
    });
  });

  it('should log in with valid credentials', () => {
    cy.intercept('POST', '/social/auth/login', {
      statusCode: 200,
      body: {
        name: 'John Doe',
        email: 'test@example.com',
        accessToken: 'abc123',
      },
    }).as('loginRequest');

    cy.get('[data-bs-toggle="modal"][data-auth="login"]').click();
    cy.get('#loginEmail').type('test@example.com', { force: true });
    cy.get('#loginPassword').type('password123', { force: true });
    cy.get('#loginForm').submit({ force: true });

    cy.wait('@loginRequest').then(() => {
      cy.window().then((win) => {
        win.localStorage.setItem('token', 'abc123');
        win.localStorage.setItem(
          'profile',
          JSON.stringify({
            name: 'John Doe',
            email: 'test@example.com',
          })
        );
      });
    });

    cy.url().should(
      'include',
      'https://norofffeu.github.io/social-media-client/'
    );
    cy.get('.welcome-message').should('contain', 'Welcome, John Doe');
  });

  it('should show an error message for invalid credentials', () => {
    cy.intercept('POST', '/social/auth/login', {
      statusCode: 401,
      body: {
        message:
          'Either your username was not found or your password is incorrect',
      },
    }).as('loginRequest');

    cy.get('[data-bs-toggle="modal"][data-auth="login"]').click();
    cy.get('#loginEmail').type('invalid@example.com', { force: true });
    cy.get('#loginPassword').type('wrongpassword', { force: true });
    cy.get('#loginForm').submit({ force: true });

    cy.wait('@loginRequest');
    cy.get('.error-message')
      .should('be.visible')
      .and(
        'contain',
        'Either your username was not found or your password is incorrect'
      );
    cy.url().should('not.include', '/profile');
  });
});
