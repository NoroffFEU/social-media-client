describe("http://localhost:5173/", () => {
    it("can search for Noroff", () => {
      cy.visit("http://localhost:5173/");
      cy.wait(400)
      cy.get('#registerModal').contains('Close').click()
      cy.get('#')
    })
  })