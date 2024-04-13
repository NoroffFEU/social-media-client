describe("Login Test", () => {
      it("should try to log in with invalid credentials and check for alert", () => {
            cy.OpenLogInForm()
            cy.loginWithUnvalidUser()
            cy.on("window:alert", (text) => {
                  expect(text).to.contains("Invalid credentials")
            })
      })
})
