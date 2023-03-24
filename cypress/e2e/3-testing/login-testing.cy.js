describe("login", () => {
  it("it can login and access profile", () => {
    cy.visit("http://127.0.0.1:53395/");
    cy.wait(2000);
    cy.get(".btn-outline-success:visible").contains("Login").click();
    cy.wait(2000);
    cy.get("#loginForm").get("h5").contains("Login");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginEmail").type("hertes2@stud.noroff.no");
    cy.wait(2000);
    cy.get("#loginForm").get("input#loginPassword").type("noroff123");
    cy.wait(2000);
    cy.get("#loginForm").get(".btn-success").contains("Login").click();
    cy.wait(4000);
  });
});
