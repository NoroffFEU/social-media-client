describe('Logout Test', () => {
    beforeEach(() => {
        cy.login("test@stud.noroff.no", "cypress-test");
        cy.get("[data-visible='loggedIn']").should("be.visible");
    });

    it('should log out', () => {
        cy.wait(1000);
        cy.get("[data-auth='logout']").click();
        cy.get("[data-visible='loggedIn']").should("not.be.visible");
    });
});

