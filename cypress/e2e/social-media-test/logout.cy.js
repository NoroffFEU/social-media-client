// Cypress/End-2-end to test if there is possible to login and then logout again.

describe('Can login to the page and perform an logout + clearing localStorage', () => {
  it('Logout of the site', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerForm button[data-auth='login']:visible")
      .contains('Login')
      .click();
    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('faketestaccount@stud.noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('Fakepassword200');
    cy.wait(2000);
    cy.get("#loginForm button[data-auth='loginButton']:visible").click();
    cy.wait(3000);
    cy.get(".text-end button[data-auth='logout']:visible").click({
      multiple: true,
    });
    cy.wait(3000);
    cy.clearLocalStorage();
  });
});
