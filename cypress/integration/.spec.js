describe('My Feature', () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.visit('http://127.0.0.1:8080/login');
  });

  it('displays the correct title', () => {
    // Assert that the title of the page is correct
    cy.title().should('equal', 'My Feature - My App');
  });

  it('has a button that when clicked, displays a message', () => {
    // Find the button and click it
    cy.get('button').click();

    // Assert that the message is displayed
    cy.get('.message').should('contain', 'Button clicked!');
  });
});
