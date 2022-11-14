let VALID_EMAIL = "steffen@noroff.no";
let VALID_PASSWORD = "passord123";

describe("Token is removed when logging out", () => {
  before(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.login();
  });

  it("Token is removed", () => {
    cy.get("button[data-auth='logout']:visible").click();
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});
