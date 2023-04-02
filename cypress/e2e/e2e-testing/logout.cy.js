describe("User log out functionality", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });
  
    it("successfully logs out the user", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get(".btn-close:visible").click();
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type("");
      cy.get("input[type='password']:visible").should("exist").type("12345678");
      cy.get(".btn-success:visible").click();
      cy.wait(3000);
      cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
      cy.then(
        () => expect(window.localStorage.getItem("profile")).to.not.be.null
      );
      cy.get("button[data-auth='logout']").click();
      cy.then(() => expect(window.localStorage.getItem("token")).to.be.null);
      cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    });
  });
  