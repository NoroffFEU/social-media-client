describe("login testing", () => {
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

  it("should show error messages with invalid credentials", () => {
    login("not@email.com", "notApassword")
    cy.wait(1000)

    cy.on("window:alert", (str) => {
      expect(str).equal("Only Noroff student or teacher emails are valid.")
    })

    cy.get("input:invalid#loginEmail")
      .invoke("prop", "validationMessage")
      .should("exist")
  })
})
