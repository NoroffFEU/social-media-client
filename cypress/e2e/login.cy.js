describe("social media app", () => {
  it("logs in an unauthenticated user", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1500);
    cy.get("form#registerForm > div.modal-header > button[type='button']")
      .should("have.class", "btn-close")
      .click();

    cy.get("div.text-end > :nth-child(2)").should("be.visible").click();

    cy.wait(2500);
    cy.get(
      "form#loginForm > div.modal-body > :nth-child(1) > input[type='email']"
    )
      .should("be.visible")
      .type("MelZor72659@stud.noroff.no")
      .should("have.value", "MelZor72659@stud.noroff.no");
    cy.wait(2500);
    cy.get(
      "form#loginForm > div.modal-body > :nth-child(2) > input[type='password']"
    )
      .should("be.visible")
      .type("supersafepassword")
      .should("have.value", "supersafepassword");

    cy.get("form#loginForm > div.modal-footer > :nth-child(3)")
      .contains("Login")
      .should("be.visible")
      .click();
  });
});
