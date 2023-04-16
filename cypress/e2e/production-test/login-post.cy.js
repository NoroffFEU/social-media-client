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
        // Click on new post brn
        cy.contains(".btn", "New Post").click();
        cy.wait(500);
        // Input Title
        cy.get("input#postTitle").type("Header");
        // Input Cypress
        cy.get("input#postTags").type("Test cypress");
        // input Media
        cy.get("input#postMedia").type(
            "https://imgv3.fotor.com/images/videoImage/Fotors-free-online-profile-picture-maker.jpg"
        );
        // Input textarea
        cy.get("textarea#postBody").type("this is a test ");
        // Check empty input if empty break
        cy.get("input#postTitle").invoke("val").should("not.be.empty");
        cy.get("input#postTags").invoke("val").should("not.be.empty");
        cy.get("input#postMedia").invoke("val").should("not.be.empty");
        cy.get("textarea#postBody").invoke("val").should("not.be.empty");
        cy.get("#postForm").submit();
    });
});
