describe("The create item form validates user inputs correctly based on API restrictions", () => {
  it("User can log in", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(500);
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=email]"
    ).type("caitlin@noroff.no");
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=password]"
    ).type("passord1");
    cy.get("#loginForm > div.modal-footer > button").contains("Login").click();
  });
  it("User can create an item", () => {
    cy.wait(1000);
    cy.get("#footerActions > a.btn").contains("New Post").click();
    cy.wait(1000);
    cy.get("#postTitle").type("Cypress Test");
    cy.get("#postTags").type("cypress");
    cy.get("#postMedia").type("https://picsum.photos/id/95/2048/2048");
    cy.get("#postBody").type("Good luck everyone!");
    cy.get("#postForm > div.col-12 > button").click();
    // For the sake of the API environment, the following will also delete this item
    cy.wait(10000);
    cy.get("div.post-actions > button").contains("Delete").click();
  });
});
