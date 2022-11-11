describe("E2E 1", () => {
  it("Logout btn logs the user out when clicked - test", () => {
    cy.visit("/");
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
    });
    cy.get("button[data-auth='login']:visible").click();
    cy.get("#loginForm").within(() => {
      cy.get("input[type='email']:visible").type("rotta@noroff.no");
      cy.get("input[type='password']:visible").type("rotta123");
      cy.get("button[type='submit']").click();
      cy.getLocalStorage("token").then((token) => {
        expect(token).to.not.be.null;
      });
    });

    //Get logout btn and log out
    cy.get("button").contains("Logout").click();
    cy.getLocalStorage("token").then((token) => {
      expect(token).to.be.null;
    });
  });
});
