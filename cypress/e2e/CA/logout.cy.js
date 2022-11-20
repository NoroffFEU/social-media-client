describe("authenticate", () => {

    // closes the modal
    it("Logs in to test logout", () => {
        cy.visit("index.html");
        cy.clearLocalStorage();

        cy.wait(1000);
        cy.get("#registerModal button[type=reset]").click()

        cy.wait(1000);
        cy.get("header [data-auth='login']").click();

        cy.wait(1000);
        cy.get("input[type=email]:visible").should("exist").type(`phimik59854@stud.noroff.no`)
        cy.get("input[type=password]:visible").should("exist").type(`Noroff123`)

        cy.wait(1000)
        cy.get(".btn-success").contains("Login").click();
        cy.wait(2000);
    })
})


describe("Logout", () => {
    it("logs user out", () => {
        cy.wait(3000)
        cy.clearLocalStorage();
        cy.get(".btn").contains("Logout").click();
    })
})