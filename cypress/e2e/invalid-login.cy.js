const correctEmail = "bulba@noroff.no";
const correctPassword = "goldsilver";
const wrongEmail = "rofl@lol.mao";
const wrongPassword = "Fakeword";

describe("Login email test", () => {
  it("should deny empty input submit", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
  });

  it("should deny empty password input", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(correctEmail);
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginPassword:invalid").should("exist");
  });

  it("should deny invalid email", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(wrongEmail);
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
  });

  it("should deny wrong password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(wrongPassword);
    cy.get("button[type=submit]").contains("Login").click();
  });
});
