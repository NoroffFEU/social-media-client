describe("User can create a post", () => {
  it("Logs in the user", () => {
    cy.visit("./");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(500);
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=email]"
    ).type("thong@noroff.no");
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=password]"
    ).type("12345678");
    cy.get("#loginForm > div.modal-footer > button").contains("Login").click();
  });
  it("creates a post validates user inputs correctly based on API restrictions", () => {
    cy.wait(4000);
    cy.get("#footerActions > a.btn").contains("New Post").click();
    cy.wait(500);
    cy.get("#postTitle").type("Cypress testing create");
    cy.get("#postTags").type("cypressTest");
    cy.get("#postMedia").type("https://picsum.photos/200");
    cy.get("#postBody").type("test successful");
    cy.get("#postForm > div.col-12 > button").click({ force: true });
    //Delete post after sometime for the sake of API environment
    cy.wait(6000);
    cy.get("div.post-actions > button").contains("Delete").click();
  });
});
