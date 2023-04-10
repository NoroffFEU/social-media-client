describe("testing invalidlogin function", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://ingsy.github.io/social-media-client/");
        cy.wait(1000);
        cy.get("#registerForm .btn-close").click();
        cy.get('header button[data-auth="login"]').click();
        cy.wait(1000);

    });

    it("cannot log in with invalid credentials", () => {

        cy.get("#loginForm #loginEmail").type("erik@hotmail.com");
        cy.get("#loginForm #loginPassword").type("12345678");
        cy.get('#loginForm button[type="submit"]').click();
        cy.wait(1000);
        cy.get("#loginForm .btn-close").click();
    });



});