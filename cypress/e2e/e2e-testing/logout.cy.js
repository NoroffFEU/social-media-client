describe("User log out functionality", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });
  
    it("successfully logs out the user", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get(".btn-close:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type("user@example.com"); // Make sure this email is correct and registered
      cy.get("input[type='password']:visible").should("exist").type("12345678"); // Make sure this password is correct
      cy.get(".btn-success:visible").click({ multiple: true });
      cy.wait(3000);
      // The following line is where the error occurs. Make sure the login process is working correctly.
      cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
      cy.then(
        () => expect(window.localStorage.getItem("profile")).to.not.be.null
      );
      cy.get("button[data-auth='logout']").click();
      cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
      cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    });
  });
  