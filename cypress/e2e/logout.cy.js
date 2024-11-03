describe('Logout Functionality', () => {
  beforeEach(() => {
    cy.visit('https://norofffeu.github.io/social-media-client/');
    cy.log('Opened the homepage.');
    cy.wait(1000); // Wait for the page to load

    // Log in to set up the logout test
    cy.log('Opening the login modal.');
    cy.get("button[data-bs-target='#loginModal']:visible").first().click();
    cy.wait(1000); // Wait for the login modal to appear

    cy.log('Entering valid email and password.');
    cy.get("input[id='loginEmail']").type('eskander123@noroff.no', {
      force: true,
    });
    cy.get("input[id='loginPassword']").type('Eskander1', { force: true });

    cy.log('Submitting the login form.');
    cy.get("form#loginForm button[type='submit']").click({ force: true });
    cy.wait(1000); // Wait for the login process to finish

    // Check that the token is in localStorage
    cy.log('Checking if the token is in localStorage.');
    cy.window().then((window) => {
      const token = window.localStorage.getItem('token');
      expect(token).to.exist;
      cy.log('Token found in localStorage: ' + token);
    });
  });

  it('should log the user out when the logout button is clicked', () => {
    cy.log('Clicking the logout button.');
    // Click the logout button
    cy.get("button[data-auth='logout']").click({ force: true });
    cy.screenshot('logout-button-clicked');

    // Check that the token is removed from localStorage
    cy.log('Making sure the token is removed from localStorage.');
    cy.window().then((window) => {
      const token = window.localStorage.getItem('token');
      expect(token).to.be.null;
      cy.log('Token removed from localStorage.');
    });
    cy.screenshot('local-storage-cleared');

    // Check that the user is redirected to the homepage
    cy.log('Checking if the user is redirected to the homepage.');
    cy.url().should('include', '/');
    cy.screenshot('redirected-to-homepage');
  });
});
