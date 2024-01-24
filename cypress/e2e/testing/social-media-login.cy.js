describe('norrofsocialmedia.no', () => {
  it('the user can log in and access their profile', () => {
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
  });
});
