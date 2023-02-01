describe("valid login", () => {
  it("can log into the website with valid user credentials", () => {
    cy.visit("https://khintin.github.io/social-media-client/");

    cy.wait(1000);

    cy.get(".modal-footer button[data-bs-target='#loginModal']", {
      timeout: 4000,
    })
      .should("be.visible")
      .click();
    cy.get("#registerModal", { timeout: 4000 }).should("not.be.visible");

    cy.wait(1000);

    cy.get("#loginModal", { timeout: 4000 }).should("be.visible");
    cy.get("input#loginEmail", { timeout: 4000 }).type("george777@noroff.no", {
      delay: 200,
    });
    cy.get("input#loginPassword", { timeout: 4000 }).type("12345678", {
      delay: 200,
    });
    cy.get("#loginModal .modal-footer button[type='submit']", { timeout: 4000 })
      .should("be.visible")
      .click();

    cy.intercept(
      "https://khintin.github.io/social-media-client/?view=profile&name=george"
    ).as("profileView");
    cy.wait("@profileView");

    // Just waiting to make it more clear that we actually logged in. Not strictly needed
    cy.wait(2000);

    cy.get("header button[data-auth='logout']", { timeout: 4000 })
      .should("be.visible")
      .click();

    cy.wait(1000);
    cy.get("#registerModal", { timeout: 4000 }).should("be.visible");
  });
});
