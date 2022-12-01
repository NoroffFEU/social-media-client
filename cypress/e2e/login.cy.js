describe("Validating user inputs", () => {
  it("denies invalid inputs", () => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.get("button[data-auth='login']:visible").contains("Login").click();
    cy.wait(1000);
    cy.get("#loginForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );
    cy.get("form input[id='loginEmail']").type("testingtiesto@norn.kz", {
      force: true,
    });
    cy.get("form input[id='loginPassword']").type("a$}-=", {
      force: true,
    });
    cy.get("#loginForm").then(
      (form) => expect(form[0].checkValidity()).to.be.false
    );
    cy.get("button[type='submit']").contains("Login").click({ force: true });
  });
});

it("accepts valid inputs", () => {
  cy.visit("/");
  cy.clearLocalStorage();
  cy.get("button[data-auth='login']:visible").contains("Login").click();
  cy.wait(1000);
  cy.get("#loginForm").then(
    (form) => expect(form[0].checkValidity()).to.be.false
  );
  cy.get("form input[id='loginEmail']").type("testingtiesto@noroff.no", {
    force: true,
  });
  cy.get("form input[id='loginPassword']").type("asdf1234", {
    force: true,
  });
  cy.get("#loginForm").then(
    (form) => expect(form[0].checkValidity()).to.be.true
  );
  cy.get("button[type='submit']").contains("Login").click({ force: true });
});
