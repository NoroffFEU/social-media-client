describe("valid login", () => {
    it("user can log in with valid credentials", () => {
        cy.visit("https://github.com/Ingsy/social-media-client.git");

        cy.wait(1000);

        cy.get(".modal-footer button[data-bs-target='#loginModal']", {
            timeout: 3000,
        })

            .should("be.visible")
            .click();
        cy.get("#registerModal", { timeout: 3000 }).should("not.be.visible");

        cy.wait(1000);

        cy.get("#loginModal", { timeout: 3000 }).should("be.visible");
        cy.get("input#loginEmail.form-control", { timeout: 4000 }).type("ingsy@hotmail.com", { delay: 200 });
        cy.get("input#loginPassword.form-control", { timeout: 4000 }).type("invalidPassword", { delay: 200 });

        cy.get("#loginModal .modal-footer button[type='submit']", { timeout: 4000 })
            .should("not.be.visible")
            .click();

        cy.intercept(
            "POST",
            "https://nf-api.onrender.com/api/v1/social/auth/login",
            {
                statuscode: 401,
            }
        ).as("deniedLogin");

        cy.wait("@deniedLogin");

    })
})