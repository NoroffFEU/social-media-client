const { type } = require('os')

describe('login fail alert', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })
  it('showes a alert when wrong credentials are given', () => {
    cy.wait(2000)
    cy.get('.modal-footer button[data-auth="login"]').click()
    cy.wait(2000)
    cy.get('#loginEmail')
      .type('PetMik64782@stud.noroff.no')
      .should('have.value', 'PetMik64782@stud.noroff.no')
    cy.get('#loginPassword').type('test').should('have.value', 'test')
    cy.get(`button[type="submit"]`).contains('Login').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        'Either your username was not found or your password is incorrect'
      )
    })
  })
})
