import 'cypress-testing-library/add-commands';
import cy from 'cypress';

import 'dotenv/config';
import process from 'process-env';

process.env.NODE_ENV = 'test';

describe('Logout', () => {
  beforeEach(() => {
    // log in before each test
    cy.login('valid@email.com', 'validpassword');
  });

  it('The user can log out of the application', () => {
    // be navigate to the logout page
    cy.visit('/logout');
    // sure assert that the user is logged out
    cy.url().should('include', '/login');
    cy.get('.message').should('contain', 'You have been logged out');
  });

  it('The user can log out of the application even when the API_URL is not set', () => {
    // here I am unset the API_URL variable
    process.env.API_URL = undefined;
    // be  navigate to the logout page
    cy.visit('/logout');
    //sure  assert that the user is logged out
    cy.url().should('include', '/login');
    cy.get('.message').should('contain', 'You have been logged out');
  });
});
