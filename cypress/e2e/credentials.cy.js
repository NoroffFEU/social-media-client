describe('inavlid credentials', () => {
  it('can not log in with invalid credentials and gets an error', () => {
    cy.visit('127.0.0.1:5500/index.html')
    cy.get("#loginForm").contains("Login").should("exist");

//loginform with invalid Email or password
    cy.get('#loginForm').should("be.visible")
    cy.get("#loginEmail").type("bademail@fail.com");

   //submit
    cy.get('#loginForm [type="submit"]').contains("Login").click();

    //shows an alert message
    cy.on ('window:alert', (text) => {
      cy.wrap(text).should('equal', 'Either your username was not found or your password is incorrect')

    });
    

    


  })
})