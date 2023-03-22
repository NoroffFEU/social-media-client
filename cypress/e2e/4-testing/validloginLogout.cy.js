describe("valid login", () => {
    it("signup and login user", () => {
        cy.visit("https://nf-api.onrender.com/api/v1/social/auth/login")

        cy.get("input[name="email"]").type("ingeborg@noroff.no")
        cy.get("input[name="password"]").type("12345678")
        cy.get("#signup-button").click()

        cy.location("pathname").should("eq", "/login")

        cy.get("input[name="email"]").type("ingeborg@noroff.no")
        cy.get("input[name="password"]").type("12345678")
        cy.get("#login-button").click()

        cy.location("pathname").should("eq", "/profile")
    })
})

