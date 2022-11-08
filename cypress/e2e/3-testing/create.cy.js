describe("create post", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(500);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("caTester@noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("LeahogUlf");
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.visit("http://127.0.0.1:5500/?view=post");
  });

  it("Can create a post", () => {
    cy.wait(500);
    cy.get('a[href="/?view=post"]').click();
    cy.wait(2000);
    cy.url().should("include", "post");
    cy.get("#postTitle").should("exist").type("Post testing with Cypress");
    cy.get("#postTags").should("exist").type("E2e testing with Cypress");
    cy.get("#postMedia")
      .should("exist")
      .type("https://unsplash.com/photos/rdHrrFA1KKg");
    cy.get("#postBody")
      .should("exist")
      .type("This post is generated with Cypress, wehii");
    cy.get('button[data-action="submit"]').click();
    cy.wait(1000);
    cy.url().should("include", "view=post&postId=");
    cy.wait(1000);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(1000);
    cy.url().should("include", "/");
  });

  it("Can validate and require user inputs correctly", () => {
    cy.wait(500);
    cy.get('a[href="/?view=post"]').click();
    cy.wait(2000);
    cy.url().should("include", "post");
    cy.get('button[data-action="submit"]').click();
    cy.get("#postTitle:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(500);
    cy.get("#postTitle").should("exist").type("Testing post with Cypress");
    cy.get("#postMedia").should("exist").type("Not a URL");
    cy.get('button[data-action="submit"]').click();
    cy.get("#postMedia:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(500);
    cy.get("#postTitle").should("exist").clear();
    cy.get("#postMedia").should("exist").clear();
    cy.get("#postTags").should("exist").clear();
    cy.get("#postMedia")
      .should("exist")
      .type("https://unsplash.com/photos/rdHrrFA1KKg");
    cy.get("#postBody")
      .should("exist")
      .type("This is a post generated using Cypress");
    cy.get('button[data-action="submit"]').click();
    cy.get("#postTitle:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
