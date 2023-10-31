describe("https://nyolarraklay.github.io/social-media-client-CA-workflow/", () => {
  it("can create a profile", () => {
    cy.visit("https://nyolarraklay.github.io/social-media-client-CA-workflow/");
    cy.get("input#registerName").type("examplename", { delay: 500 });
    cy.get("input#registerEmail").type("example@stud.noroff.no", {
      delay: 500,
    });
    cy.get("input#registerPassword").type("12345678{enter}", { delay: 500 });
  });
});
