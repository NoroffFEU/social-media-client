import { validEmail, validPassword } from '../support/testCredentials.js'

describe('Logout Test', () => {
  it('should log in with valid credentials, then log out again', () => {
    cy.visit(`https://kristakaza.github.io/social-media-client/`)
    cy.wait(1000)
    cy.get(
      '#registerForm > div.modal-footer > button.btn-outline-success'
    ).click()
    cy.wait(1000)
    cy.get(`#loginEmail`).type(validEmail)
    cy.get(`#loginPassword`).type(validPassword)
    cy.wait(1000)
    cy.get(`button.btn-success`).contains('Login').click()
    cy.wait(2000)
    cy.get('button.btn-outline-warning').contains('Logout').click()
    cy.wait(2000)
    cy.get('#registerForm > div.modal-footer > button.btn-outline-success')
      .contains('Login')
      .should('exist')
  })
})
