describe("logout user", () => {
    it("logout user with click on button", () => {
        //    login
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(2000);
        cy.get("div.modal-footer > .btn-outline-success")
            .eq(1)
            .click({ force: true });
        cy.wait(2000);
        cy.get("input#loginEmail").type("albertt@noroff.no"), { delay: 1000 };
        cy.get("input#loginPassword").type("albertalbert{enter}"),
            { delay: 1000 };
        cy.wait(1000);
        cy.get(".btn-outline-warning")
            .contains("Logout")
            .click({ force: true });
    });
});
