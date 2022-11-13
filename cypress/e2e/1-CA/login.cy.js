describe("Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("can login", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("sveek-29353@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("passord123");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.url().should("include", "profile");
  });

  it("Validates email input", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click({ force: true });
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("/https://nf-api.onrender.com");
    cy.get("input[type='password']:visible").should("exist").type("passord123");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.url().should("not.include", "profile");
  });

  it("Validates password", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.get("button[data-auth='login']:visible").click({ force: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("sveek-29353@stud.noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("passord123");
    cy.get(".btn-success:visible").click({ force: true });
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.exist);
    cy.then(() => expect(window.localStorage.getItem("token")).to.exist);
    cy.url().should("include", "profile");
  });
});
