describe('Authentication Tests', () => {

  beforeEach(() => {
    // Navigate to the website before each test
    cy.visit('index.html');
  });

  it('The user can log in and access their profile', () => {
    cy.get('button[data-auth="login"]').click({ multiple: true });
    cy.get('#loginEmail').type('ramtin@stud.noroff.no'); // Type the user's email
    cy.get('#loginPassword').type('123456789'); // Type the user's password
    cy.get('#loginForm button[type="submit"]').click(); // Click the login submit button
  });

  it('The user cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.get('button[data-auth="login"]').click({ multiple: true });
    cy.get('#loginEmail').type('mamfsdj@stud.noroff.no'); // Type an invalid email
    cy.get('#loginPassword').type('45848fasdf'); // Type an invalid password
    cy.get('#loginForm button[type="submit"]').click(); // Click the login submit button
    // Check for the error message. This assumes there's an element with the 'error' class that displays error messages.
    cy.get('.error').should('be.visible').and('contain', 'Invalid credentials');
  });

  it('The user can log out with the logout button', () => {
    // Assume the user is already logged in
    cy.get('button[data-auth="logout"]').click(); // Click the logout button
    cy.get('button[data-auth="login"]').should('be.visible'); // Check if the login button is visible, indicating a successful logout
  });

});


