describe('The user can login', () => {
  beforeEach(() => {
    cy.visit('/');
    // Wait for elements to be visible before interacting with them
    cy.wait(1000)
    cy.get("button[data-bs-target='#loginModal']:visible").should('exist');
    cy.get("input[type='email']:visible").should('exist');
    cy.get("input[type='password']:visible").should('exist');
    cy.get('button[type="submit"]:visible').should('exist');
    cy.wait(1000)
  });

  it('should log in and access the user profile', () => {
    // Click the login button to open the login modal
    cy.get("#registerForm").find("button[data-bs-target='#loginModal']").click();
    // Fill in the login form
    cy.wait(1000)
    cy.get("input[type='email']:visible").type('DanDyr77157@stud.noroff.no');
    cy.get("input[type='password']:visible").type('password123');
    cy.get('button[type="submit"]:visible').click();
    // Check if the token is stored in localStorage after login
    cy.window().its('localStorage').should('have.property', 'token');
  });
});
