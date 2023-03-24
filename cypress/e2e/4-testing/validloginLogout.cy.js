describe("valid login", () => {
    it("user can log in with valid credentials", () => {
        cy.visit("https://github.com/Ingsy/social-media-client.git");

        cy.wait(1000);

        cy.get(".modal-footer button[data-bs-target='#loginModal']", {
            timeout: 3000,
        })

            .should("be.visible")
            .click();
        cy.get("#registerModal", { timeout: 3000 }).should("not.be..visible");

        cy.wait(1000);

        cy.get("#loginModal", { timeout: 3000 }).should("be.visible");
        cy.get("input#loginEmail", { timeout: 4000 }).type(Cypress.env("user_password"), { delay: 200 });

        cy.get("#loginModal .modal-footer button[type='submit']", { timeout: 4000 })
            .should("be.visible")
            .click();

        cy.intercept(
            "https://ingsy.github.io/social-media-client/?view=profile&name=Erik")
            .as("profileView");
        cy.wait("@profileView")

        cy.get("header button[data-auth='logut']", { timeout: 4000 })
            .should("be.visible")
            .click();

        cy.wait(1000);
        cy.get("registerModal", { timeout: 4000 }).should("be.visible");

    })
})






