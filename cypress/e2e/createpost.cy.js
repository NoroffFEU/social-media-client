describe("Create post", () => {
  it("Creates post", () => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get(".btn-close:visible").contains("New Post").click();
    cy.get("header button[data-auth=login]").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible").type("testingtest@stud.noroff.no");
    cy.get("input[type='password']:visible")
      .should("exist")
      .type("testingtest");
    cy.get(".btn-success:visible").contains("Login").click();
    cy.wait(3000);
    cy.get("#footerActions [data-visible='loggedIn']")
      .contains("New Post")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get("#postTitle").should("be.visible").type("Testing this creation");
    cy.get("#postTags").type("test, cypress");
    cy.get("#postMedia").type("https://picsum.photos/id/40/4106/2806");
    cy.get("#postBody").type("Will this work?");
    cy.get("button[data-action='submit']").click();
    cy.wait(3000);
    cy.url().should("include", "view=post&postId=");
  });
});
