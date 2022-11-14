describe("The login form validates user inputs correctly based on API restrictions", () => {
  it("passes", () => {
    //login with right credentials
    cy.visit("http://127.0.0.1:5500");
    cy.wait(2000);
    cy.get("div.modal-footer > button.btn-outline-success").eq(1).click();
    cy.wait(3000);
    cy.get("input#loginEmail").type("testingss@noroff.no");
    cy.get("input#loginPassword").type("asdf1234");
    cy.get("div.modal-footer > button.btn.btn-success")
      .contains("Login")
      .click();
    //logs user out and refreshes site
    cy.wait(1000);
    cy.get("button.btn.btn-outline-warning").contains("Logout").click();
    cy.wait(1000);
    // tries to log into the website with wrong credentials
    cy.get("div.modal-footer > button.btn-outline-success").eq(1).click();
    cy.wait(3000);
    cy.get("input#loginEmail").type("notworking@mail.no");
    cy.get("input#loginPassword").type("badpass");
    cy.get("div.modal-footer > button.btn.btn-success")
      .contains("Login")
      .click();
  });
});
