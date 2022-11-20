describe("Loads the designated page and logs out successfully", () => {
  it("Successfully opens the website", () => {
    cy.visit("http://127.0.0.1:5500"); // change URL to match a eligible URL.
    cy.wait(500);
  }),
    it("Successfully Logs in", () => {
      cy.wait(500);
      cy.get('#registerForm button[data-auth="login"]').click();
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
    }),
    it("Successfully Logs out", () => {
      cy.get("header .btn").contains("Logout").click();
      cy.wait(1000);
      cy.visit("http://127.0.0.1:5500/?view=profile");
      cy.url().should("not.include", "profile");
    });
});
