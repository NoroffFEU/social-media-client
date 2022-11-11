
describe('test the login verification', () => {
    it('can login as valid user', () => {
        cy.visit('http://127.0.0.1:5500/');
        cy.wait(500);
        cy.get('.modal-footer > .btn-outline-success')
            .eq(1)
            .click({ force: true });
            //Waiting for modal
        cy.wait(500);
        // login in with invalid user
        cy.get('input#loginEmail').type('jorgen.engh@hotmail.com');
        cy.get('input#loginPassword').type('tessty');
        //login btn
        cy.get(`[data-bs-dismiss="modal"]`)
            .eq(1)
            .click({ force: true });
        // Login with right username and password
        cy.wait(1000);
        cy.reload()
        cy.wait(1000);
        //login btn
        cy.get('.modal-footer > .btn-outline-success')
            .eq(1)
            .click({ force: true });
        cy.wait(500);
        cy.get('input#loginEmail').type('jorgen.w.engh@noroff.no');
        cy.get('input#loginPassword').type('jorgen12345');
    });
});