describe("Authenticated user", () => {
  beforeEach(() => {
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
  });

  it("Can create a new post", () => {
    cy.get("#footerActions a").contains("New Post").click();
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
