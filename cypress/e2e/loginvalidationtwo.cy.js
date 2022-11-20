describe("Login validation based on API restrictions", () => {
  beforeEach(() => {
    cy.visit("/"); // change URL to match a eligible URL.
    cy.wait(500);
    cy.get('#registerForm button[data-auth="login"]').click();
  }),
    it("Successfully logs in with valid email and password", () => {
      cy.wait(500);
      cy.contains("div", "Email")
        .find("input")
        .first()
        .type("sindre123@noroff.no");
      cy.wait(500);
      cy.contains("div", "Password").find("input").first().type("12345678");
      cy.wait(500);
      cy.get("#loginModal .btn").contains("Login").click();
      cy.wait(2000);
      cy.visit("/?view=profile");
      cy.url().should("include", "profile");
    }),
    it("Successfully logs in with invalid email and password", () => {
      cy.wait(500);
      cy.contains("div", "Email")
        .find("input")
        .first()
        .type("randomemail@random.norpoff.lol");
      cy.wait(500);
      cy.contains("div", "Password").find("input").first().type("12345678");
      cy.wait(500);
      cy.get("#loginModal .btn").contains("Login").click();
      cy.wait(2000);
      cy.visit("/?view=profile");
      cy.url().should("not.include", "profile");
    });
});
