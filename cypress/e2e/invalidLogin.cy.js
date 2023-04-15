// pre registered user in test client
const testName = "LinnKristin";
const testEmail = "linn12345678@noroff.no";
const testPassword = "Linn12345678";

describe("Sumbitting login form with invalid credentials", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(800);
    //   move from default modal "Create Profile" to "Log in"
    cy.get("#registerForm button[type=button]")
      .contains("Login")
      .should("be.visible")
      .click({ force: true });
    cy.wait(800);
  });
  it("does not let the user submit the login with an invalid email and is shown a message", () => {
    // input invalid login email with valid password
    cy.get("input#loginEmail").should("exist").type("notAValid@Email.com");
    cy.get("input#loginPassword").should("exist").type(testPassword);
    cy.get("#loginForm button[type=submit]")
      .contains("Login")
      .should("be.visible")
      .click();
    //   expect no token to have been added to localStorage and the profile page to not show
    cy.then(() => cy.expect(localStorage.getItem("token")).to.be.null);
    cy.get(".profile-email").should("not.exist");
    cy.wait(200);
    //   check for attributes in the input form that shows the user information aboput invalid email
    cy.get("input#registerEmail")
      .invoke("attr", "title")
      .should("include", "Only Noroff student or teacher emails are valid.");
  });

  it("does not let the user submit the login with an invalid password and is shown a message", () => {
    // input valid login email with invalid password
    cy.get("input#loginEmail").should("exist").type(testEmail);
    cy.get("input#loginPassword").should("exist").type("notAvalidPassword");
    cy.get("#loginForm button[type=submit]")
      .contains("Login")
      .should("be.visible")
      .click();
    //   expect no token to have been added to localStorage and the profile page to not show
    cy.then(() => cy.expect(localStorage.getItem("token")).to.be.null);
    cy.get(".profile-email").should("not.exist");
    cy.wait(1000);
    //   expect message to user about incorrect password/not found user
    cy.on("window:alert", (message) => {
      expect(message).to.eq(
        "Either your username was not found or your password is incorrect"
      );
    });
  });
});
