const testEmail = "OleKeiM123456@stud.noroff.no";
const testProfileName = "OleKei46";
const testPassword = "-Hello123";

describe("Logout test", () => {
    it("logs user in with valid credentials and then logs the user", () => {
      cy.clearLocalStorage();
      cy.visit("/");
      cy.wait(500);
      cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
      cy.wait(500);
      cy.get("#loginEmail").type(testEmail);
      cy.get("#loginPassword").type(testPassword);
      cy.get("#loginForm > .modal-footer > .btn-success").click();
      cy.wait(500);
      cy.get(".btn-outline-warning").click();
    });
  });