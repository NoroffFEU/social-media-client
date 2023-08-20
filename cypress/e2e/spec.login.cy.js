describe("User Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("allows successful login", () => {
    cy.visit("/");
    cy.wait(800);
    cy.get(".btn-close:visible").click({ force: true });

    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1200);

    const testEmail = "milla@stud.noroff.no";
    const testPassword = "12345678";

    cy.get("input[type='email']:visible").should("exist").type(testEmail);
    cy.get("input[type='password']:visible").should("exist").type(testPassword);

    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(2000);

    cy.then(() => {
      expect(window.localStorage.getItem("profile")).to.not.be.null;
      expect(window.localStorage.getItem("token")).to.not.be.null;
    });

    cy.url().should("include", "profile");
  });

  it("displays error on invalid email input", () => {
    cy.visit("/");
    cy.wait(800);
    cy.get(".btn-close:visible").click({ force: true });

    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1200);

    const invalidEmail = "notvalid@email.com";
    const invalidPassword = "notvalidpassword";

    cy.get("input[type='email']:visible").should("exist").type(invalidEmail);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(invalidPassword);

    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(2000);

    cy.then(() => {
      expect(window.localStorage.getItem("profile")).to.be.null;
      expect(window.localStorage.getItem("token")).to.be.null;
    });

    cy.url().should("not.include", "profile");
  });

  it("rejects invalid password", () => {
    cy.visit("/");
    cy.wait(800);
    cy.get(".btn-close:visible").click();

    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1200);

    const testEmail = "milla@stud.noroff.no";
    const incorrectPassword = "wrongpassword";

    cy.get("input[type='email']:visible").should("exist").type(testEmail);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(incorrectPassword);

    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(2000);

    cy.then(() => {
      expect(window.localStorage.getItem("profile")).to.not.exist;
      expect(window.localStorage.getItem("token")).to.not.exist;
    });

    cy.url().should("not.include", "profile");
  });
});
