describe("The logout button logs the user out when clicked", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500");
    cy.wait(2000);
    cy.get("div.modal-footer > button.btn-outline-success").eq(1).click();
    cy.wait(3000);
    cy.get("input#loginEmail").type("testingss@noroff.no");
    cy.get("input#loginPassword").type("asdf1234");
    cy.get("div.modal-footer > button.btn.btn-success")
      .contains("Login")
      .click();

    cy.wait(2000);
    cy.get("button.btn.btn-outline-warning").contains("Logout").click();
    cy.wait(2000);
  });
});
