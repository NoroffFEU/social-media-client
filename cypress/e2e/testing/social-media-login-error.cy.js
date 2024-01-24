describe('norrofsocialmedia.no', () => {
  it('the user cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.visit('http://localhost:8080');
    cy.wait(2000);
    cy.get('[data-bs-target="#loginModal"]').last().click();
    cy.wait(2000);
    cy.get("input[type='email']:visible")
      .should('exist')
      .type('notauser@stud.noroff.no');
    cy.get("input[type='password']:visible")
      .should('exist')
      .type('notapassword{enter}');
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `Either your username was not found or your password is incorrect`,
      );
      cy.wait(2000);
      cy.url().should('not.include', 'profile');
    });
  });
});
