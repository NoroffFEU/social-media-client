describe("Authenticated user", () => {
  beforeEach(() => {
    // log in user
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    cy.get("#loginEmail").should("exist").type("maytest25@noroff.no");
    cy.get("#loginPassword").should("exist").type("maytestpassword{enter}");
    cy.wait(1000);
    cy.get("#footerActions a").contains("New Post").click();
  });

  it("Can not post an empty form", () => {
    cy.get("#postForm :invalid").should("have.length", 1);

    cy.get("button[data-action='submit']").should("exist").click();
    // Expect to see validation message when title input is empty
    cy.get("#postTitle:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Can create a new post with valid inputs", () => {
    cy.get("#postForm")
      .should("exist")
      .within(() => {
        cy.get("#postTitle")
          .should("exist")
          .type("Cypress test title", { delay: 100 });
        cy.get("#postBody")
          .should("exist")
          .type("Cypress test body", { delay: 100 });
        cy.get("#postTags")
          .should("exist")
          .type("cypress, test", { delay: 100 });
        cy.get("button[data-action='submit']").should("exist").click();
      });
  });
});
