describe("Create item test", () => {
  let email = "rotta@noroff.no";
  let password = "rotta123";

  it("returns a valid token when provided with valid credentials", () => {
    cy.visit("/");
    cy.loginTest(email, password);
    cy.get('a[href="/?view=post"]').click();
  });

  it("Can create post"),
    () => {
      cy.url().should("include", "post");
      cy.get("#postTitle").should("exist").type("E2E test - creating a post");
      cy.get("#postTags").should("exist").type("This is me end to end testing");
      cy.get("#postMedia")
        .should("exist")
        .type(
          "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-f3qxzs_4923c203.jpeg"
        );
      cy.get("#postBody").should("exist").type("Hi this is Rattatouille!");
      cy.get('button[data-action="submit"]').click();
      cy.get('button[data-action="submit"]').click();
      //cy.wait(5000); //Takes time to post
      cy.url().should("include", "view=post&postId=");
      cy.get('button[data-action="delete"]:visible').click();
      //cy.wait(1000);
      cy.url().should("include", "/");
    };
});
