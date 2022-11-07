describe("social media app", () => {
  it("the login form validates user inputs correctly based on API restrictions", () => {
    cy.visit("http://127.0.0.1:5501/");
    cy.wait(800);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("header [data-auth='login']").should("be.visible").click();

    cy.wait(1000);
    cy.get(
      "form#loginForm > div.modal-body > div.form-floating > input[type='email']"
    )
      .should("be.visible")
      .type("ShaindalTest@noroff.no")
      .should("have.value", "ShaindalTest@noroff.no");

    cy.get(
      "form#loginForm > div.modal-body > div.form-floating > input[type='password']"
    )
      .should("be.visible")
      .type("ShaindalTest123")
      .should("have.value", "ShaindalTest123");

    cy.get("form#loginForm > div.modal-footer > button.btn-success")
      .contains("Login")
      .should("be.visible")
      .click();
  });
});
