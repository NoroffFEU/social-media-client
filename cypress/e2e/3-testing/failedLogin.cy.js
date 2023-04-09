const testEmail = "OleKeiM1233333@stud.noroff.no";
const testProfileName = "OleKei46";
const testPassword = "-Hello123333333";

describe("Failed login test", () => {
  it("logs user in with invalid credentials", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > .btn-outline-success").click();
    cy.wait(500);
    cy.get("#loginEmail").type(testEmail);
    cy.get("#loginPassword").type(testPassword);
    cy.get("#loginForm > .modal-footer > .btn-success").click();
  });
});
