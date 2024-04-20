describe('Invalid login', () => {
  it('fails authentication of the user', () => {
    cy.visit('/')
    cy.wait(500)
    cy.get(`#registerForm [data-auth="login"]`).contains('Login').should('exist').click()
    cy.wait(500)
    cy.get('input#loginEmail').type('somefailed@stud.noroff.no')
    cy.get('input#loginPassword').type('helloWorld')
    cy.get('#loginForm button').contains('Login').should('be.visible').click()

    const alertHandler = cy.stub().as('alertHandler')
    cy.on('window:alert', alertHandler)
    cy.wrap(alertHandler).should('exist')
  })
})
