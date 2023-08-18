describe('norrofsocialmedia.no', () => {
  it('the user can log out with the logout button', () => {
    cy.visit('http://localhost:8080');
    cy.wait(2000);
    cy.get('[data-bs-target="#loginModal"]').last().click();
    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('emily@stud.noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('123456789{enter}');
    cy.wait(2000);
    cy.url().should('include', 'profile');
    cy.wait(2000);
    cy.get('[data-auth="logout"]').click();
    cy.wait(2000);
    cy.url().should('not.include', 'profile');
  });
});
