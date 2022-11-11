describe("Social Media Client", () => {
  beforeEach(() => {
    // get to the login form
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(500);
  });

  it("Validates empty inputs", () => {
    // both input elements should be invalid
    cy.get("#loginForm :invalid").should("have.length", 2);

    // expect to see validation message for empty email input
    cy.get("#loginEmail:invalid")
      .invoke("prop", "validationMessage")
      .should("exist");

    cy.wait(500);

    // expect to see validation message for empty password input
    cy.get("#loginPassword:invalid")
      .should("exist")
      .invoke("prop", "validationMessage")
      .should("exist");
  });

  it("Validates invalid email input", () => {
    cy.get("#loginForm")
      .should("exist")
      .within(() => {
        cy.get("#loginEmail")
          .should("exist")
          .type("bad@email.no", { delay: 100 });
        cy.get("#loginEmail")
          .should("exist")
          .type("123456789{enter}", { delay: 100 });
        cy.wait(500);
        // expect to see validation message for invalid email
        cy.get("#loginEmail:invalid")
          .should("exist")
          .invoke("prop", "validationMessage")
          .should("exist");
      });
    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Validates invalid password input", () => {
    cy.get("#loginForm")
      .should("exist")
      .within(() => {
        cy.get("#loginEmail")
          .should("exist")
          .type("maytest25@noroff.no", { delay: 100 });
        cy.get("#loginPassword").should("exist").type("1234", { delay: 100 });

        cy.wait(500);
      });
    cy.get("#loginForm > .modal-footer > .btn-success").click();
    // expect to see validation message for invalid password
    cy.get("#loginPassword:invalid")
      .should("exist")
      .invoke("prop", "validationMessage")
      .should("exist");

    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Can log in with valid inputs", () => {
    cy.get("#loginEmail").type("maytest25@noroff.no"); // correct format
    cy.wait(500);

    cy.get("#loginPassword").type("maytestpassword"); // correct format
    cy.wait(500);
    // there are no invalid input elements
    cy.get("#loginForm :invalid").should("not.exist");

    cy.get("#loginForm > .modal-footer > .btn-success").click();

    cy.wait(1000);
    cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
    cy.url().should("not.include", "login");
  });
});
