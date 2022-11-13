describe("Validate user input", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("sveek-29353@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("passord123");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(2000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
  });

  it("Validates Title input", () => {
    cy.get("footer [data-visible='loggedIn']:visible")
      .contains("New Post")
      .click();
    cy.get("#postTitle:visible").should("exist").type("Test title");
    cy.get("span[data-action='publish']:visible").should("exist").click();
  });
});
