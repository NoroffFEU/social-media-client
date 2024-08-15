/// <reference types="cypress" />

context('Misc', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc')
  })

  it('cy.exec() - execute a system command', () => {
    // Skip the test if on Windows or in specific CI environments
    const isWindows = Cypress.platform === 'win32'
    const isCircleOnWindows = isWindows && Cypress.env('circle')
    const isShippable = !isWindows && Cypress.env('shippable')

    if (isCircleOnWindows) {
      cy.log('Skipping test on CircleCI Windows')
      return
    }

    if (isShippable) {
      cy.log('Skipping test on ShippableCI')
      return
    }

    // Execute commands only on non-Windows platforms
    if (!isWindows) {
      cy.exec('echo Jane Lane', { failOnNonZeroExit: false })
        .its('stdout').should('contain', 'Jane Lane')

      cy.exec(`cat ${Cypress.config('configFile')}`)
        .its('stderr').should('be.empty')

      cy.exec('pwd')
        .its('code').should('eq', 0)
    } else {
      cy.log('Skipping `cy.exec()` command on Windows due to shell issues')
    }
  })

  it('cy.focused() - get the DOM element that has focus', () => {
    // https://on.cypress.io/focused
    cy.get('.misc-form').find('#name').click()
    cy.focused().should('have.id', 'name')

    cy.get('.misc-form').find('#description').click()
    cy.focused().should('have.id', 'description')
  })

  context('Cypress.Screenshot', function () {
    it('cy.screenshot() - take a screenshot', () => {
      // https://on.cypress.io/screenshot
      cy.screenshot('my-image')
    })

    it('Cypress.Screenshot.defaults() - change default config of screenshots', function () {
      Cypress.Screenshot.defaults({
        blackout: ['.foo'],
        capture: 'viewport',
        clip: { x: 0, y: 0, width: 200, height: 200 },
        scale: false,
        disableTimersAndAnimations: true,
        screenshotOnRunFailure: true,
        onBeforeScreenshot () { },
        onAfterScreenshot () { },
      })
    })
  })

  it('cy.wrap() - wrap an object', () => {
    // https://on.cypress.io/wrap
    cy.wrap({ foo: 'bar' })
      .should('have.property', 'foo')
      .and('include', 'bar')
  })
})

