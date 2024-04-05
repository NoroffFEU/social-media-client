describe("logging in to page with email and password", () => {
  it("passes", () => {
    cy.visit("https://martinsn676.github.io/social-media-client/");
    cy.wait(1000); // Wait for 2000 milliseconds (2 seconds)

    cy.get('.modal-footer button[data-auth="login"]')
      .should("be.visible") // Ensure the button is visible
      .click(); // Then click on it
    cy.wait(500); // Wait for 500 milliseconds
    cy.get("#loginEmail").type("donaldduck@stud.noroff.no");
    cy.get("#loginPassword").type("noroffSucks");
    cy.get('.modal-footer button[type="submit"]').contains("Login").click();
    cy.url().should(
      "include",
      "?view=",
      "See if profile page was loaded, to see if login was succesfull",
    );
  });
});
