describe("User Logout", () => {
  beforeEach(() => {
    cy.visit("./");
    cy.clearLocalStorage();
  });

  it("allows user to log out", () => {
    cy.get("#registerModalLabel")
      .should("have.text", "Create Profile")
      .should("be.visible");

    cy.wait(800);

    cy.get("#registerForm")
      .find(".btn-outline-success")
      .should("be.visible")
      .click({ force: true });

    cy.get("#loginModalLabel")
      .should("have.text", "Login")
      .should("be.visible");

    cy.wait(800);

    const loginEmail = "milla@stud.noroff.no";
    const loginPassword = "12345678";

    cy.get("#loginEmail").type(loginEmail);
    cy.get("#loginPassword").type(loginPassword);

    cy.wait(800);

    cy.get("#loginForm .btn-success")
      .should("be.visible")
      .click({ force: true });

    cy.wait(800);

    cy.get("button[data-auth='logout']")
      .should("be.visible")
      .click({ force: true });

    cy.then(() => {
      expect(window.localStorage.getItem("token")).to.be.null;
    });
  });
});
