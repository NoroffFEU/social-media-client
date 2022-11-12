describe("social media app", () => {
  it("fails to login when provided invalided credentials", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1500);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("div.text-end > :nth-child(2)").should("be.visible").click();

    cy.wait(1500);
    cy.get(
      "form#loginForm > div.modal-body > :nth-child(1) > input[type='email']"
    )
      .should("be.visible")
      .type("melisa@yahoo.com.ar")
      .should("have.value", "melisa@yahoo.com.ar");

    cy.get(
      "form#loginForm > div.modal-body > :nth-child(2) > input[type='password']"
    )
      .should("be.visible")
      .type("cake")
      .should("have.value", "cake");

    cy.get("form#loginForm > div.modal-footer > :nth-child(3)")
      .contains("Login")
      .should("be.visible")
      .click();
  });
});
