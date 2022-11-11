describe("no.wikipedia.org", () => {
  it("can search for Noroff", () => {
    // login
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(2000);
    cy.get("div.modal-footer > .btn-outline-success")
      .eq(1)
      .click({ force: true });
    cy.wait(500);
    cy.get("input#loginEmail").type("SheHas77920@stud.noroff.no"),
      { delay: 1000 };
    cy.get("input#loginPassword").type("Sherzad2428{enter}"), { delay: 1000 };
    cy.wait(1000);
    // New post
    cy.get("a.btn-outline-success").click({ force: true });
    cy.wait(200);
    cy.get("input#postTitle").type("Sherzad test title"), { delay: 1000 };
    cy.get("textarea#postBody").type("Sherzad test body"), { delay: 1000 };
    cy.get("#postMedia")
      .clear()
      .type(
        "	https://www.guru-utvikling.no/wp-content/uploads/2017/05/Bilde-til-sak-om-bilder.jpg"
      );
    cy.get(".btn-success").contains("Publish").click({ force: true });
  });
});
