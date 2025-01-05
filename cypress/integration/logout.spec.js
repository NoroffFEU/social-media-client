describe("Logout Functionality", () => {
  beforeEach(() => {
    cy.showHome();
  });

  /* Checks if the user has been logged out */
  it("should successfully log out the user", () => {
    cy.showLoginForm(); 
    cy.loginUser(); 
    cy.isLoggedIn(); 
    cy.logout();
    cy.isLoggedOut(); 
    cy.showHome();
  });
});
