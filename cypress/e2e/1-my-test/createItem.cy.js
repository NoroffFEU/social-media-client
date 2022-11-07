describe("creat post", () => {
    it("test if you can post a new post", () => {
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
        // create new post
        cy.get("a.btn-outline-success").click({ force: true });
        cy.wait(1000);
        cy.get("input#postTitle").type("cypress test title"), { delay: 1000 };
        cy.get("textarea#postBody").type("cypress test body"), { delay: 1000 };
        cy.get(".btn-success").contains("Publish").click({ force: true });
    });
});
