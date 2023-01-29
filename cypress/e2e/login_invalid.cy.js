const USER_EMAIL = "unauthorised@noroff.no"
const USER_PASSWORD = "12341234"

describe("Unauthorised User, Can not Login", () => {
  beforeEach(() => {
    cy.visit("https://vanomad.github.io/social-media-client-ca/");
    cy.wait(1000);
    cy.clearLocalStorage();
  });

  it("Login with valid credentials", () => {
    cy.title()
      .should("eq", "Test Client");
    
    cy.get("#registerModal button")
      .should("be.visible")
      .contains("Login")
      .click()
      .wait(1000);
    
    cy.get("input#loginEmail[name='email']")
      .type(USER_EMAIL);
    
    cy.get("input#loginPassword[name='password']")
      .type(USER_PASSWORD)
      .wait(2000);
    
    cy.get("button[type='submit']")
      .should("be.visible")
      .contains("Login")
      .click({ force: true });
    
    cy.wait(2000);

    cy.on("window:alert", (Text) => {
      expect(Text).to.eq("Either your username was not found or your password is incorrect")
    });

    cy.then(() => {
      expect(window.localStorage.getItem("token")).to.be.null;
    });
    
  });
});