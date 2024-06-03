const userEmail = "chrgro27584@stud.noroff.no";
const userPassword = "password";
const incorrectEmail = "testing@test.com";
const incorrectPassword = "Test123";

describe("Test for form validation and error handling", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#registerForm button[type=button]").contains("Login").click();
  });

  it("Displays error for wrong email", () => {
    cy.login(incorrectEmail, userPassword);
    cy.get("#loginForm").submit();
    cy.get("#loginEmail").then(($input) => {
      expect($input[0].validity.patternMismatch).to.be.true;
    });
    cy.get("#loginEmail:invalid").should("exist");
  });

  it("Displays error for wrong password", () => {
    cy.login(userEmail, incorrectPassword);
    cy.get("#loginForm").submit();
    cy.get("#loginPassword").should("have.attr", "minlength", "8");
    cy.get("#loginPassword:invalid").should("exist");
  });

  it("Displays error for empty input field", () => {
    cy.get("#loginEmail").clear();
    cy.get("#loginPassword").clear();
    cy.get("#loginForm button[type=submit]").click();
    cy.get("#loginEmail").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
    cy.get("#loginPassword").then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
    cy.get("#loginEmail:invalid").should("exist");
    cy.get("#loginPassword:invalid").should("exist");
  });
});

Cypress.Commands.add("login", (email, password) => {
  cy.get("#loginEmail").clear().type(email);
  cy.get("#loginPassword").clear().type(password);
  cy.get("#loginForm button[type=submit]").contains("Login").click();
});