describe("Invalid login credentials", () => {
  beforeEach(() => {
    cy.wait(1000);
  });
});

it("cannot submit the login form with invalid credentials and is shown a message", () => {
  cy.visit("/");
  cy.get("#registerForm .btn-close").click();
  cy.get(`header button[data-bs-target="#loginModal"]`).click({ force: true });
  cy.wait(1000);
  cy.get("#loginForm #loginEmail").type("wrongemail.norsff.no", {
    force: true,
  });
  cy.get("#loginForm #loginPassword").type("invalidPassword", { force: true });
  cy.get(`#loginForm`)
    .submit()
    .should(() => {
      expect(localStorage.getItem("token")).to.be.null;
      cy.on("window:alert", (str) => {
        expect(str).to.equal(
          "Either your username was not found or your password is incorrect"
        );
      });
    });
});
