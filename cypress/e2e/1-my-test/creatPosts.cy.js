describe("no.wikipedia.org", () => {
  it("can search for Noroff", () => {
    // login user
    cy.visit("http://127.0.0.1:5501/");
    cy.wait(2000);
    cy.get("div.modal-footer > .btn-outline-success")
      .eq(1)
      .click({ force: true });
    cy.wait(500);
    cy.get("input#loginEmail").type("Samzay78936@stud.noroff.no"),
      { delay: 1000 };
    cy.get("input#loginPassword").type("samah1234{enter}"), { delay: 1000 };
    cy.wait(1000);
    // New post and img
    cy.get("a.btn-outline-success").click({ force: true });
    cy.wait(200);
    cy.get("textarea#postBody").type("Post body"), { delay: 1000 };
    cy.get("input#postTitle").type("Samah title"), { delay: 1000 };
    cy.get("#postMedia")
      .clear()
      .type(
        "https://images.photowall.com/products/67775/red-squirrels.jpg?h=380&q=75"
      );
    cy.get(".btn-success").contains("Publish").click({ force: true });
  });
});
