describe('Login', () => {
  it('logs in with a registered user', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get("#loginEmail").type("mirdahl53192@stud.noroff.no")
    cy.get("#loginPassword").type("validCredentials")
    cy.wait(500)
    cy.get("#loginForm .modal-footer button").contains("Login").click()
    cy.wait(500)
    cy.visit('/')
  })
  it('can not log if if the user does not exist', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get("#loginEmail").type("incorrect@nothing.com")
    cy.get("#loginPassword").type("invalidCredentials")
    cy.wait(500)
    cy.get("#loginForm .modal-footer button").contains("Login").click()
    cy.wait(500)
  }),
  it('logs out when button is clicked', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get(".text-end button").contains("Logout").click()
  })
})