// pre registered user in test client
const testName = "LinnKristin";
const testEmail = "linn12345678@noroff.no";
const testPassword = "Linn12345678";

describe("The login process", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(500);
  });
  it("lets the user log in and access their profile", () => {
    //   move from default modal "Create Profile" to "Log in"
    cy.get("#registerForm button[type=button]")
      .contains("Login")
      .should("be.visible")
      .click({ force: true });
    cy.wait(500);
    // input login credentials
    cy.get("input#loginEmail").should("exist").type(testEmail);
    cy.get("input#loginPassword").should("exist").type(testPassword);
    cy.get("#loginForm button[type=submit]")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
    // check that user is logged in and can see their profile page
    cy.get("header button[type=button]")
      .contains("Logout")
      .should("be.visible");
    cy.get(".profile-email").contains(testEmail).should("be.visible");
    cy.get(".profile-name").contains(testName).should("be.visible");
  });
});
