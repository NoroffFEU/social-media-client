it("firstly visits the page by logging inn and then log out", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get(
    "#registerForm > div.modal-footer > button.btn-outline-success",
  ).click();
  cy.get("#loginEmail").invoke("val", "shorna@noroff.no");
  cy.get("#loginPassword").invoke("val", "shornashorna");
  cy.wait(500);
  cy.get("#loginForm button").contains("Login").click();
  cy.wait(1000);
  cy.get("button.btn-outline-warning").contains("Logout").click();
  cy.get("#registerForm > div.modal-footer > button.btn-outline-success")
    .contains("Login")
    .should("exist");
});
