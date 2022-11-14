let UNVALID_EMAIL = "something@something.com";
let UNVALID_PASSWORD = "0";

describe("Login form validates", () => {
  it("Not validates", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
    cy.get("input[type='email']:visible").should("exist").type(UNVALID_EMAIL);

    cy.get("input[type='password']:visible")
      .should("exist")
      .type(UNVALID_PASSWORD);

    cy.get(".btn-success:visible").click();
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
  });
});
