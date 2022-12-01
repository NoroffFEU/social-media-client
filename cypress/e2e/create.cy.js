describe("Can validate post input", () => {
  it("logs in to page", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("button[data-auth='login']:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("form input[id='loginEmail']").type("testingtiesto@noroff.no", {
      force: true,
    });
    cy.get("form input[id='loginPassword']").type("asdf1234", {
      force: true,
    });
    cy.get("button[type='submit']").contains("Login").click({ force: true });
    cy.wait(2000);
    cy.get('a[href="./?view=post"]')
      .contains("New Post")
      .click({ force: true });
    cy.wait(1000);

    it("will allow a new post if title is filled", () => {
      cy.get("#postTitle").should("exist").type("iik");
      cy.get("#postForm").then(
        (form) => expect(form[0].checkValidity()).to.be.true
      );
    });

    it("wil not allow post to be created if title is not filled", () => {
      cy.get("#postTags").should("exist").type("a, b");
      cy.get("#postBody").should("exist").type("body body body");
      cy.get("#postMedia")
        .should("exist")
        .type(
          "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg"
        );
      cy.get("#postForm").then(
        (form) => expect(form[0].checkValidity()).to.be.false
      );
    });
  });
});
