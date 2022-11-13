describe("Login page", () => {
  it("Logs in", () => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerModal")
      .should("contain", "Close")
      .should("be.visible")
      .find(".modal-footer")
      .find("button[type='reset']")
      .click();

    cy.wait(1000);
    cy.get("header button[data-auth=login]").click();
    cy.wait(1500);
    cy.get("input[type='email']:visible").type("testingtest@stud.noroff.no");
    cy.get("input[type='password']:visible")
      .should("exist")
      .type("testingtest");
    cy.get(".btn-success:visible").contains("Login").click();
    cy.wait(3000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
  });
});
