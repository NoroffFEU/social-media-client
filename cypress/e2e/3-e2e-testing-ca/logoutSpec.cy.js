describe("Logout spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click();
    });
    cy.wait(2000);

    cy.get("#loginEmail").type("morram45808@stud.noroff.no");
    cy.get("#loginPassword").type("Moreminerals88");
    cy.wait(2000);
    cy.get("button[type='submit']:visible").click();
    cy.get(window.localStorage.getItem("token")).should("not.be.empty");
    cy.get(window.localStorage.getItem("profile")).should("not.be.empty");
    cy.wait(3000);
  });

  it("The user can log out with the logout button", () => {
    cy.get("button[data-auth='logout']:visible").click();
    cy.wait(5000);
    cy.window().its("localStorage.token").should("not.exist");
    cy.window().its("localStorage.profile").should("not.exist");
  });
});
