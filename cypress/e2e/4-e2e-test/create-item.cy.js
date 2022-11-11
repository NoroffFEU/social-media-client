describe("no.wikipedia.org", () => {
    it("Check if user can log in", () => {
      cy.visit("http://127.0.0.1:5501/index.html");
      cy.wait(1000);
      cy.get('[data-cy="login-btn"]').click({ delay: 200 });
      cy.wait(1000);
      cy.get('#loginEmail').type("audun@stud.noroff.no", {delay: 200});
      cy.get('#loginPassword').type("Audun123", {delay: 200});
      cy.get('[data-cy="login-button"]').click({delay: 200});
      cy.wait(1000);
      cy.get('[data-cy="create-btn"]').click({delay: 200});
      cy.wait(300);
      cy.get('#postTitle').type("Cats", {delay: 200});
      cy.get('#postTags').type("tagss", {delay: 200});
      cy.get('#postMedia').type("https://i.ytimg.com/vi/piFZvpMe_K8/mqdefault.jpg", {delay: 200});
      cy.get('#postBody').type("cool cat", {delay: 200});
      cy.get('.flex-wrap > .btn').click({delay: 500});

    })
  })
