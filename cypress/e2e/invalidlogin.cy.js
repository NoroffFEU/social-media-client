describe('Login with invalid credentials and get error message', () => {
  it('login', () => {
    cy.visit('https://emel-h.github.io/social-media-client/')
    cy.get('#loginEmail').type('emeHas54817@stud.noroff.no')
    cy.get('#loginPassword').type('emelhass{enter}')

    cy.on('window:alert', (t) => {
      // assertions
      expect(t).contains('Either your username was not found or your password is incorrect')
    })
  })
})
