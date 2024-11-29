const url = `http://127.0.0.1:8080`;

const validEmail = "test123@stud.noroff.no";
const validPassword = "123456789";

const invalidEmail = "thisdoesNotWork@stud.noroff.no";
const invalidPassword = "123456789";

describe("login function ", () => {
  it("the user can log in with the login form with valid credentials", () => {
    cy.visit(url);
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    cy.get("#loginEmail").clear("");
    cy.get("#loginEmail").type(validEmail, { force: true, delay: 20 });
    cy.get("#loginPassword").clear("");
    cy.get("#loginPassword").type(validPassword, { force: true, delay: 20 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
  });

  it("checks that the user cannot submit the login form with invalid credentials and is shown an alert message", function () {
    cy.visit(url);
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    cy.get("#loginEmail").clear();
    cy.get("#loginEmail").type(invalidEmail, { force: true, delay: 20 });
    cy.get("#loginPassword").clear();
    cy.get("#loginPassword").type(invalidPassword, { force: true, delay: 20 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();

    cy.on("window:alert", (alertText) => {
      expect(alertText).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });

  it("the user can logout with the logout button", () => {
    cy.visit(url);
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    cy.get("#loginEmail").clear("");
    cy.get("#loginEmail").type(validEmail, { force: true, delay: 20 });
    cy.get("#loginPassword").clear("");
    cy.get("#loginPassword").type(validPassword, { force: true, delay: 20 });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    cy.get(".btn-outline-warning").click();
  });
});
