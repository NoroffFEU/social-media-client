describe("Workflow Media App", () => {
  beforeEach("login", () => {
    cy.visit("http://127.0.0.1:5501");
    cy.get("header [data-auth='register']").click({ force: true });
    cy.get("form button").contains("Create Profile").should("be.visible");
    cy.wait(500);

    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .click({ delay: 1000 });

    cy.wait(500);

    cy.get("#loginEmail").type("PnordboTest@noroff.no", {
      force: true,
      delay: 100,
    });

    cy.wait(500);

    cy.get("#loginPassword").type("220197Pn", { delay: 100 });
    cy.wait(500);

    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.wait(3000);
  });

  it("CAN create a post", () => {
    cy.get("footer [data-visible='loggedIn']")
      .contains("New Post")
      .should("be.visible")
      .click({ delay: 1000 });
    cy.wait(500);
    cy.wait(3000);

    cy.get("#postTitle")
      .should("be.visible")
      .type("Test Post", { force: true, delay: 100 });
    cy.get("#postTags").should("be.visible").type("Test", {
      force: true,
      delay: 100,
    });
    cy.get("#postMedia")
      .should("be.visible")
      .type(
        "https://banner2.cleanpng.com/20180820/uzt/kisspng-smiley-clip-art-thumb-signal-image-emoticon-thumbs-up-transparent-4-5163-shop-of-clipart-l-5b7b6924b44350.5818812315348145007384.jpg",
        { force: true, delay: 50 }
      );
    cy.get("#postBody")
      .should("be.visible")
      .type("Test Body Lorum Ipsum etc...", {
        force: true,
        delay: 100,
      });
    /* Disabled so it won't post to the API
        cy.get("#postForm button > span")
            .contains("Publish")
            .should("be.visible")
            .click({ force: true });
        */
  });

  it("CAN logout", () => {
    cy.get("button")
      .contains("Logout")
      .should("be.visible")
      .click({ force: true });
  });
});
