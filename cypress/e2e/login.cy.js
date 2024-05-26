describe("Login Functionality", () => {
  beforeEach(() => {
    cy.visit("../../index.html");
    cy.wait(2000);

    cy.get("#loginModal").as("loginModal");
    cy.get("#pls").click();
  });

  it("should not log in with invalid credentials and show an error message", () => {
    cy.get("@loginModal")
      .find('input[name="email"]')
      .wait(2000)
      .type("invalid@noroff.no");

    cy.get("@loginModal")
      .find('input[name="password"]')
      .type("invalidpassword");
    cy.get("@loginModal").find('button[type="submit"]').click();
    cy.wait(2000);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });

  it("should log in with valid credentials and then log out again", () => {
    cy.get("@loginModal")
      .find('input[name="email"]')
      .wait(2000)
      .type("minros49649@stud.noroff.no");

    cy.get("@loginModal")
      .find('input[name="password"]')
      .type("Jeglikerkake1234");
    cy.get("@loginModal").find('button[type="submit"]').click();
    cy.wait(2000);

    cy.get('[data-auth="logout"]').should("be.visible");

    cy.contains("Logout").click({ force: true });

    cy.wait(1000);
    cy.get('button[data-auth="login"]').should("be.visible");
  });
});
