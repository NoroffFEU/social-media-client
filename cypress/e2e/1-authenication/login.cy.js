const vaildEmail = "idangu50260@stud.noroff.no";
const validPassword = "Lollipop1";
const invalidEmail = "invalid@invalid.no";
const invalidPassword = "iskrem2";

//https://stackoverflow.com/questions/51795306/how-can-we-test-the-alert-and-the-text-it-is-displaying-using-cypress-io-js-auto
//answered Nov 18, 2021 at 8:35 BalajiK
describe("Login", () => {
  it("Refuse to login a user with no input", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
    cy.get("#registerModal").contains("Close").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
  });

  it("Refuse to login a user with invalid email and invalid password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
    cy.get("#registerModal").contains("Close").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(invalidEmail);
    cy.get("#loginPassword").type(invalidPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
  });

  it("Refuse to login a user with valid email and invalid password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
    cy.get("#registerModal").contains("Close").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(vaildEmail);
    cy.get("#loginPassword").type(invalidPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
  });

  it("Refuse to login a user with invalid email and valid password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
    cy.get("#registerModal").contains("Close").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(invalidEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
  });

  it("Login a user with valid email and password", () => {
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("not.have.class", "logged-in");
    cy.get("#registerModal").contains("Close").click();
    cy.wait(500);
    cy.get("#loginForm").should("be.visible");
    cy.get("#loginEmail").type(vaildEmail);
    cy.get("#loginPassword").type(validPassword);
    cy.get("button[type=submit]").contains("Login").click();
    cy.wait(500);
    cy.on("window:alert", (str) => {
      expect(str).to.not.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.wait(500);
    cy.visit("/");
    cy.wait(500);
    cy.get("body").should("have.class", "logged-in");
  });
});
