describe("make item", () => {
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
      .type(Cypress.env("EMAIL"));
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(Cypress.env("PASSWORD"));
    cy.get(".btn-success:visible").click();
    cy.wait(1000);
    cy.visit("http://127.0.0.1:5500/?view=post");
  });
  it("can create a post", () => {
    cy.get("#postTitle").should("exist").type("cypress test");
    cy.get("#postTags").should("exist").type("e2e");
    cy.get("#postMedia")
      .should("exist")
      .type(
        "https://imgs.search.brave.com/4mDAQwXBcjppCFXUjMrcIcExIjnUq-oWMgGfQu_qNZU/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/cVIzckNCX2lLQ0NQ/elVVbUh3eDhnSGFF/NyZwaWQ9QXBp"
      );
    cy.get("#postBody").should("exist").type("Making a post with cypress");
    cy.get('button[data-action="submit"]').click();
    cy.wait(1000);
    cy.url().should("include", "view=post&postId=");
    cy.wait(1000);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(1000);
  });
  // TITLE REQUIRED AND MEDIA MUST BE AN URL IF ADDED
  it("Validates inputs when creating a post", () => {
    cy.wait(500);
    cy.get('a[href="/?view=post"]').click();
    cy.wait(1000);
    cy.url().should("include", "post");
    cy.get('button[data-action="submit"]').click();
    cy.get("#postTitle:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(500);
    cy.get("#postTitle").should("exist").type("test");
    cy.get("#postMedia").should("exist").type("no an url");
    cy.get('button[data-action="submit"]').click();
    cy.get("#postMedia:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
    cy.wait(500);
    cy.get("#postTitle").should("exist").clear();
    cy.get("#postMedia").should("exist").clear();
    cy.get("#postMedia")
      .should("exist")
      .type("https://lorempicsum.com/300*300");
    cy.get("#postBody").should("exist").type("Test");
    cy.get('button[data-action="submit"]').click();
    cy.get("#postTitle:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });
});
