describe("testing login function", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://ingsy.github.io/social-media-client/");
        cy.wait(1000);
        cy.get("#registerForm .btn-close").click();
        cy.get('header button[data-auth="login"]').click();
        cy.wait(1000);

    });

    it("can log in with valid credentials", () => {
        cy.get("#loginForm #loginEmail").type("erik@noroff.no");
        cy.get("#loginForm #loginPassword").type("Erik12345");
        cy.get('#loginForm button[type="submit"]').click();
        cy.url()
            .should("include", "/?view=profile")
            .then(() => {
                expect(localStorage.getItem("token")).to.exist;
                expect(localStorage.getItem("profile")).to.exist;
            });
        cy.wait(1000);
        cy.get('header button[data-auth="logout"]').click();
        cy.get("#registerForm .btn-close").click();
    });

});