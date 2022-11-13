describe("User can not log in with invalid credentials", () => {
  it("User can not log in", () => {
    cy.visit("./");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(500);
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=email]"
    ).type("thong@noroff.no");
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=password]"
    ).type("password");
    cy.get("#loginForm > div.modal-footer > button").contains("Login").click();
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
  });
});

describe("User can log in with valid inputs based on API restrictions", () => {
  it("User can log in", () => {
    cy.visit("./");
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(500);
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=email]"
    ).type("thong@noroff.no");
    cy.get(
      "#loginForm > div.modal-body > div.form-floating > input[type=password]"
    ).type("12345678");
    cy.get("#loginForm > div.modal-footer > button").contains("Login").click();
    cy.wait(500);
    cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
  });
});
