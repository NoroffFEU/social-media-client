describe("Social Media App: Unauthenticated user", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click({ force: true });
    cy.wait(1500);
    cy.get("#loginForm").should("be.visible");
  });

  it("CANNOT login with empty input email", () => {
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
  });

  it("CANNOT login with invalid email", () => {
    cy.get("#loginEmail").type("email@gmail.com");
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
    cy.on("window:alert", (errorText) => {
      expect(errorText).to.include("Only Noroff emails are valid");
    });
  });

  it("CANNOT login with empty input password", () => {
    cy.get("#loginEmail").type("user@noroff.no");
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginPassword:invalid").should("exist");
  });

  it("CANNOT login with invalid password", () => {
    cy.get("#loginEmail").type("user@noroff.no");
    cy.get("#loginPassword").type("xxx");
    cy.get("button[type=submit]").contains("Login").click();
    cy.on("window:alert", (errorText) => {
      expect(errorText).to.contain("Invalid password");
    });
  });
});

describe("Social Media App: Authenticated user", () => {
  it("CAN login with valid email and password", () => {
    cy.visit("/");
    cy.wait(600);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(600);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type("eoinoro@noroff.no");
    cy.get("#loginPassword").type("123456789");
    cy.get("button[type=submit]").contains("Login").click();
  });
});
