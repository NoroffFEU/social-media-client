describe("user authentication", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });
  
    it("allows user to log in successfully", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get(".btn-close:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should("be.visible")
        .type("m.slagsvold@gmail.com");
      cy.get("input[type='password']:visible").should("be.visible").type("12345678");
      cy.get(".btn-success:visible").click();
      cy.wait(3000);
      cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
      cy.then(
        () => expect(window.localStorage.getItem("profile")).to.not.be.null
      );
    });
  
    it("checks email and password validation", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get(".btn-close:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click();
      cy.wait(1000);
      cy.get("input[type='email']:visible")
        .should("be.visible")
        .type("m.slagsvold@gmail.com");
      cy.get("input[type='password']:visible").should("be.visible").type("1234");
      cy.get(".btn-success:visible").click();
      cy.wait(3000);
      cy.then(() => expect(window.localStorage.getItem("token")).to.not.be.null);
      cy.then(() => expect(window.localStorage.getItem("profile")).to.be.null);
    });
  });
  