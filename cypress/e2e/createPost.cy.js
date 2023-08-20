describe("Login and validate user input", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://127.0.0.1:5555/");

    cy.wait(800);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });

    cy.wait(800);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("bobbyfrida@stud.noroff.no");

    cy.get("input[type='password']:visible")
      .should("exist")
      .type("bobbyfrida@stud.noroff.no");
    cy.get(".btn-success:visible").click({ force: true });

    cy.wait(800);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null,
    );
    cy.url().should("include", "profile");
  });

  it("It validates post title input", () => {
    cy.get("footer [data-visible='loggedIn']:visible")
      .contains("New Post")
      .click();

    cy.get("#postTitle:visible").should("exist");

    cy.get("#postTitle:visible").type("New blog post title");

    cy.get("#postTitle:visible").should("have.value", "New blog post title");

    cy.get("#postTags:visible").should("exist").type("Bob is your uncle");

    cy.get("#postMedia:visible")
      .should("exist")
      .type("https://picsum.photos/200/300");

    cy.get("#postBody:visible").should("exist").type("m0000");

    cy.get("span[data-action='publish']:visible").should("exist").click();

    cy.url().should("include", "post");
  });
});
