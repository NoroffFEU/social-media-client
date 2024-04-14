import {
  testUrl,
  validEmail,
  validPassword
} from '.././support/testCredentials.js'

describe('login functionality', () => {
  beforeEach(() => {
    cy.visit(testUrl)
    cy.wait(500)
    cy.get('#registerForm').should('be.visible')
  })

  it('displays a login form and logs in with valid credentials', () => {
    cy.navigateToLoginForm()
    cy.get('#loginForm').should('be.visible')
    cy.testLoginCredentials(validEmail, validPassword)
    cy.get('[data-auth="logout"]').should('be.visible')
    cy.url().should('not.include', '/login')
    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
    })
  })
})
