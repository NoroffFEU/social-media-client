describe('Authentication Tests', () => {
  // Ignore uncaught exceptions from the application
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test due to uncaught exceptions
    if (
      err.message.includes("Cannot read properties of null (reading 'hide')")
    ) {
      return false; // Ignore this specific error
    }
    return true; // Allow other exceptions to fail the test
  });

  beforeEach(() => {
    // Visit the web application
    cy.visit('http://127.0.0.1:5501/index.html');

    // Remove any existing modals and backdrops directly from the DOM
    cy.document().then((doc) => {
      const modal = doc.querySelector('#registerModal');
      const backdrop = doc.querySelector('.modal-backdrop');

      if (modal) modal.remove(); // Completely remove the modal from the DOM
      if (backdrop) backdrop.remove(); // Remove the backdrop directly
    });

    // Wait for a short delay to ensure elements are removed
    cy.wait(500);

    // Click the login button by forcing the click
    cy.contains('button', 'Login').click({ force: true });

    // Wait for the login modal to become visible
    cy.get('#loginModal').should('be.visible');
  });

  // Test case: The user can log in with valid credentials
  it('should allow the user to log in with valid credentials', () => {
    // Fill in login credentials with a delay, force, and wait for stabilization
    cy.get('#loginEmail')
      .clear()
      .wait(1000) // Increase wait time after clearing the field
      .focus() // Focus the email field before typing
      .type('validuser@noroff.no', { delay: 100, force: true })
      .should('have.value', 'validuser@noroff.no'); // Ensure email is typed correctly

    cy.get('#loginPassword').type('validpassword123', { delay: 100 });

    // Click the login button
    cy.get('#loginForm button[type="submit"]').click();

    // Wait for the logout button to appear (extended timeout to handle async operations)
    cy.get('button[data-auth="logout"]', { timeout: 10000 }).should(
      'be.visible',
    );
  });

  // Test case: The user cannot submit the login form with invalid credentials
  it('should not allow the user to log in with invalid credentials and show an error message', () => {
    // Fill in invalid login credentials with a delay and force typing
    cy.get('#loginEmail')
      .clear()
      .wait(1000) // Increase wait time after clearing the field
      .focus()
      .type('invaliduser@noroff.no', { delay: 100, force: true })
      .should('have.value', 'invaliduser@noroff.no');

    cy.get('#loginPassword').type('invalidpassword', { delay: 100 });

    // Intercept the login API request
    cy.intercept('POST', '**/auth/login').as('loginRequest');

    // Click the login button
    cy.get('#loginForm button[type="submit"]').click();

    // Wait for the login request to complete and check the 401 response
    cy.wait('@loginRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(401); // Assert 401 Unauthorized
    });

    // Handle browser alert (this is where the message appears)
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });

  // Test case: The user can log out with the logout button
  it('should allow the user to log out with the logout button', () => {
    // First, log in with valid credentials
    cy.get('#loginEmail')
      .clear()
      .wait(1000) // Increase wait time after clearing the field
      .focus()
      .type('validuser@noroff.no', { delay: 100, force: true })
      .should('have.value', 'validuser@noroff.no');

    cy.get('#loginPassword').type('validpassword123', { delay: 100 });

    cy.get('#loginForm button[type="submit"]').click();

    // Wait for the logout button to appear
    cy.get('button[data-auth="logout"]', { timeout: 10000 }).should(
      'be.visible',
    );

    // Wait for 2 seconds to ensure any state transitions are completed
    cy.wait(2000);

    // Click the logout button
    cy.get('button[data-auth="logout"]').click();

    // Wait for the page to load after logging out
    cy.wait(1000); // Wait for page transition

    // Check if the modal reappears and remove it if necessary
    cy.document().then((doc) => {
      const modal = doc.querySelector('#registerModal');
      const backdrop = doc.querySelector('.modal-backdrop');
      if (modal) modal.remove(); // Ensure the modal is removed after logout
      if (backdrop) backdrop.remove(); // Ensure the backdrop is removed
    });

    // Assert that the login button reappears after logging out
    cy.contains('button', 'Login', { timeout: 10000 }).should('be.visible');
  });
});
