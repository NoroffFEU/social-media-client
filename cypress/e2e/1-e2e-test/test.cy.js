describe("login", () => {
  it("e2e testing", () => {
    //can log in
    cy.visit("index.html");
    cy.wait(500);
    cy.get("#loginBtn").click();
    cy.get("input#loginEmail").type("h@noroff.no", { delay: 0 });
    cy.get("input#loginPassword").type("hhhhhhhh", { delay: 0 });
    cy.get("#enterBtn").click();
    cy.wait(500);
    cy.get("h4").contains("h");
    //can log out
    cy.get("#logoutBtn").click();
    // invalid login
    cy.wait(500);
    cy.get("#loginBtn").click();
    cy.get("input#loginEmail").type("fail@fail.no", { delay: 0 });
    cy.get("input#loginPassword").type("fail", { delay: 0 });
    cy.get("#enterBtn").click();
  });
});
