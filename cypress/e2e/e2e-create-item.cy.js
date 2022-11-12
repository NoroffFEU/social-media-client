describe("Create item test", () => {
  it("returns a valid token when provided with valid credentials", () => {
    cy.visit("/");
    cy.get(".btn-close:visible").click().wait(500);
    cy.get("button[data-auth='login']:visible").click().wait(1000);
    cy.get("#loginEmail").type("rotta@noroff.no");
    cy.get("#loginPassword").type("rotta123");
    cy.get("#loginForm button").contains("Login").click().wait(1000);
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.be.null;
    });

    cy.get(".btn-outline-success").contains("New Post").click().wait(1000);
    cy.get("#postTitle").should("exist").type("E2E test - creating a post");
    cy.get("#postTags").should("exist").type("This is me end to end testing");
    cy.get("#postMedia")
      .should("exist")
      .type(
        "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-f3qxzs_4923c203.jpeg"
      );
    cy.get("#postBody")
      .should("exist")
      .type("Hi this is Rattatouille!")
      .wait(500);
    cy.get("#postForm button").contains("Publish").click();
    //cy.wait(5000); //Takes time to post
    cy.get('button[data-action="delete"]:visible').click();
    //cy.wait(1000);
  });
});
