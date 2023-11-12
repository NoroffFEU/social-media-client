describe('Invalid login attempt', () => {
    beforeEach(() => {
        // Visit the log in page before each test
        cy.visit('/index.html');
    });

    it('should show an error message for invalid login attempt', () => {
         // Open login modal
         cy.get("button[data-auth='login']").first().click();
         cy.wait(300);
 
         // Enter invalid information into login form
         cy.get('#loginEmail').type('invalid@invalid.no');
         cy.get('#loginPassword').type('invalidPassword');

         // Click log in
         cy.get('button[type="submit"]').first().click(); 
         cy.wait(5000);

         // Verify that error message is displayed
         cy.on('window:alert', (alertText) => {
            expect(alertText).to.include(
              'Only noroff student or teacher emails are valid',
            )
          });

         // Verify that the login was unsuccessful
         cy.url().should('not.include', 'view=profile');
    })


    // Wrong Noroff email test
    
    it('should show an error message for invalid login attempt', () => {
        // Open login modal
        cy.get("button[data-auth='login']").first().click();
        cy.wait(300);

        // Enter invalid information into login form
        cy.get('#loginEmail').type('invalid@noroff.no');
        cy.get('#loginPassword').type('invalidPassword');

        // Click log in
        cy.get('button[type="submit"]').first().click(); 
        cy.wait(5000);

        // Verify that error message is displayed
        cy.on('window:alert', (alertText) => {
           expect(alertText).to.include(
             'Either your username was not found or your password is incorrect',
           )
         });

        // Verify that the login was unsuccessful
        cy.url().should('not.include', 'view=profile');
   })
})

