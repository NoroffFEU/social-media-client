describe('My Tests', () => {
  it('log in with valid credentials', () => {
    cy.visit('http://127.0.0.1:5500/')

    cy.get('#otherLoginButton').click()

    cy.get('#loginEmail')
      .type('frankie@stud.noroff.no')

      cy.get('#loginPassword')
        .type('password123')

      cy.get('#loginButton').click()

      cy.url().should('include', '?view=profile&name=Frankie')
  })

  it('log in with invalid credentials', () => {
    cy.visit('http://127.0.0.1:5500/')

    cy.get('#otherLoginButton').click()

    cy.get('#loginEmail')
      .type('wrong@stud.noroff.no')

      cy.get('#loginPassword')
        .type('invalid')

      cy.get('#loginButton').click()

      cy.contains('Please register or login to view this page.')
  })

  it('log out', () => {
    cy.visit('http://127.0.0.1:5500/')

    cy.get('#otherLoginButton').click()

    cy.get('#loginEmail')
      .type('frankie@stud.noroff.no')

      cy.get('#loginPassword')
        .type('password123')

      cy.get('#loginButton').click()

      cy.url().should('include', '?view=profile&name=Frankie')

      cy.get('#logoutButton').click()

      cy.contains('Please register or login to view this page.')
  })
})