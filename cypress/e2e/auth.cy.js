// User can login with the login form with valid credentials 
// User can logout with the logout button 

const TEST_EMAIL = "email@noroff.no"; 
const TEST_PASSWORD = "password"; 

describe("login", () => {
    
    beforeEach(() => {
        cy.visit("/index.html");
    });

    it("Can login with the login form with valid credentials", () => {
        cy.get ("#registerModal button")
            .contains("Login")
            .should("be.visible")
            .wait(500)
            .click()
            .wait(500)
        
        cy.get(`input#loginEmail[name="email"]`).type(TEST_EMAIL);
        cy.get(`input#loginPassword[name="password"]`).type(TEST_PASSWORD);
        cy.get(`button[type="submit"]`).contains("Login").click();
        cy.wait(500);
        
        cy.get(`button[type="button"][data-visible="loggedIn"]`)
            .contains("Logout")
            .click();
    });

    it("Can logout with the logout button", () => {
        cy.get("#registerModal button")
            .contains("Login")
            .should("be.visible")
            .wait(500)
            .click()
            .wait(500);

        cy.get(`input#loginEmail[name="email"]`).type(TEST_EMAIL);
        cy.get(`input#loginPassword[name="password"]`).type(TEST_PASSWORD);
        cy.get(`button[type="submit"]`).contains("Login").click();
        cy.wait(1000);

        cy.get(`button[type="button"][data-visible="loggedIn"]`)
            .contains("Logout")
            .click();
    });
});