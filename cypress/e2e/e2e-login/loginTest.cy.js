describe('Login/logout functionality and authentication', () => {
    // Checks if a user can successfully log in
    it('Login functionality', () => {
      cy.visit('../../index.html');
      cy.wait(3000);
  
      // Open the login modal
      cy.get("button[data-auth='login']")
        .filter(':visible')
        .first()
        .click({ force: true });
      cy.wait(3000);
  
      // Enter valid credentials
      cy.get("input[type='email']")
        .filter(':visible')
        .first()
        .should('exist')
        .type('endtoendtest@noroff.no');
      cy.get("input[type='password']")
        .filter(':visible')
        .first()
        .should('exist')
        .type('Password1234');
      cy.get('.btn-success').filter(':visible').first().click({ force: true });
      cy.wait(3000);
  
      // Assert the URL to include 'view=profile'
      cy.url({ timeout: 10000 }).should('include', 'view=profile');
    })
  
    // Verifies the input of invalid email credentials and checks for an error message
    it('Validates email input', () => {
      cy.visit('../../index.html');
      cy.wait(3000);
  
      // Open the login modal again
      cy.get("button[data-auth='login']")
        .filter(':visible')
        .first()
        .click({ force: true });
      cy.wait(3000);
  
      // Enter invalid email credentials
      cy.get("input[type='email']")
        .filter(':visible')
        .first()
        .should('exist')
        .type('notvalid@email.com');
      cy.get("input[type='password']")
        .filter(':visible')
        .first()
        .should('exist')
        .type('Password1234');
      cy.get('.btn-success').filter(':visible').first().click({ force: true });
      cy.wait(3000);
  
      // Check for alert text indicating invalid email
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.include(
          'Only noroff student or teacher emails are valid',
        )
      });
  
      // Ensure URL has not changed to profile view
      cy.url().should('not.include', 'view=profile')
    });
  
    // Verifies the input of invalid password credentials and checks for an error message
    it('Validates password', () => {
      cy.visit('../../index.html');
      cy.wait(3000);
  
      // Open the login modal
      cy.get("button[data-auth='login']")
        .filter(':visible')
        .first()
        .click({ force: true });
      cy.wait(3000);
  
      cy.get("input[type='email']:visible")
        .should('exist')
        .type('endtoendtest@noroff.no');
      cy.get("input[type='password']:visible").should('exist').type('123');
      cy.get('.btn-success:visible').first().click({ force: true });
      cy.wait(3000);
  
      cy.url().should('not.include', 'view=profile')
    })
  
    it('Log out functionality', () => {
      cy.visit('../../index.html');
      cy.wait(3000);
  
      // Open the login modal
      cy.get("button[data-auth='login']")
        .filter(':visible')
        .first()
        .click({ force: true });
      cy.wait(3000);
  
      cy.get("input[type='email']:visible")
        .should('exist')
        .type('endtoendtest@noroff.no');
      cy.get("input[type='password']:visible")
        .should('exist')
        .type('Password1234');
      cy.get('.btn-success:visible').first().click({ force: true });
      cy.wait(3000);
  
      cy.url().should('include', 'view=profile');
  
      cy.get("button[data-auth='logout']")
        .should('be.visible')
        .first()
        .click({ force: true });
      cy.wait(3000);
  
      cy.then(() => {
        expect(window.localStorage.getItem('token')).to.be.null
      });
    });
  });
  