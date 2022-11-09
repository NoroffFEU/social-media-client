describe("create post", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(1000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("testAdrian@noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("12345678");
    cy.get(".btn-success:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
  });

  it("CAN create post and return error messages if something is wrong", () => {
    cy.visit("/");
    cy.get('a[href="/?view=post"]').click();
    cy.wait(1000);
    cy.get("#postTitle").should("exist").type("post created in cypress");
    cy.get("#postMedia")
      .should("exist")
      .type("https://picsum.photos/id/237/200/300");
    cy.get("#postBody").should("exist").type("this is so fun");
    cy.get("#postTags").should("exist").type("yeey, yeey");
    cy.get('button[data-action="submit"]').click();
    cy.wait(6000);
    cy.url().should("include", "view=post&postId=");
    cy.wait(1000);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(1000);
    //no provided url for postMedia
    cy.get('a[href="/?view=post"]').click();
    cy.wait(1000);
    cy.get("#postTitle").should("exist").type("post created in cypress");
    cy.get("#postMedia").should("exist").type("url....noooot");
    cy.get("#postBody").should("exist").type("this is so fun");
    cy.get("#postTags").should("exist").type("yeey, yeey");
    cy.get('button[data-action="submit"]').click();
    cy.wait(6000);
  });
});
