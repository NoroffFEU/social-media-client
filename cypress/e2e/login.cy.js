describe("Login Test with Valid Credentials", () => {
  beforeEach(() => {
    // Visit the page and navigate to the login form
    cy.visit("./index.html")
    cy.get("#registerForm button[data-auth=login]").click()
    cy.get("#loginForm").should("be.visible")
  })

  const performLogin = (email, password) => {
    // Fill in email and password and submit
    cy.get("#loginEmail").type(email)
    cy.get("#loginPassword").type(password)
    cy.get("#loginForm button[type=submit]").click()
  }

  it("should log in successfully with valid credentials", () => {
    // Perform login with valid credentials
    performLogin("nabil@noroff.no", "123456789")

    // Verify that the profile is displayed after login
    cy.get(".profile").should("be.visible")

    // Validate that the user profile and token are stored in localStorage
    cy.window().then((win) => {
      const storedProfile = win.localStorage.getItem("profile")
      expect(storedProfile).to.exist

      const storedToken = win.localStorage.getItem("token")
      expect(storedToken).to.exist
    })
  })
})
