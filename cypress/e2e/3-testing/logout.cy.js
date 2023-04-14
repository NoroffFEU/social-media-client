describe("Logout", () => {
    it("first let the user login and access their profile", () => {
        cy.visit("/");
        cy.wait(2000);
        cy.get("#registerForm button[type=button]").contains("Login").should("be.visible").click()
        cy.wait(2000);
        cy.get("#loginForm");
        cy.get("#loginEmail").type("ar-workflow-test@stud.noroff.no");
        cy.wait(2000);
        cy.get("#loginPassword").type("Abcd1234");
        cy.wait(2000);
        cy.get(".modal-footer");
        cy.wait(2000);
        cy.get(".btn-success").contains("Login").click();
        cy.wait(4000);
        cy.get(".text-end");
        cy.wait(1000);
        cy.get("button[type=button]").contains("Logout").click();
      });
})