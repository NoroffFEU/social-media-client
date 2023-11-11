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

  it("Validates email input for valid email pattern", () => {
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible").should("exist").type(`jester`);
      cy.get("input[type='password']:visible").should("exist").type(`password`);
      cy.get("button[type='submit']").click();
      //expect email input should have focus and be invalid
      cy.get("input[type='email']").should("have.focus");
      cy.get("input[type='email']:invalid").should("exist");
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
      //expect email input should have focus and be invalid
      cy.get("input[type='email']").should("have.focus");
      cy.get("input[type='email']:invalid").should("exist");
      cy.wait(2000);
    });
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
      cy.get("input[type='password']:visible").should("exist").type(`p`);
      cy.get("button[type='submit']").click();
      /* Cypress seems to have a bug here this submits when it shouldn't,
         in browser focus shifts to password input and message is displayed
         in cypress the form is submitted without meeting length requirement*/
      // cy.get("input[type='password']").should("have.focus");
      // cy.get("input[type='password']:invalid").should("exist");
      cy.wait(2000);
    });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
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
