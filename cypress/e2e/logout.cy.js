describe('User Logout', () => {
  it('logs the user out when clicking the logout button', () => {
    cy.visit('http://127.0.0.1:5500/');

    cy.wait(1000);

    cy.get('[data-auth=login]').eq(1).click();

    cy.wait(1000);

    // Fill out the login form
    cy.get('#loginEmail').type('testUserThree.stud@noroff.no');
    cy.get('#loginPassword').type('TestUser3');
    cy.get('#loginForm').submit();

    // Accesses the profile page
    cy.url().should('include', 'view=profile');

    // Clicks on the logout button
    cy.get('[data-auth=logout]').click();

    // Get error message and check if contains incorrect info
    cy.get('#registerForm').should('be.visible');
    
  });
});