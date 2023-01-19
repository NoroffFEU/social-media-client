const USER_NAME = "CypressJester";
const USER_EMAIL = "crypressJest@noroff.no";
const USER_PASSWORD = "12345678";
const USER_AVATAR =
  "https://images.pexels.com/photos/1769271/pexels-photo-1769271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

describe("Authorization", () => {
  beforeEach(() => {
    cy.wait(500);
    cy.visit("https://joranengelund.github.io/ca-workflow/");
  });

  it("Cannot view profile page", () => {
    cy.visit("https://joranengelund.github.io/ca-workflow/?view=profile");
  });

  it("Cannot view post page", () => {
    cy.visit("https://joranengelund.github.io/ca-workflow/?view=posts");
  });

  it("Can register with valid credentials", () => {
    cy.get("form#registerForm").wait(500);
    cy.get(`input[name="name"]`).type(USER_NAME);
    cy.get(`input#registerEmail[name="email"]`).type(USER_EMAIL);
    cy.get(`input#registerPassword[type="password"]`).type(USER_PASSWORD);
    cy.get(`input#registerAvatar[name="avatar"]`).type(USER_AVATAR);
    cy.get(`button[type="submit"]`).contains("Create Profile").click();
  });

  it("Can log in with the login form with valid credentials", () => {
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500);
    cy.get(`input#loginEmail[name="email"]`).type(USER_EMAIL);
    cy.get(`input#loginPassword[name="password"]`).type(USER_PASSWORD);
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.wait(2000);
    cy.get(`button[type="button"][data-visible="loggedIn"]`)
      .contains("Logout")
      .click();
  });

  it("Can log out with the logout button", () => {
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500);
    cy.get(`input#loginEmail[name="email"]`).type(USER_EMAIL);
    cy.get(`input#loginPassword[name="password"]`).type(USER_PASSWORD);
    cy.get(`button[type="submit"]`).contains("Login").click();
    cy.wait(1000);
    cy.get(`button[type="button"][data-visible="loggedIn"]`)
      .contains("Logout")
      .click();
  });

  it("Cannot submit the login form with invalid email and gets validation message in return", () => {
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500);

    cy.get(`input#loginEmail[name="email"]`)
      .type("cakeEmail@cake.no")
      .then(($invalidEmail) => {
        expect($invalidEmail[0].validationMessage).to.be.not.empty;
      });

    cy.get(`input#loginPassword[name="password"]`).type("few");

    cy.get(`button[type="submit"]`).contains("Login").click({ force: true });
  });

  it("Cannot submit the login form with invalid password", () => {
    cy.get("#registerModal button")
      .contains("Login")
      .should("be.visible")
      .wait(500)
      .click()
      .wait(500);

    cy.get(`input#loginEmail[name="email"]`)
      .type(USER_EMAIL)
      .then(($validEmail) => {
        expect($validEmail[0].validationMessage).to.be.empty;
      });

    cy.get(`input#loginPassword[name="password"]`)
      .type("few")
      .then(($invalidPassword) => {
        expect(`input[type="password"]`);
      });

    cy.wait(500);
    cy.get(`button[type="submit"]`).contains("Login").click({ force: true });
  });
});
