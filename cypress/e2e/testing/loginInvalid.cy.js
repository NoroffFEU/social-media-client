// Tries to login user with invalid email - alert displays
it("Tries to login user with invalid email", () => {
  cy.visit("/");
  cy.wait(2000);

  cy.get("#registerForm [data-auth=login]").click();

  cy.wait(2000);

  cy.get("#loginEmail").type("linda@invalidEmail");
  cy.get("#loginPassword").type("invalidPassword");
  cy.get("#loginForm .btn-success").click();

  cy.on("window:alert", (str) => {
    expect(str).to.equal("Only Noroff student or teacher emails are valid.");
  });
});

//Tries to login user with invalid password - alert displays
it("Tries to login user with invalid password", () => {
  cy.visit("/");
  cy.wait(2000);

  cy.get("#registerForm [data-auth=login]").click();

  cy.wait(2000);

  cy.get("#loginEmail").type("linda@stud.noroff.no");
  cy.get("#loginPassword").type("invalidPassword");
  cy.get("#loginForm .btn-success").click();

  cy.on("window:alert", (str) => {
    expect(str).to.equal(
      "Either your username was not found or your password is incorrect",
    );
  });
});
