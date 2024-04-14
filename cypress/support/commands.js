Cypress.Commands.add('navigateToLoginForm', () => {
  cy.get('#registerForm').parent().find('[data-auth="login"]').click()
  cy.wait(500)
})

Cypress.Commands.add('testLoginCredentials', (email, password) => {
  cy.get('#loginEmail').type(email)
  cy.get('#loginPassword').type(password)
  cy.get('#loginForm').submit()
  cy.wait(1000)
})

Cypress.Commands.add('login', (url, email, password) => {
  cy.visit(url)
  cy.wait(500)
  cy.get('#registerForm').should('be.visible')
  cy.navigateToLoginForm()
  cy.get('#loginForm').should('be.visible')
  cy.get('#loginEmail').type(email)
  cy.get('#loginPassword').type(password)
  cy.get('button[type=submit]').click()
  cy.wait(2000)
})
