describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click();
    });
    cy.wait(2000);
  });

  it("The user can login with the login form with valid credentials", () => {
    cy.get("#loginEmail").type("morram45808@stud.noroff.no");
    cy.get("#loginPassword").type("Moreminerals88");
    cy.get("button[type='submit']:visible").click();
    cy.get(window.localStorage.getItem("token")).should("not.be.empty");
    cy.get(window.localStorage.getItem("profile")).should("not.be.empty");
  });

  it("The user cannot submit the login form with invalid credentials and is shown a message", () => {
    cy.get("#loginEmail").type("not_real_user@hotmail.no");
    cy.get("#loginPassword").type("not_real_password");
    cy.get("button[type='submit']:visible").click();
    cy.window().its("localStorage.token").should("not.exist");
    cy.window().its("localStorage.profile").should("not.exist");
  });
});
