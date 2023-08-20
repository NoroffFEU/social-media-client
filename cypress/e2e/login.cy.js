describe("Login to app", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5555/");
    cy.clearLocalStorage();
  });

  it("It can login successfully", () => {
    cy.visit("http://127.0.0.1:5555/");

    cy.wait(800);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });

    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("bobbyfrida@stud.noroff.no");

    cy.get("input[type='password']:visible")
      .should("exist")
      .type("bobbyfrida@stud.noroff.no");
    cy.get(".btn-success:visible").click({ force: true });

    cy.wait(600);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null,
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
  });

  it("It tries to validates fake email input", () => {
    cy.visit("http://127.0.0.1:5555/");

    cy.wait(800);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });

    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("faketrude@fakeemail.com");

    cy.get("input[type='password']:visible")
      .should("exist")
      .type("trudesfakepassword");
    cy.get(".btn-success:visible").click({ force: true });

    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("It validates password", () => {
    cy.visit("http://127.0.0.1:5555/");

    cy.wait(800);
    cy.get(".btn-close:visible").click();
    cy.get("button[data-auth='login']:visible").click({ force: true });

    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("bobbyfrida@stud.noroff.no");

    cy.get("input[type='password']:visible")
      .should("exist")
      .type("bobbyfrida@stud.noroff.no");
    cy.get(".btn-success:visible").click({ force: true });

    cy.wait(2000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.exist);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.exist);
    cy.url().should("include", "profile");
  });
});
