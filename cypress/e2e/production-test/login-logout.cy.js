/**
 * This is Test for login
 */
describe("Login to Noroff SMC", () => {
    it("Visits the Noroff SMC", () => {
        // Login inn to localhost
        cy.visit("http://localhost:5173/");
        // Wait
        cy.wait(400);
        // selecting register and click on button conains Login
        cy.get("#registerModal").contains("Login").click();
        cy.wait(400);
        //Typing in User Mail
        cy.get("input#loginEmail").type("test1234@noroff.no");
        // Checking if input is null
        cy.get("input#loginEmail").invoke("val").should("not.be.empty");
        //Typing in Password
        cy.get("input#loginPassword").type("testtest1234");
        // Checking if input is null
        cy.get("input#loginPassword").invoke("val").should("not.be.empty");
        cy.get("#loginForm").submit();
        cy.wait(500);
        cy.contains(".btn", "Logout").click();
    });
});
