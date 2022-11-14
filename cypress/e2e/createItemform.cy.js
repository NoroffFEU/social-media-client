describe("The create item form validates user inputs correctly based on API restrictions", () => {
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

    cy.wait(1000);
    cy.get("a.btn-outline-success").click();
    cy.wait(1000);
    // Gives a post to the API with correct parameters
    cy.get("input#postTitle").type("E2E");
    cy.get("textarea#postBody").type("e2e post!");
    cy.get("input#postMedia").type(
      "https://katalon.com/hubfs/Imported_Blog_Media/End-to-End-Testing_750x444.png"
    );
    cy.get("button.btn.btn-success").contains("Publish").click();

    cy.wait(1000);
    cy.get("a.btn-outline-success").click();
    cy.wait(1000);

    // show that it doesnt post when inputs are not correctly formatted
    cy.get("textarea#postBody").type("This Shouldnt post ");
    cy.get("input#postMedia").type(
      "https://thumbs.dreamstime.com/b/not-working-icon-error-message-symbol-error-popup-message-error-alert-generate-message-not-working-icon-error-message-symbol-error-209782672.jpg"
    );
    cy.get("button.btn.btn-success").contains("Publish").click();
  });
});
