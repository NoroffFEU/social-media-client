describe("no.wikipedia.org", () => {
    it("Check if user can log in", () => {
      cy.visit("http://127.0.0.1:5501/index.html");
      cy.wait(1000);
      cy.get('[data-cy="login-btn"]').click({ delay: 500 });
      cy.wait(1000);
      cy.get('#loginEmail').type("audun@stud.noroff.no", {delay: 500});
      cy.get('#loginPassword').type("Audun123", {delay: 500});
      cy.get('[data-cy="login-button"]').click({delay: 500});
      
    })
  })

