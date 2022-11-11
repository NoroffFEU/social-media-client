describe("User can NOT log in with invalid inputs based on API restrictions", () => {
  it("User can't log in", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(500);
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=email]"
    ).type("caitlin@noroff.no");
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=password]"
    ).type("passord");
    cy.get("#loginForm > div.modal-footer > button").contains("Login").click();
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});

describe("User can log in with valid inputs based on API restrictions", () => {
  it("User can log in", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(500);
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=email]"
    ).type("caitlin@noroff.no");
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=password]"
    ).type("passord1");
    cy.get("#loginForm > div.modal-footer > button").contains("Login").click();
    cy.wait(500);
    cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
  });
});
