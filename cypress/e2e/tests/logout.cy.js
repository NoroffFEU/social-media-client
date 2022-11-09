describe("User can log out", () => {
  it("Logs inn the user", () => {
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
  });
  it("Logs the user out when logout button is clicked", () => {
    cy.wait(1000);
    cy.get("div.text-end > button").contains("Logout").click();
  });
});
