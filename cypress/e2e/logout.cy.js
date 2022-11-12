describe("it logs you out after logging in", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/");
    cy.clearLocalStorage();
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
  });

  // Logs in with a registered account's details
  it("CAN login with good credentials", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(`thefool@noroff.no`);
      cy.wait(500);
      cy.get("input[type='password']:visible").should("exist").type("password");
      cy.get("button[type='submit']:visible").click();
      cy.wait(500);
      cy.then(() => expect(localStorage.getItem("token")).to.not.be.null);
      cy.then(() => expect(localStorage.getItem("profile")).to.not.be.null);
      cy.wait(1000);
    });
    cy.get("button[data-auth='logout']:visible").click();
  });
});
