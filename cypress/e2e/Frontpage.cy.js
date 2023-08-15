describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.wait(1000);
  });

  it("allows the user to log in and access their profile", () => {
    cy.wait(1000);
    cy.get("#loginButton").click();
    cy.wait(1000);

    cy.get("#loginEmail").type("sandersan@stud.noroff.no");
    cy.get("#loginPassword").type("Sander124");
    cy.get("#loginForm").submit();

    cy.url().should("include", "/?view=profile");
  });

  it("shows an error message when invalid credentials are submitted", () => {
    cy.get("#loginButton").click();

    cy.get("#loginEmail").type("invalid@example.com");
    cy.get("#loginPassword").type("invalidpassword");
    cy.get("#loginForm").submit();

    cy.contains("Invalid email or password").should("be.visible");
  });

  it("allows the user to log out with the logout button", () => {
    cy.get("#loginButton").click();
    cy.wait(1000);
    cy.get("#loginEmail").type("sandersan@stud.noroff.no");
    cy.get("#loginPassword").type("Sander124");
    cy.get("#loginForm").submit();

    cy.get('[data-auth="logout"]').click();
  });
});
