describe('Handling Invalid Login Attempts', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');
    cy.log('Opened the Social Media Client main page.');
    cy.wait(1000); // Wait for the page to load
  });

  it('should show an alert for incorrect login details', () => {
    cy.log('Opening the login modal.');
    cy.get("button[data-bs-target='#loginModal']:visible").first().click();
    cy.wait(1000); //  Allow time for the login modal to appear

    cy.log('Typing an incorrect email and password.');
    cy.get("input[id='loginEmail']").type('123@example.no', { force: true });
    cy.screenshot('inputting-incorrect-email');
    cy.get("input[id='loginPassword']").type('testing123', { force: true });
    cy.screenshot('inputting-incorrect-password');

    cy.log('Submitting the login form.');
    cy.get("form#loginForm button[type='submit']").click({ force: true });
    cy.wait(1000); // Allow time for the alert to appear

    // Check for the alert message
    cy.log('Checking for the alert indicating login failure.');
    cy.on('window:alert', (text) => {
      cy.log('Captured alert: ' + text);
      expect(text).to.contain(
        'Either your username was not found or your password is incorrect'
      );
      cy.screenshot('alert-captured');
    });
  });
});
