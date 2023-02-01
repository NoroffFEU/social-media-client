describe("invalid login", () => {
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
    cy.get("input#loginEmail", { timeout: 4000 }).type("nouser@noroff.no", {
      delay: 200,
    });
    cy.get("input#loginPassword", { timeout: 4000 }).type("invalidPassword", {
      delay: 200,
    });
    cy.get("#loginModal .modal-footer button[type='submit']", { timeout: 4000 })
      .should("be.visible")
      .click();

    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login",
      {
        statusCode: 401,
      }
    ).as("deniedLogin");

    cy.wait("@deniedLogin");
  });
});
