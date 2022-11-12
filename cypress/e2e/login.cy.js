describe("login", () => {
  const email = Cypress.env("email");
  const password = Cypress.env("password");

  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("login with valid email and password", () => {
    cy.wait(1000);
    cy.get("button[type='reset']:visible").click();
    cy.wait(1000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").should("exist").type(`${email}`);
    cy.wait(1000);
    cy.get("input[type='password']:visible")
      .should("exist")
      .type(`${password}`);
    cy.wait(1000);
    cy.get("button[type='submit']:visible").click();
    cy.wait(2000);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
    cy.wait(1000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.wait(1000);
    cy.url().should("include", "profile");
  });

  it("get alert when login with invalid email and password", () => {
    cy.wait(1000);
    cy.get("button[type='reset']:visible").click();
    cy.wait(1000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(`test@2stud.noroff.no`);
    cy.wait(1000);
    cy.get("input[type='password']:visible").should("exist").type(`123456`);
    cy.wait(1000);
    cy.get("button[type='submit']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible").should("exist").clear();
    cy.wait(1000);
    cy.get("input[type='password']:visible").should("exist").clear();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type(`test@stud.noroff.no`);
    cy.wait(1000);
    cy.get("button[type='submit']:visible").click();
    cy.wait(1000);
    cy.get("input[type='password']:visible").should("exist").type(`12345678`);
    cy.wait(1000);
    cy.get("#loginForm :invalid").should("not.exist");
  });
});
