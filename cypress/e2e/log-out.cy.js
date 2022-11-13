describe("Logout", () => {
  it("Logs out", () => {
    cy.visit("index.html");
    cy.clearLocalStorage();
    cy.wait(1000);

    cy.get("#registerModal button[type=reset]").click();
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
    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
  });
});
