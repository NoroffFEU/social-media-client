describe("Logout function", () => {
      it("Logs in the user and log out.", () => {
            cy.OpenLogInForm()
            cy.loginWithValidUser()
            cy.IsLoggedIn()
            cy.wait(1000)
            cy.get('button[data-auth="logout"]').click()
            cy.IsLoggedOut()
      })
})
