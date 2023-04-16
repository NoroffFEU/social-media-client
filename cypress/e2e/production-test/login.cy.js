/**
 * This is Test for login
 */
describe("Login to Noroff SMC", () => {
    it("Visits the Noroff SMC", () => {
        cy.visit("http://localhost:5173/");
    });
});
