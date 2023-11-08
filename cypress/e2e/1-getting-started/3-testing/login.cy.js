// describe("loginTest", () => {
//     beforeEach(() => {
//       cy.visit("/");
//     });    
//     it("can log in user", () => {
//       cy.visit("/");
//       cy.wait(500);
//       cy.get("#registerModal").contains("Login").click();
//       // cy.get("button[type=submit]").contains("Login").click();
//       cy.get("#loginEmail").type("vladmi@noroff.no,{enter}");
//       // cy.wait(1000);
//       cy.get("#loginPassword").type("password123");
//         cy.get("#loginModal button[type=submit]").click();
//         cy.wait(2000);
//     })
//   });
describe("Login Form", () => {
  it("should give access to profile page when logged in", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(1000);
    cy.get("#loginEmail").type("vladmi@noroff.no");
    cy.get("#loginPassword").type("password123");
    cy.get("button[type=submit]").contains("Login").click();

    cy.wait(2000);
    cy.location("href").should("include", "view=profile&name");
  });
});