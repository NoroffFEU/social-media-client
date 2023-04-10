describe("http://localhost:5173/", () => {
    it("can search for Noroff", () => {
      cy.visit("http://localhost:5173/");
      cy.wait(400)
      cy.get('#registerModal').contains('Login').click()
      cy.wait(500)
      cy.get('input#loginEmail').type('type{enter}')
      cy.get('input#loginPassword').type('test1234')
      cy.get('#loginForm').submit()
    })
  })