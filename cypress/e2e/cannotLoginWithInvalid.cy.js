describe("Invalid Login Attempt Handling", () => {
  beforeEach(() => {
    // Open the page and navigate to the login form
    cy.visit("./index.html")
    cy.get("#registerForm button[data-auth=login]").click()
    cy.get("#loginForm").should("be.visible")
  })

  const attemptLogin = (email, password) => {
    // Enter email and password, then submit
    cy.get("#loginEmail").type(email)
    cy.get("#loginPassword").type(password)
    cy.get("#loginForm button[type=submit]").click()
  }

  it("should display an error alert with invalid credentials", () => {
    // Attempt to log in with incorrect credentials
    attemptLogin("invalid@email.com", "invalidPassword")
    
    // Capture and validate the window alert
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal("Only Noroff student or teacher emails are valid.")
    })

    // Validate that the loginEmail field is flagged as invalid
    cy.get("#loginEmail:invalid").should("exist")
      .and("have.prop", "validationMessage")
  })
})
