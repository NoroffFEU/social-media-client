describe("Social media app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("#registerForm .modal-header button.btn-close")
      .should("be.visible")
      .click();
    cy.get("#registerForm .modal-header button.btn-close")
      .should("be.visible")
      .click();
    cy.get("#registerForm .modal-header button.btn-close")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get(".text-end .btn-outline-success").contains("Login").click();
  });

  it("CAN login with valid email and password", () => {
    cy.get("#loginEmail").should("exist").type("test@stud.noroff.no");
    cy.get("#loginPassword").should("exist").type(`password123{enter}`);
  });

  it("CANNOT login with invalid email and password", () => {
    cy.get("#loginEmail").should("exist").type("testing.email.noroff@gmail.no");
    cy.get("#loginPassword").should("exist").type(`password123{enter}`);
  });
});

/*
describe("The login form VALIDATES user inputs CORRECTLY based on API restrictions", () => {
  it("validates and logs in", () => {
    cy.visit("http://127.0.0.1:5500/");
    cy.get("button").contains("Login").should("be.visible").click();
    cy.get("input[type='email']").should("exist").type("testtest@noroff.no");
    cy.get("input[type='password']")
      .should("exist")
      .type(`passwordworking{enter}`);
    cy.wait(2000);
      cy.get("input[type=email]").should("exist").type("testtest@noroff.no");
    cy.get("input[type=password]").should("exist").type(`passwordworking{enter}`);
*/
