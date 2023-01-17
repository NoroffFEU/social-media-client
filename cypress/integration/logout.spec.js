/* eslint-disable no-undef */
// logout.spec.js
import { login } from './helpers';

describe('Logout feature', () => {
  beforeEach(() => {
    // Log in before each test
    login('valid@email.com', 'validpassword');
  });

  it('allows the user to log out', () => {
    cy.get('a.logout').click();
    cy.url().should('include', '/login');
    cy.get('.message').should('contain', 'You have been logged out');
  });
});
