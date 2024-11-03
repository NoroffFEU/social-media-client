describe('Profile Page Navigation and Validation', () => {
  beforeEach(() => {
    // Open the homepage and log in
    cy.visit('https://norofffeu.github.io/social-media-client/');
    cy.log('Opened the homepage.');
    cy.wait(1000); // Wait for the page to load

    // Log in
    cy.log('Opening the login modal.');
    cy.get("button[data-bs-target='#loginModal']:visible").first().click();
    cy.wait(1000); // Wait for the login modal to appear

    cy.log('Typing in valid email and password.');
    cy.get("input[id='loginEmail']").type('eskander123@noroff.no', {
      force: true,
    });
    cy.get("input[id='loginPassword']").type('Eskander1', { force: true });

    cy.log('Submitting the login form.');
    cy.get("form#loginForm button[type='submit']").click({ force: true });
    cy.wait(1000); // Wait for login to finish

    // Check that the user is logged in
    cy.url().should(
      'not.eq',
      'https://norofffeu.github.io/social-media-client/'
    );
    cy.log('User logged in successfully.');
  });

  it('should navigate to the profile page and show the username', () => {
    // Click the username to go to the profile page
    cy.log('Clicking the username to go to the profile page.');
    cy.get("a[href*='?view=profile']").click();
    cy.wait(1000); // Wait for the profile page to load
    cy.screenshot('profile-page-loaded');

    // Check that the username is displayed
    cy.log('Checking that the username is shown.');
    cy.get('h4.profile-name').should('contain.text', 'Eskande');
    cy.screenshot('username-validated');
  });
});
