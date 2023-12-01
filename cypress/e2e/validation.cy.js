const invEmail = "invalid123@noroff.no";
const invPassword = "passwordinvalid";

describe("Login validation", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal button[type=button]").contains("Login").click();
    cy.wait(2000);
  });

  it("should deny login with invalid info", () => {
    cy.get("input[type='email']:visible").type(invEmail, {
      delay: 500,
    });
    cy.get("input[type='password']:visible").type(invPassword, {
      delay: 500,
    });
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(1000);

    // Check if the token is not present in localStorage
    cy.window()
      .its("localStorage")
      .invoke("getItem", "token")
      .should("not.exist");
  });
});

it("will deny access with empty credentials", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get("#registerModal").contains("Login").click();
  cy.wait(2000);
  cy.get("input[type='email']:visible", { delay: 500 });
  cy.get("input[type='password']:visible", { delay: 500 });
  cy.get("button[type=submit]").contains("Login").click();
  cy.wait(1000);
});

it("should deny login with an empty password field", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get("#registerModal").contains("Login").click();
  cy.wait(2000);
  cy.get("input[type='email']:visible").type(invEmail, {
    delay: 500,
  });
  cy.get("input[type='password']:visible", { delay: 500 });
  cy.get("button[type=submit]").contains("Login").click();
  cy.wait(1000);
});

it("should deny login with an empty email field", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get("#registerModal").contains("Login").click();
  cy.wait(2000);
  cy.get("input[type='email']:visible", { delay: 500 });
  cy.get("input[type='password']:visible").type(invPassword, {
    delay: 500,
  });
  cy.get("button[type=submit]").contains("Login").click();
  cy.wait(1000);
});
