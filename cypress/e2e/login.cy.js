import { locatorObj } from '../pageLocators/locatorObj'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})


describe('login Create post, and logout', () => {
  it('validates user inputs correctly based on API restrictions', () => {
    cy.visit('http://127.0.0.1:5500')
    cy.clearLocalStorage();
    cy.get(locatorObj.getLoginButton, { timeout: 10000 }).click({ force: true })

    cy.fixture('UserData.json').then((data) => {
      let myEmail = data.email
      cy.get(locatorObj.getEmailField, { timeout: 10000 }).invoke('val', myEmail)
      cy.wait(2000)

      cy.fixture('UserData.json').then((data) => {
        cy.get(locatorObj.getPasswordField, { timeout: 10000 }).type(data.password)
        cy.wait(2000)
    })

    cy.get(locatorObj.getLoginButtonOnModel).contains('Login').click({ force: true })
    

    cy.get(locatorObj.getCreatepost, { timeout: 10000 }).should('be.visible').click({ force: true })
  
    cy.get(locatorObj.getPostTitle, { timeout: 10000 }).should('be.visible').type(data.postTitle)
    cy.get(locatorObj.getPostTag, { timeout: 10000 }).should('be.visible').type(data.postTag)
    cy.get(locatorObj.getPostMedia, { timeout: 10000 }).should('be.visible').type(data.postMedia)
    cy.get(locatorObj.getPostBody, { timeout: 10000 }).should('be.visible').type(data.postBody)
    cy.get(locatorObj.getPublishButton, { timeout: 10000 }).should('be.visible').click({ force: true })
    cy.get(locatorObj.getDeleteButton, { timeout: 30000 }).eq(0).should('be.visible')
    cy.get(locatorObj.getTopLogoutButton, { timeout: 60000 }).should('be.visible').click({ force: true })
    cy.get(locatorObj.getTopLoginButton, { timeout: 10000 }).should('be.visible')
    cy.visit('http://127.0.0.1:5500')
  })
  })
})
