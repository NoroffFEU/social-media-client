describe("authentication", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearLocalStorage();
  });

  it("CAN login", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(1000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("testAdrian@noroff.no");
    cy.get("input[type='password']:visible").should("exist").type("12345678");
    cy.get(".btn-success:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(
      () => expect(window.localStorage.getItem("profile")).to.not.be.null
    );
  });

  it("validates email and password input", () => {
    cy.visit("/");
    cy.wait(1000);
    cy.get(".btn-close:visible").click();
    cy.wait(1000);
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("testAdrian@hey.com");
    cy.get("input[type='password']:visible").should("exist").type("1234");
    cy.get(".btn-success:visible").click();
    cy.wait(3000);
    cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
  });
});
