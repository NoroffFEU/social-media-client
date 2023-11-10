const correctEmail = "cyprustest@noroff.no";
const correctPassword = "cyprus123";
const wrongEmail = "notgoing@towork.com";
const wrongPassword = "NeitherGoingToWorK123";

describe("Login Flow", () => {
  it("Deny submission with empty input", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
  });

  it("Deny submission with empty password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(correctEmail);
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginPassword:invalid").should("exist");
  });

  it("Deny submission with invalid email", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(wrongEmail);
    cy.get("button[type=submit]").contains("Login").click();
    cy.get("#loginEmail:invalid").should("exist");
  });

  it("Deny submission with incorrect password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(wrongPassword);
    cy.get("button[type=submit]").contains("Login").click();
  });

  it("Allow a valid user to successfully log in", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(correctEmail);
    cy.get("#loginPassword").type(correctPassword);
    cy.get("button[type=submit]").contains("Login").click();
  });
});
