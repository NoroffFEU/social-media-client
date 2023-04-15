describe("login_fail", () => {
    it("shows the user a message when they try to log in with wrong email but correct password credentials", () => {
        cy.visit("/");
        cy.wait(2000);
        cy.get("#registerForm button[type=button]").contains("Login").should("be.visible").click()
        cy.wait(2000);
        cy.get("#loginForm");
        cy.get("#loginEmail").type("wrongEmail@wrong.no");
        cy.wait(2000);
        cy.get("#loginPassword").type("Abcd1234");
        cy.wait(2000);
        cy.get(".modal-footer");
        cy.wait(2000);
        cy.get(".btn-success").contains("Login").click();
      });
});
