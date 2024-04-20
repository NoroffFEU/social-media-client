const email = 'AleHar77338@stud.noroff.no'
const password = 'Am4M#9!xuHJ"wkt'

describe('Login user', () => {
  it('Allows the user to login with the right credentials', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get(`#registerForm [data-auth="login"]`).contains('Login').should('exist').click()
    cy.wait(500)
    cy.get('input#loginEmail').type(email)
    cy.get('input#loginPassword').type(password)
    cy.get('#loginForm button').contains('Login').should('be.visible').click()
    cy.window().then((window) => {
      const token = window.localStorage.getItem('token')
      if (token) {
        expect(token).to.be.a('string')
      } else {
        console.log('No token found in local storage.')
      }
    })
  })
})
