describe("login_fail", () => {
    it("shows the user a message when they try to log in with the correct email but wrong password credentials", () => {
        cy.visit("/");
        cy.wait(2000);
        cy.get("#registerForm button[type=button]").contains("Login").should("be.visible").click()
        cy.wait(2000);
        cy.get("#loginForm");
        cy.get("#loginEmail").type("ar-workflow-test@stud.noroff.no");
        cy.wait(2000);
        cy.get("#loginPassword").type("pswd");
        cy.wait(2000);
        cy.get(".modal-footer");
        cy.wait(2000);
        cy.get(".btn-success").contains("Login").click();
      });
});

/*The console shows an error message, but the user don't get one. 
I was not sure how to make this test show that error message. Maybe there should be an error message shown to the user if they type in the wrong password. 
Currently it only shows a message to the user if they se an unauthorized email address.*/
