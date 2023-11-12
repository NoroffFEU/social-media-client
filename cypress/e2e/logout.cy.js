describe('Logout from accessed profile using logout button', () => {
  it('logout', () => {
    cy.visit('https://emel-h.github.io/social-media-client/')
    cy.get('#loginEmail').type('emeHas54817@stud.noroff.no')
    cy.get('#loginPassword').type('emelhassen{enter}')
    cy.url().should('contain', 'Emel_Hassen')
    cy.get('button').contains('Logout').click()
    cy.url().should('equal', 'https://emel-h.github.io/social-media-client/')
  })
})
