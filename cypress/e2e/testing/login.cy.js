describe("User Authentication", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500");
    cy.clearLocalStorage();
  });

  it("allows successful login and access to profile", () => {
    const validEmail = "victoria@stud.noroff.no";
    const validPassword = "password";

    cy.get(".btn-outline-success").click();
    cy.get("input[type='email']").type(validEmail);
    cy.get("input[type='password']").type(validPassword);
    cy.get(".btn-success").click();

    cy.url().should("include", "/profile");
  });

  it("displays an error message on invalid credentials", () => {
    const invalidEmail = "invalid-email@example.com";
    const invalidPassword = "invalid-password";

    cy.get(".btn-outline-success").click();
    cy.get("input[type='email']").type(invalidEmail);
    cy.get("input[type='password']").type(invalidPassword);
    cy.get(".btn-success").click();

    cy.get(".error-message").should("be.visible");
  });

  it("allows user to log out with the logout button", () => {
    cy.get(".btn-outline-warning").click();
    cy.url().should("not.include", "/profile");
  });
});