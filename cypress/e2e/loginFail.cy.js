// User cannot submit the login form with invalid credentials, and is shown a message

describe("login with invalid credentials", () => {

    it("User cannot submit login form with invalid username or password, and is shown a message", () => {
        
        cy.visit("/index.html");
        cy.clearLocalStorage();
        cy.wait(500);
    
        cy.get("#registerForm button[data-auth='login']")
            .contains("Login")
            .should("be.visible")
            .click();
        cy.wait(500);
    
        cy.get("input#loginEmail").type("invalidEmailk@noroff.no");
        cy.get("input#loginPassword").type("invalidPassword");
        cy.wait(500);
    
        cy.get("button[type='submit']").contains("Login").click();
        cy.wait(500);
        cy.on("window:alert", (txt) => {
          expect(txt).to.eq(
            "Either your username was not found or your password is incorrect"
          );
        });
    });

});
