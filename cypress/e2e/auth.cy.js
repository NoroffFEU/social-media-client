const EMAIL = "cypresshill@stud.noroff.no";
const PASSWORD = "cypresshill123";
const INVALID_EMAIL = "apeoaghpaeogh@noroff.no";

describe("Authorization", () => {
  it("Logs the user in with valid credentials", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > button[data-auth='login']").click();
    cy.wait(500);
    cy.get("#loginEmail").should("exist").type(EMAIL);
    cy.get("#loginPassword").should("exist").type(PASSWORD);
    cy.get("#loginForm > .modal-footer > button[type='submit']").click();
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
    cy.then(() => expect(localStorage.getItem("profile")).to.not.be.null);
  });

  it("Doesn't log the user in with invalid credentials", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > button[data-auth='login']").click();
    cy.wait(500);
    cy.get("#loginEmail").should("exist").type(INVALID_EMAIL);
    cy.get("#loginPassword").should("exist").type(PASSWORD);
    cy.get("#loginForm > .modal-footer > button[type='submit']").click();
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(localStorage.getItem("profile")).to.be.null);
    cy.on("window:alert", (alert) => {
      expect(alert).to.contain(
        "Either your username was not found or your password is incorrect"
      );
    });
  });

  it("Logs the user out", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > button[data-auth='login']").click();
    cy.wait(500);
    cy.get("#loginEmail").should("exist").type(EMAIL);
    cy.get("#loginPassword").should("exist").type(PASSWORD);
    cy.get("#loginForm > .modal-footer > button[type='submit']").click();
    cy.wait(1000);
    cy.get("button[data-auth='logout']").click();
    cy.then(() => expect(localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(localStorage.getItem("profile")).to.be.null);
  });
});
