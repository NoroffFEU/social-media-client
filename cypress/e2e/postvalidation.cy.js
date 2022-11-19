describe("Loads the designated page and logs out successfully", () => {
  it("Successfully opens the website", () => {
    cy.visit("http://127.0.0.1:5500"); // change URL to match a eligible URL.
    cy.wait(500);
  }),
    it("Successfully Logs in", () => {
      cy.wait(500);
      cy.get('#registerForm button[data-auth="login"]').click();
      cy.wait(500);
      cy.contains("div", "Email")
        .find("input")
        .first()
        .type("sindre123@noroff.no");
      cy.wait(500);
      cy.contains("div", "Password").find("input").first().type("12345678");
      cy.wait(500);
      cy.get("#loginModal .btn").contains("Login").click();
      cy.wait(2000);
    });
  //   it("Successfully opens the post form", () => {
  //     cy.wait(2000);
  //     cy.get('#footerActions a[data-visible="loggedIn"]').click();
  //     cy.wait(2000);
  //   }),
  //       it("Successfully opens the post form attempt 2", () => {
  //     cy.wait(2000);
  //     cy.visit("http://127.0.0.1:5500/?view=post");
  //     cy.wait(2000);
  //   }),
  //     it("CAN create a post on the API", () => {
  //     cy.get(`#postTitle`).should("exist").type("Cypress Test Title");
  //     cy.get(`#postTags`).should("exist").type("Cypress Test Tag");
  //     cy.get(`#postBody`).should("exist").type("Cypress Test Body{enter}");
  //     cy.get(`#postForm .btn span`).contains("Publish").click();
  //     cy.wait(2000);
  // }),
  //     it("deletes the post after creation", () => {
  //     cy.get(".post-actions .btn-danger").contains("Delete").click();
  // })
});
