describe("http://localhost:5173/", () => {
    it("can search for Noroff", () => {
      cy.visit("http://localhost:5173/");
      cy.wait(400)
      cy.get('#registerModal').contains('Login').click()
      cy.wait(200)
      cy.get('input#loginEmail').type('test12@noroff.no', {delay: 100})
      cy.get('input#password').type('testtest1', {delay: 100})
    })
  })