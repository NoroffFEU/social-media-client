Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginForm input[type='email']")
    .as("emailInput")
    .click()
    .wait(200)
    .type(email)
    .should("have.value", email);

  cy.get("#loginForm input[type='password']")
    .as("passwordInput")
    .should("be.visible");
  cy.get("@passwordInput").click();
  cy.get("@passwordInput")
    .type(password, { delay: 100 })
    .should("have.value", password)
    .invoke("val")
    .should("have.length", 8);

  cy.get("#loginForm > .modal-footer > .btn-success")
    .as("loginButton")
    .should("be.visible")
    .click();
});
