describe("Social media app - login user", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("#registerForm .modal-header button.btn-close")
      .should("be.visible")
      .click();
    cy.wait(2000);
    cy.get("#registerForm .modal-header button.btn-close")
      .should("be.visible")
      .click();
    cy.get(".text-end .btn-outline-success").contains("Login").click();
  });

  it("CAN login with valid email and password", () => {
    cy.get("#loginEmail").should("exist").type("cyp@noroff.no");
    cy.get("#loginPassword").should("exist").type(`overtime{enter}`);
    cy.wait(2000);
    cy.visit("http://127.0.0.1:5500/?view=profile");
    cy.url().should("include", "profile");
  });

  it("CANNOT login with invalid email and password", () => {
    cy.get("#loginEmail").should("exist").type("testing.email.noroff@gmail.no");
    cy.get("#loginPassword").should("exist").type(`password123{enter}`);
    cy.wait(2000);
    cy.visit("http://127.0.0.1:5500/?view=profile");
    cy.url().should("not.include", "profile");
  });

  it("CAN create a post on the API", () => {
    cy.get("#loginEmail").should("exist").type("cyp@noroff.no");
    cy.get("#loginPassword").should("exist").type(`overtime{enter}`);
    cy.wait(2000);
    cy.visit("http://127.0.0.1:5500/?view=post");
    cy.get("#postTitle").should("exist").type("Title");
    cy.get("#postTags").should("exist").type("tag");
    cy.get("#postBody").should("exist").type(`post body{enter}`);
    cy.get("#postForm .btn span").contains("Publish").click();
    cy.wait(2000);
    cy.get(".post-actions .btn-danger").contains("Delete").click();
  });

  it("CAN log out with logout button", () => {
    cy.get("#loginEmail").should("exist").type("cyp@noroff.no");
    cy.get("#loginPassword").should("exist").type(`overtime{enter}`);
    cy.wait(2000);
    cy.visit("http://127.0.0.1:5500/?view=profile");
    cy.get(".text-end .btn-outline-warning").contains("Logout").click();
    cy.wait(1000);
    cy.visit("http://127.0.0.1:5500/?view=profile");
    cy.url().should("not.include", "profile");
  });
});
