/* eslint-disable */

describe("The logout button logs the user out when clicked", () =>{
    it("Logs out the user", () => {
        cy.visit("http://127.0.0.1:5500/")
        cy.wait(1000);
        //login btn
        cy.get('.modal-footer > .btn-outline-success')
            .eq(1)
            .click({ force: true });
        cy.wait(500);
        cy.get('input#loginEmail').type('jorgen.w.engh@noroff.no');
        cy.get('input#loginPassword').type('12345jorgen{enter}');
        cy.wait(1000)
        cy.get(".text-end > .btn-outline-warning")
        .click({force: true})
    })
})