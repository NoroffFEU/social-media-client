describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
    cy.wait(500);
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(500);
  });

  it("Can login", () => {
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(Cypress.env("EMAIL"));
      cy.get("input[type='password']:visible")
        .should("exist")
        .type(Cypress.env("PASSWORD"));
      cy.get("button[type='submit']").click();
    });
    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.url().should("include", "profile");
  });

  it("Validates email input for valid emails", () => {
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible").should("exist").type(`jester`);
      cy.get("input[type='password']:visible").should("exist").type(`password`);
      cy.get("button[type='submit']").click();
      //expect invalid input popup on submit
      cy.get("input[type='email']:invalid")
        .invoke("prop", "validationMessage")
        .should("exist");
      cy.wait(2000);
    });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
    //The form doesn't allow login but closes the modal regardless of success
    cy.get("#loginForm").should(`be.visible`);
  });

  it("Validates user email input based on API restrictions", () => {
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(`jester@somewhere.com`);
      cy.get("input[type='password']:visible").should("exist").type(`password`);
      cy.get("button[type='submit']").click();
      //expect invalid input popup on submit
      cy.get("input[type='email']:invalid")
        .invoke("prop", "validationMessage")
        .should("exist");
      cy.wait(2000);
    });
    // shouldn't send form with invalid email pattern
    // cy.on("window:alert", (msg) => {
    //   expect(msg).to.equal("Either your username was not found or your password is incorrect");
    // });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
    cy.get("#loginForm").should(`be.visible`);
  });

  it("Validates user password input based on API restrictions", () => {
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(Cypress.env("EMAIL"));
      cy.get("input[type='password']:visible").should("exist").type(`passwor`);
      cy.get("button[type='submit']").click();
      cy.get("input[type='password']:invalid")
        .invoke("prop", "validationMessage")
        .should("exist");
      cy.wait(2000);
    });
    // shouldn't send a form with a password below 8 characters
    // cy.on("window:alert", (msg) => {
    //   expect(msg).to.equal("Either your username was not found or your password is incorrect");
    // });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
    //The form doesn't allow login but closes the modal regardless of success
    cy.get("#loginForm").should(`be.visible`);
  });

  it("Return invalid password/email message for wrong password", () => {
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(Cypress.env("EMAIL"));
      cy.get("input[type='password']:visible").should("exist").type(`password`);
      cy.get("button[type='submit']").click();
    });
    cy.wait(2000);
    cy.on("window:alert", (msg) => {
      expect(msg).to.equal(
        "Either your username was not found or your password is incorrect"
      );
    });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
    cy.get("#loginForm").should(`be.visible`);
  });
});
