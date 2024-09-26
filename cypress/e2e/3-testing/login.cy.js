describe("login", () => {
    it("lets user login and access their profile", () => {
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
      });
});
