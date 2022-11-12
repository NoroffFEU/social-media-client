describe("create a post", () => {
  const email = Cypress.env("email");
  const password = Cypress.env("password");

  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("button[type='reset']:visible").click();
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible").should("exist").type(`${email}`);
    cy.wait(500);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(`${password}`);
    cy.wait(500);
    cy.get("button[type='submit']:visible").click();
    cy.wait(500);
  });

  it("create a post", () => {
    cy.wait(500);
    cy.get('a[href="./?view=post"]').click();
    cy.wait(500);
    cy.url().should("include", "post");
    cy.wait(500);
    cy.get("input[name=title]").should("exist").type("Creating a new post");
    cy.wait(500);
    cy.get("input[name=tags]").should("exist").type("New, Cypress");
    cy.wait(500);
    cy.get("textarea[name=body]:visible")
      .should("exist")
      .type("New post from Cypress");
    cy.wait(500);
    cy.get('button[data-action="submit"]').click();
    cy.wait(500);
    cy.url().should("include", "view=post&postId=");
    cy.wait(500);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(500);
    cy.url().should("include", "/");
  });

  it("validates user inputs correctly to create a post", () => {
    cy.wait(1000);
    cy.get('a[href="./?view=post"]').click();
    cy.wait(500);
    cy.url().should("include", "post");
    cy.wait(500);
    cy.get("input[name=title]").should("exist").clear();
    cy.wait(500);
    cy.get("input[name=tags]").should("exist").clear();
    cy.wait(500);
    cy.get("input[name=media]").should("exist").type("url");
    cy.wait(500);
    cy.get("textarea[name=body]:visible").should("exist").clear();
    cy.wait(500);
    cy.get('button[data-action="submit"]').click();
    cy.wait(500);
    cy.get("input[name=title]").should("exist").type("New post from Cypress");
    cy.wait(500);
    cy.get('button[data-action="submit"]').click();
    cy.wait(500);
    cy.get("input[name=media]:invalid").should("exist").clear();
    cy.wait(500);
    cy.get("input[name=media]")
      .should("exist")
      .type(
        "https://user-images.githubusercontent.com/91701833/201232531-9de8538f-09e7-45a4-99a2-5f5dbf1b6a9a.jpeg"
      );
    cy.wait(500);
    cy.get("#postForm :invalid").should("not.exist");
  });
});
