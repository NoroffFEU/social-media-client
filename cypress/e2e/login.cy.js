const email = "cypresshill@stud.noroff.no";
const password = "cypresshill123";

describe("The user can log in with the login form with valid credentials", () => {
  it("Logs the user in", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerForm > .modal-footer > button[data-auth='login']").click();
    cy.wait(500);
    cy.get("#loginEmail").should("exist").type(email);
    cy.get("#loginPassword").should("exist").type(password);
    cy.get("#loginForm > .modal-footer > button[type='submit']").click();
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
    cy.then(() => expect(localStorage.getItem("profile")).to.not.be.null);
  });
});
