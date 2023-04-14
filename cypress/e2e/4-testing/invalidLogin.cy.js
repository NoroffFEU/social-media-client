describe("testing invalidlogin function", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://ingsy.github.io/social-media-client/");
        cy.wait(1000);
        cy.get("#registerForm .btn-close").click();
        cy.get('header button[data-auth="login"]').click();
        cy.wait(1000);

    });

    it("cannot log in with invalid credentials and is shown a message", () => {

        cy.get("#loginForm #loginEmail").type("erik@hotmail.com");
        cy.get("#loginForm #loginPassword").type("12345678");
        cy.get('#loginForm button[type="submit"]').click();
        cy.wait(1000);
        cy.get("#loginForm .btn-close").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("your e-mail or password is incorrect. Try again :)")
        })
    });



});