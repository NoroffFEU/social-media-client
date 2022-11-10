describe('Can login to the page and perform an logout + clearing localStorage', () => {
  it('Logout of the site', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.wait(1000);
    cy.get("button[data-auth='login']:visible").click({ multiple: true });
    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('faketestaccount@stud.noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('Fakepassword200');
    cy.wait(2000);
    cy.get("button[data-auth='loginButton']:visible").click({ multiple: true });
    cy.wait(3000);
    cy.get("button[data-auth='logout']:visible").click({ multiple: true });
    cy.wait(3000);
    cy.clearLocalStorage();
  });
});
