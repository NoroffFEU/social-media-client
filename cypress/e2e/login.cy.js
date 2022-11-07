const baseURL = "http://127.0.0.1:8080/";
describe("Authentication", () => {
  beforeEach(() => {
    cy.visit(baseURL);
    cy.clearLocalStorage();
  });

  it("Can login", () => {
    cy.visit(baseURL);
    cy.wait(500);
    // gets the currently showing close button
    cy.get(".btn-close:visible").click();
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(Cypress.env("EMAIL"));
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(Cypress.env("PASSWORD"));
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.url().should("include", "profile");
  });

  it("Validates user email input based on API restrictions", () => {
    cy.visit(baseURL);
    cy.wait(500);
    // gets the currently showing close button
    cy.get(".btn-close:visible").click();
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(`jester@norof.no`);
    cy.get("input[type='password']:visible").should("exist").type(`password`);
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Validates user password input based on API restrictions", () => {
    cy.visit(baseURL);
    cy.wait(500);
    // gets the currently showing close button
    cy.get(".btn-close:visible").click();
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(Cypress.env("EMAIL"));
    cy.get("input[type='password']:visible").should("exist").type(`passwor`);
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Return invalid password/email message for wrong password", () => {
    cy.visit(baseURL);
    cy.wait(500);
    // gets the currently showing close button
    cy.get(".btn-close:visible").click();
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(Cypress.env("EMAIL"));
    cy.get("input[type='password']:visible").should("exist").type(`password`);
    cy.get(".btn-success:visible").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
  });
});
