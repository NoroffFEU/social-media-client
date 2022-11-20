describe("Create form validates user input", () => 

    // closes the modal
    it("Logs in to test posts", () => {
        cy.visit("index.html");

            cy.wait(1000);
        cy.get("#registerModal button[type=reset]").click()

            cy.wait(1000);
        cy.get("header [data-auth='login']").click();

            cy.wait(1000);
        cy.get("input[type=email]:visible").should("exist").type(`phimik59854@stud.noroff.no`)
        cy.get("input[type=password]:visible").should("exist").type(`Noroff123`)

            cy.wait(1000)
        cy.get(".btn-success").contains("Login").click();
            cy.wait(2000)

        cy.get("#footerActions [data-visible='loggedIn']")
            .contains("New Post")
            .should("be.visible")
            .click();
        cy.wait(1000);
        //POST CREATE

        cy.get("#postTitle")
            .should("be.visible")
            .type("Testing a cypress test")
        cy.get("#postTags")
            .type("Phil, test")
        cy.get("#postMedia")
            .type("https://i.postimg.cc/13w6DfLT/boo.jpg")
        cy.get("#postBody")
            .type("Hopefully this test goes through!")
        cy.wait(2000)
        cy.get("button[data-action=submit").should("be.visible").click()
    }))