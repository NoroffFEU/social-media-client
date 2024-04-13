describe("Login Test", () => {
      it("should open the login form", () => {
            cy.OpenLogInForm()
            cy.loginWithValidUser()
            cy.IsLoggedIn()
      })
})
