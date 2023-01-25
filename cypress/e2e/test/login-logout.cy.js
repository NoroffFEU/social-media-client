// FROM CYPRESS.ENV.JSON
const email = Cypress.env("user").email;
const password = Cypress.env("user").password;

// SUCCESSFUL LOGIN

describe("Login test for the CA", () => {
  it("logs in the user successfully", () => {
    cy.visit("/");
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login"
    ).as("authorized");
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(1000);
    cy.get("input#loginEmail").type(email).should("have.value", email);
    cy.wait(1000);
    cy.get("input#loginPassword")
      .type(`${password}{enter}`)
      .wait("@authorized")
      .its("response.statusCode")
      .should("be.within", 200, 299);
    cy.wait(2000);
  });
});

// SUCCESSFUL LOGOUT

describe("Logout test for the CA", () => {
  it("logs out the user (requires the user to be logged in)", () => {
    cy.get("header").get("button").contains("Logout").click();
  });
});

// UNSUCCESSFUL LOGIN

describe("Unsuccessful login test for the CA", () => {
  it("does not log in the user successfully", () => {
    cy.intercept(
      "POST",
      "https://nf-api.onrender.com/api/v1/social/auth/login"
    ).as("unauthorized");
    cy.wait(1000);
    cy.get("#registerForm > div.modal-footer > button")
      .contains("Login")
      .click();
    cy.wait(1000);
    cy.get("input#loginEmail").type(email).should("have.value", email);
    cy.wait(1000);
    cy.get("input#loginPassword").type(`${password}{enter}`);
    cy.wait("@unauthorized")
      .its("response.statusCode")
      .should("be.within", 400, 499);
    cy.log("Invalid credentials");
  });
});
