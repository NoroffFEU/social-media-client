describe("E2E test - test login validates", () => {
  it("Test with wrong password", () => {
    cy.visit("/");
    cy.get(".btn-close:visible").click().wait(500);
    cy.get("button[data-auth='login']:visible").click().wait(1000);
    cy.get("#loginEmail").type("rotta@norof.no");
    cy.get("#loginPassword").type("rotta123");
    cy.get("#loginForm button").contains("Login").click().wait(1000);
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });

  it("Test with wrong password", () => {
    cy.visit("/");
    cy.get(".btn-close:visible").click().wait(500);
    cy.get("button[data-auth='login']:visible").click().wait(1000);
    cy.get("#loginEmail").type("rotta@noroff.no");
    cy.get("#loginPassword").type("rotta");
    cy.get("#loginForm button").contains("Login").click().wait(1000);
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
  it("Test with wrong email and password", () => {
    cy.visit("/");
    cy.get(".btn-close:visible").click().wait(500);
    cy.get("button[data-auth='login']:visible").click().wait(1000);
    cy.get("#loginEmail").type("rotta@norof.no");
    cy.get("#loginPassword").type("rotta");
    cy.get("#loginForm button").contains("Login").click().wait(1000);
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
  cy.on("window:alert", (msg) => {
    expect(msg).to.equal(
      "Either your username was not found or your password is incorrect"
    );
  });
});
