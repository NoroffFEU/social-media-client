
const USER_NAME = "sjur"
const USER_EMAIL = "sjur@noroff.no"
const USER_PASSWORD = "12345678"

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("https://vanomad.github.io/social-media-client-ca/");
    cy.wait(1000);
    cy.clearLocalStorage();
  })
  it("Login with valid credentials", () => {
    cy.title().should("eq", "Test Client");
    cy.get("#registerModal button").should("be.visible").contains("Login").click().wait(1000);
    cy.get("input#loginEmail[name='email']").type(USER_EMAIL);
    cy.get("input#loginPassword[name='password']").type(USER_PASSWORD);
    cy.get("button[type='submit']").should("be.visible").contains("Login").click({ force: true });
    cy.wait(2000);
    cy.then(() => {
      expect(localStorage.getItem("token")).to.exist;
    });
  });
});