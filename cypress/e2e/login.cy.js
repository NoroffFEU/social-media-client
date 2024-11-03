describe('User Authentication Process', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');
    cy.log('Opened the homepage.');
    cy.wait(1000); // Wait for the page to load
  });

  it('should log in with correct credentials', () => {
    cy.log('Opening the login modal.');
    cy.get("button[data-bs-target='#loginModal']:visible").first().click();
    cy.wait(1000); // Wait for the login modal to appear

    cy.log('Entering a valid email and password.');
    cy.get("input[id='loginEmail']").type('eskander123@noroff.no', {
      force: true,
    });
    cy.screenshot('entered-valid-email');
    cy.get("input[id='loginPassword']").type('Eskander1', { force: true });
    cy.screenshot('entered-valid-password');

    cy.log('Submitting the login form.');
    cy.get("form#loginForm button[type='submit']").click({ force: true });
    cy.screenshot('submitted-login-form');

    // Check that the login worked by verifying the URL change
    cy.url().should(
      'not.eq',
      'https://norofffeu.github.io/social-media-client/'
    );
    cy.log('User logged in successfully.');
  });
});
