
const USER_NAME = "sjur"
const USER_EMAIL = "sjur@noroff.no"
const USER_PASSWORD = "12345678"
const USER_LOGGEDIN_STRING = "?view=profile&name=sjur"

describe("Logout Test", () => {
  before(() => {
    cy.visit("https://vanomad.github.io/social-media-client-ca/");
    cy.wait(1000);
    cy.clearLocalStorage();
    cy.title().should("contain", " Client");
  });

  it("Login with valid credentials", () => {
    cy.get("#registerModal button")
      .should("be.visible")
      .contains("Login")
      .click()
      .wait(1000);
    
    cy.get("input#loginEmail[name='email']")
      .type(USER_EMAIL);
    
    cy.get("input#loginPassword[name='password']")
      .type(USER_PASSWORD);
    
    cy.get("button[type='submit']")
      .should("be.visible")
      .contains("Login")
      .click({ force: true });
    
    cy.wait(2000);

    cy.then(() => {
      expect(localStorage.getItem("token")).to.exist;
    });

    cy.wait(2000);
  });

  it("Logout from user profile", () => {
    cy.url().should("contain", (USER_LOGGEDIN_STRING));

    cy.get("button[data-auth='logout']")
      .click();
    
  });
});