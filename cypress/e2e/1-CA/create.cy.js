describe("Validate user input", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
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
    cy.get("#postTitle:visible")
      .should("exist")
      .type("Test title")
      .should("have.value", "Test title");
    cy.get("#postTags:visible").should("exist").type("Cypress, CA, e2e");
    cy.get("#postMedia:visible")
      .should("exist")
      .type(
        "https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif"
      );
    cy.get("#postBody:visible").should("exist").type("Test post");
    cy.get("span[data-action='publish']:visible").should("exist").click();
    cy.url().should("include", "post");
  });
});
