describe("User login and profile access", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });
  
    it("Allows the user to log in and access their profile", () => {
      cy.wait(1000);
      cy.get(".btn-close:visible").click();
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type("m.slagsvold@gmail.com");
      cy.get("input[type='password']:visible").should("exist").type("12345678");
      cy.get(".btn-success:visible").click();
      cy.wait(3000);
      cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
      cy.then(
        () => expect(window.localStorage.getItem("profile")).to.not.be.null
      );
    });
  
    it("valid credentials for email and password", () => {
      cy.wait(1000);
      cy.get(".btn-close:visible").click();
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type("m.slagsvold@gmail.com");
      cy.get("input[type='password']:visible").should("exist").type("1234");
      cy.get(".btn-success:visible").click();
      cy.wait(3000);
      cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
      cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    });
  });
  