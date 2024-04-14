import {
  testUrl,
  invalidEmail,
  invalidPassword
} from '.././support/testCredentials.js'

describe('login functionality', () => {
  beforeEach(() => {
    cy.visit(testUrl)
    cy.wait(500)
    cy.get('#registerForm').should('be.visible')
  })

  it('displays a message if the login function has invalid credentials', () => {
    cy.navigateToLoginForm()
    cy.get('#loginForm').should('be.visible')
    cy.testLoginCredentials(invalidEmail, invalidPassword)
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.contain(
        'Either your username was not found or your password is incorrect'
      )
    })
  })
})
