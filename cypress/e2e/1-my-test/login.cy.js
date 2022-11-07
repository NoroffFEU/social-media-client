/*eslint-disable */
const speed = 1000;
describe("login user", () => {
    it("can search for Noroff", () => {
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(2000);
        cy.get("div.modal-footer > .btn-outline-success")
            .eq(1)
            .click({ force: true });
        cy.wait(2000);
        cy.get("input#loginEmail").type("albertt@noroff.no"), { delay: speed };
        cy.get("input#loginPassword").type("albertalbert{enter}"),
            { delay: speed };
        // new try
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(2000);
        cy.get("div.modal-footer > .btn-outline-success")
            .eq(1)
            .click({ force: true });
        cy.wait(2000);
        cy.get("input#loginEmail").type("albertt@noroff.no"), { delay: speed };
        cy.get("input#loginPassword").type("albertalbert{enter}"),
            { delay: speed };
    });
});
