describe("no.wikipedia.org", () => {
    it("can search for Åke Ek", () => {
      cy.visit("https://no.wikipedia.org");
      cy.get("input#searchInput").type("Åke Ek{enter}", { delay: 500 });
      cy.get('h1').contains("Åke")
    })
  })