//testuser marita@stud.noroff.no
//testpassword Storkebab94

describe("Post", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("marita@stud.noroff.no");
    cy.get("input[type='password']:visible")
      .should("exist")
      .type("Storkebab94");
    cy.get("button[type=submit].btn-success:visible").click();
    cy.wait(2000);
    cy.visit("/");
  });

  it("post", () => {
    cy.wait(1000);
    cy.get("footer").contains("New Post").click();
    cy.wait(2000);
    cy.url().should("include", "post");
    cy.get("input[name=title]").should("exist").type("Test post in Cypress");
    cy.get("input[name=tags]").should("exist").type("Testing, Cypress");
    cy.get("input[name=media]")
      .should("exist")
      .type(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"
      );
    cy.get("textarea[name=body]").should("exist").type("Made a post in Cyress");
    cy.get('button[data-action="submit"]').click();
    cy.wait(2000);
    cy.url().should("include", "view=post&postId=");
    cy.wait(2000);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(2000);
    cy.url().should("include", "/");
  });

  it("Cannot resolve missing content", () => {
    cy.wait(1000);
    cy.get("footer").contains("New Post").click();
    cy.wait(2000);
    cy.url().should("include", "post");
    cy.get('button[data-action="submit"]').click();
    cy.get("input[name=title]:invalid").invoke("prop", "validationMessage");
  });

  it("Requires a title", () => {
    cy.wait(500);
    cy.get("footer").contains("New Post").click();
    cy.wait(2000);
    cy.url().should("include", "post");
    cy.get("#postTags").should("exist").type("Testing, Cypress");
    cy.get("#postMedia")
      .should("exist")
      .type(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg"
      );
    cy.get("#postBody")
      .should("exist")
      .type("creating a post with cypress test");
    cy.get('button[data-action="submit"]').click();
    cy.get("input[name=title]:invalid").invoke("prop", "validationMessage");
  });
});
