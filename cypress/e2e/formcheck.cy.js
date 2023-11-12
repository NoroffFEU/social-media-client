const email = "jeanett.kestner@stud.noroff.no";
const password = "Kestner12";
const wrongEmail = "testing@noroff.no";
const wrongPassword = "passwordtest12";

describe("Form validation test", () => {
  beforeEach(() => {
    cy.visit("/index.html");
    cy.wait(1000);
    cy.get("#registerModal").contains("Login").click();
    cy.wait(1000);
  });

  it("User cannot log in with wrong email", () => {
    cy.get("#loginEmail").type(wrongEmail);
    cy.get("#loginPassword").type(password);
    cy.get("#loginForm button[type=submit]").contains("Login").click();
    cy.wait(2000);
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
  });

  it("User cannot log in with wrong password", () => {
    cy.get("#loginEmail").type(email);
    cy.get("#loginPassword").type(wrongPassword);
    cy.get("#loginForm button[type=submit]").contains("Login").click();
    cy.wait(2000);
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
  });

  it("User cannot login with wrong email and password", () => {
    cy.get("#loginEmail").type(wrongEmail);
    cy.get("#loginPassword").type(wrongPassword);
    cy.get("#loginForm button[type=submit]").contains("Login").click();
    cy.wait(2000);
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
  });

  it("User cannot log in without filling out the form", () => {
    cy.get("#loginEmail:invalid").should("exist");
    cy.get("#loginPassword:invalid").should("exist");
    cy.get("#loginForm button[type=submit]").contains("Login").click();
    cy.wait(2000);
  });
});
