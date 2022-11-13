describe("Create post based on api restrictions ", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080");
    cy.clearLocalStorage();
    cy.visit("http://127.0.0.1:8080/");
    cy.wait(5000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("h5.modal-title").contains("Login");
    cy.get("input#loginEmail").type("kptest1@noroff.no");
    cy.get("input#loginPassword").type("Passord1234*");
    cy.get(".btn-success").contains("Login").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
  });

  it("will create a post when asked to", () => {
    cy.get(".btn-outline-success").contains("New Post").click();
    cy.get("h1").contains("Post");
    cy.wait(1000);
    cy.get("#postTitle").type("TestPost from cypress");
    cy.get("#postTags").type("Cypress");
    cy.get('button[data-action="submit"]').click();
    cy.wait(500);
    cy.url().should("include", "postId=");
    cy.wait(3000);
    cy.get('button[data-action="delete"]:visible').click();
    cy.wait(1000);
  });

  it("will not create a post when no title is made", () => {
    cy.get(".btn-outline-success").contains("New Post").click();
    cy.get("h1").contains("Post");
    cy.wait(1000);
    cy.get("#postTags").type("Cypress");
    cy.get('button[data-action="submit"]').click();
    cy.wait(500);
    cy.url().should("include", "view=post");
    cy.url().should("not.include", "postId=");
  });

  // This is a test that only runs when theres no previous post in the database from this user so i edited the
  // function/test above to delete the post after it was created

  // it("Will delete a post it just made", () => {
  //   cy.visit("http://127.0.0.1:8080/?view=profile&name=Kp");
  //   cy.get('a[data-action="view"]').click();
  //   cy.wait(500);
  //   cy.get(".btn-danger").contains("Delete").click();
  //   cy.wait(1000);
  //   cy.visit("http://127.0.0.1:8080/?view=profile&name=Kp");
  //   cy.wait(1000);
  //   cy.get("div.alert-info").contains("There are no posts yet...");
  // });
});
