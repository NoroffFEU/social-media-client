describe("Social Media App: Unauthorized user", () => {
  it("CANNOT submit the log in form", () => {
    cy.visit("https://nyolarraklay.github.io/social-media-client-CA-workflow/");

    cy.get("#closeButton").click({
      force: true,
    });
  });
});
