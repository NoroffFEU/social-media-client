Cypress.Commands.add("OpenLogInForm", () => {
      cy.visit(`https://ahb-7.github.io/SoS/`)
      cy.wait(1000)
      cy.get(
            "#registerForm > div.modal-footer > button.btn-outline-success"
      ).click()
      cy.wait(1000)
})
Cypress.Commands.add("loginWithValidUser", () => {
      cy.fixture("userData").then((userData) => {
            cy.get("#loginEmail").type(userData.email)
      })
      cy.get("#loginPassword").type(Cypress.env("password"))
      cy.wait(400)
      cy.get(`button.btn-success`).contains("Login").click()
      cy.wait(600)
})
Cypress.Commands.add("loginWithUnvalidUser", () => {
      cy.fixture("userData").then((userData) => {
            cy.get("#loginEmail").type(userData.email)
      })
      cy.get("#loginPassword").type("123123")
      cy.wait(400)
      cy.get(`button.btn-success`).contains("Login").click()
      cy.wait(600)
})
Cypress.Commands.add("IsLoggedIn", () => {
      cy.window().then((win) => {
            const token = win.localStorage.getItem("token")
            expect(token).to.exist
      })
})
Cypress.Commands.add("IsLoggedOut", () => {
      cy.window().then((win) => {
            const token = win.localStorage.getItem("token")
            expect(token).to.be.null
      })
})
