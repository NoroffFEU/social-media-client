describe("Logout spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);

    cy.get("#registerForm").within(() => {
      cy.get("button[data-bs-target='#loginModal']:visible").click();
    });
    cy.wait(1000);

    cy.get("#loginEmail").should("exist");
    cy.get("#loginPassword").should("exist");
    cy.get("#loginEmail").type("Ramsnes@noroff.no");
    cy.get("#loginPassword").type("Marmea88");
    cy.wait(2000);
    cy.get("button[type='submit']:visible").click();
    cy.get(window.localStorage.getItem("token")).should("not.be.empty");
    cy.get(window.localStorage.getItem("profile")).should("not.be.empty");
    cy.wait(2000);
  });

  it("The user can log out with the logout button", () => {
    cy.get("button[data-auth='logout']:visible").click();
    cy.window().its("localStorage.token").should("not.exist");
    cy.window().its("localStorage.profile").should("not.exist");
  });
});
