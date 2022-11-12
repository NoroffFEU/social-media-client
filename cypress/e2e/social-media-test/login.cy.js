// Cypress/End-2-end to test if there is possible to login

describe('Can login to the page', () => {
  it('Start login', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("#registerForm button[data-auth='login']:visible")
      .contains('Login')
      .click();
    cy.wait(1000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('faketestaccount@stud.noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('Fakepassword200');
    cy.wait(1000);
    cy.get("#loginForm button[data-auth='loginButton']:visible").click();
  });
});
