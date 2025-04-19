/// <reference types="cypress" />

describe('Authentication flow', () => {
  beforeEach(() => {
    // Clear any existing login state and visit home
    cy.clearLocalStorage();
    cy.visit('/');

    // Close Create Profile modal if it pops up
    cy.get('body').then(($body) => {
      if ($body.find('#registerModal.modal.show').length) {
        cy.get('#registerModal .btn-close').click({ force: true });
      }
    });
  });

  it('logs in with valid credentials', () => {
    // Open login modal
    cy.get('header .text-end button[data-auth="login"]')
      .first()
      .click({ force: true });

    // Ensure login modal is displayed
    cy.get('#loginModal').should('have.class', 'show');

    // Fill in valid credentials
    cy.get('#loginModal input#loginEmail').type(Cypress.env('VALID_EMAIL'), {
      force: true,
    });
    cy.get('#loginModal input#loginPassword').type(
      Cypress.env('VALID_PASSWORD'),
      { force: true }
    );

    // Submit and verify login
    cy.get('#loginForm button[type="submit"]').click({ force: true });
    cy.url().should('include', '?view=profile');
    cy.get('button[data-auth="logout"]').should('be.visible');
  });

  it('shows an error alert on invalid credentials', () => {
    // Open login modal
    cy.get('header .text-end button[data-auth="login"]')
      .first()
      .click({ force: true });

    // Fill in invalid credentials
    cy.get('#loginModal input#loginEmail').type('invalid@stud.noroff.no', {
      force: true,
    });
    cy.get('#loginModal input#loginPassword').type('wrongpassword', {
      force: true,
    });

    // Capture and assert the alert message
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal(
        'Either your username was not found or your password is incorrect'
      );
    });

    // Submit to trigger alert
    cy.get('#loginForm button[type="submit"]').click({ force: true });
  });

  it('logs out successfully and returns to home', () => {
    // First log in
    cy.get('header .text-end button[data-auth="login"]')
      .first()
      .click({ force: true });
    cy.get('#loginModal input#loginEmail').type(Cypress.env('VALID_EMAIL'), {
      force: true,
    });
    cy.get('#loginModal input#loginPassword').type(
      Cypress.env('VALID_PASSWORD'),
      { force: true }
    );
    cy.get('#loginForm button[type="submit"]').click({ force: true });

    // Ensure we're logged in
    cy.get('button[data-auth="logout"]').should('be.visible');

    // Click logout
    cy.get('button[data-auth="logout"]').click();

    // Verify return to home
    cy.url().should('eq', Cypress.config('baseUrl') + '/');

    // Close Create Profile modal if it pops up
    cy.get('body').then(($body) => {
      if ($body.find('#registerModal.modal.show').length) {
        cy.get('#registerModal .btn-close').click({ force: true });
      }
    });
  });
});
