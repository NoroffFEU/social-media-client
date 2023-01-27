// cypress/e2e/.spec.js
import cy from 'cypress'; // import cy object

describe('My Feature', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('http://127.0.0.1:8080/login');
  });

  it('displays the correct title', () => {
    cy.title().should('equal', 'My App - Login');
  });

  it('has a button that when clicked, displays a message', () => {
    cy.get('button').click();
    cy.get('.message').should('contain', 'Hello World!');
  });
});
