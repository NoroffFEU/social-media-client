describe("Logout of App", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5555/");
    cy.clearLocalStorage();
  });

  it("It can logout the current user", () => {
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
    cy.get("#loginEmail").type("bobbyfrida@stud.noroff.no");
    cy.get("#loginPassword").type("bobbyfrida@stud.noroff.no");

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
