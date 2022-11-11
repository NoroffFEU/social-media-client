describe("E2E 1", () => {
  it("Logout btn logs the user out when clicked - test", () => {
    cy.visit("/");
    cy.get(".btn-close:visible").click().wait(500);
    cy.get("button[data-auth='login']:visible").click().wait(1000);
    cy.get("#loginEmail").type("rotta@noroff.no");
    cy.get("#loginPassword").type("rotta123");
    cy.get("#loginForm button").contains("Login").click().wait(1000);
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.not.be.null;
    });

    //Get logout btn and log out
    cy.get("button").contains("Logout").click();
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
