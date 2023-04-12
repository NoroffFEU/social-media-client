describe("Social media app: Authenticated user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("header [data-auth='login']").click({ force: true });
  });

  it("CAN login with valid credentilas and access their profile ", () => {
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.get(".profile > .btn").should("be.visible").contains("edina1");
    cy.url().should("include", "profile");
  });

  it("CAN logout with the logout button", () => {
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.get("header [data-auth='logout']")
      .should("be.visible")
      .click({ force: true });

    cy.clearLocalStorage().should(() => {
      expect(localStorage.getItem("token")).to.be.null;
      expect(localStorage.getItem("profile")).to.be.null;
    });
  });
});

describe("Social media app: Unauthenticated user", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
    cy.get("header [data-auth='login']").click({ force: true });
  });

  it("CANNOT login with invalid credentials and is shown a message ", () => {
    cy.get("#loginForm input[type='email']")
      .as("emailInput")
      .should("be.visible");
    cy.get("@emailInput").click();
    cy.wait(200);
    cy.get("@emailInput").type("invalidemail@noroff.no");
    cy.get("@emailInput").should("not.have.value", Cypress.env("PASSWORD"));

    cy.get("#loginForm input[type='password']")
      .as("passwordInput")
      .should("be.visible");
    cy.get("@passwordInput").click();
    cy.get("@passwordInput").type("inwalidpassword", { delay: 100 });

    cy.get("#loginForm > .modal-footer > .btn-success")
      .contains("Login")
      .click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        `Either your username was not found or your password is incorrect`
      );
    });
    cy.url().should("not.include", "profile");
  });
});
