describe("invalid login", () => {
  it("fails to log in and is shown a massage", () => {
    // invalid login
    cy.visit("index.html");
    cy.wait(500);
    cy.get("#loginBtn").click();
    cy.get("input#loginEmail").type("fail@fail.no", { delay: 0 });
    cy.get("input#loginPassword").type("fail", { delay: 0 });
    cy.get("#enterBtn").click();
  });
});
