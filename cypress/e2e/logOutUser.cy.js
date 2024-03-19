describe("Log out user test", () => {
  beforeEach(() => {
    cy.visit("./index.html")
    cy.wait(1000)
    cy.get("#registerForm").find("button[data-auth=login]").click()
    cy.wait(1000)
    cy.get("#loginForm").should("be.visible")
  })

  const login = (username, password) => {
    cy.get(".modal-content #loginEmail").type(username)
    cy.get("#loginPassword").type(password)
    cy.get("#loginForm button[type=submit]").click()
  }

  it("logs in", () => {
    login("jonnes@stud.noroff.no", "workflowCA")
    cy.wait(1000)
    cy.get(".profile").should("be.visible")
    cy.wait(1000)

    // Perform logout

    cy.get("header").find("button[data-auth=logout]").click()

    // Check that the user is logged out

    cy.wait(1000)
    cy.window().then((win) => {
      const user = win.localStorage.getItem("profile")
      expect(user).to.not.exist

      const authToken = win.localStorage.getItem("token")
      expect(authToken).to.be.null
    })
  })
})
