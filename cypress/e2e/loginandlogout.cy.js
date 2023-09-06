describe('login form can login in and out', () => {
  it('logs in and out with right credentials', () => {
    cy.visit('127.0.0.1:5500/index.html')
    cy.get("#loginForm").contains("Login").should("exist");
//fill in the rights credentials

    cy.get('#loginForm').should("be.visible")
    cy.get("#loginEmail").should("be.visible").type("JonFae43817@stud.noroff.no");

    cy.get("#loginPassword").should("be.visible").type("Password123");
   
   //clicks login button
    cy.get('#loginForm [type="submit"]').contains("Login").click();
//checks if new page is the profilepage
    cy.url().should('match', /\/Profile$/);
//checks that the user can log out
    cy.get(".btn").contains("Logout").should("exist").click();









  })
})