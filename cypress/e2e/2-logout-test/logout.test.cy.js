describe("logout", () => {
  it("logs in then out again", () => {
    //log in
    cy.visit("index.html");
    cy.wait(500);
    cy.get("#loginBtn").click();
    cy.get("input#loginEmail").type("h@noroff.no", { delay: 0 });
    cy.get("input#loginPassword").type("hhhhhhhh", { delay: 0 });
    cy.get("#enterBtn").click();
    cy.wait(500);
    cy.get("h4").contains("h");
    //log out
    cy.get("#logoutBtn").click();
  });
});
