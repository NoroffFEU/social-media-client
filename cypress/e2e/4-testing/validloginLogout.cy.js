describe("testing login function", () => {
    it("user can log in with valid credentials", () => {
        beforeEach(() => {
            cy.visit("https://ingsy.github.io/social-media-client/");
            cy.clearLocalStorage();
            cy.wait(1000);
            cy.get("#registerForm .btn-close").click();
            cy.get('header button[data-auth="login"]').click();
            cy.wait(1000);

        });

        it("can log in with valid credentials", () => {
            cy.get("#loginForm #loginEmail").type("erik@noroff.no");
            cy.get("#loginForm #loginPassword").type("erik1234");
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

        //invalid login 

        it("cannot log in with invalid credentials", () => {

            cy.get("#loginForm #loginEmail").type("erik@hotmail.com");
            cy.get("#loginForm #loginPassword").type("12345678");
            cy.get('#loginForm button[type="submit"]').click();
            cy.wait(1000);
            cy.get("#loginForm .btn-close").click();
        });

    });
});