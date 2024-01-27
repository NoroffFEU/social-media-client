describe("User logout", () => {
  beforeEach(() => {
    cy.visit("./");
    cy.clearLocalStorage();
  });

  it("successfully logs out the user", () => {
    cy.visit("/");
    cy.wait(1500);
    cy.get(".btn-close:visible").click({ multiple: true });
    cy.wait(1500);
    cy.get("button[data-auth='login']:visible").click({ multiple: true });
    cy.wait(1500);
    cy.get("input[type='email']:visible")
      .should("exist")
      .type("name@example.com");
    cy.get("input[type='password']:visible").should("exist").type("mane12345");
    cy.get(".btn-success:visible").click({ multiple: true });
    cy.wait(2000);
    cy.get(window.localStorage.getItem("token")).should("not.to.be.empty");
    cy.get(window.localStorage.getItem("profile")).should("not.to.be.empty");
    cy.get("button[data-auth='logout']").click({ multiple: true });
    cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
    cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
  });
});
