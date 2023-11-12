describe('Login and access profile', () => {
  it('login', () => {
    cy.visit('https://emel-h.github.io/social-media-client/')
    cy.get('#loginEmail').type('emeHas54817@stud.noroff.no')
    cy.get('#loginPassword').type('emelhassen{enter}')
    cy.url().should('contain', 'Emel_Hassen')
    cy.url().should('contain', 'profile')
  })
})
