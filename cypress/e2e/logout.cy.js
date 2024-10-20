describe("User Login and Logout Test", () => {
  beforeEach(() => {
    // Visit the home page and open the login form
    cy.visit("./index.html")
    cy.get("#registerForm button[data-auth=login]").click()
    cy.get("#loginForm").should("be.visible")
  })

  const login = (username, password) => {
    // Fill in login form and submit
    cy.get(".modal-content #loginEmail").type(username)
    cy.get("#loginPassword").type(password)
    cy.get("#loginForm button[type=submit]").click()
  }

  it("logs in and logs out successfully", () => {
    // Log in with valid credentials
    login("nabil@noroff.no", "123456789")
    
    // Ensure profile section is visible after login
    cy.get(".profile").should("be.visible")

    // Perform logout by clicking the logout button
    cy.get("header button[data-auth=logout]").click()

    // Ensure the user is logged out by checking localStorage for removed items
    cy.window().then((win) => {
      expect(win.localStorage.getItem("profile")).to.be.null
      expect(win.localStorage.getItem("token")).to.be.null
    })

    // Optionally check if the login form is visible again after logout
    cy.get("#loginForm").should("be.visible")
  })
})
