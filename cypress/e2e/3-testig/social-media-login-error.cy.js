describe('norrofsocialmedia.no', () => {
  it('the user cannot submit the login form with invalid credentials and is shown a message', () => {
    cy.visit('http://localhost:8080');
    cy.wait(3000);
    cy.get('[data-bs-target="#loginModal"]').last().click();
    cy.wait(2000);
    cy.get('#loginEmail').type('notauser@stud.noroff.no');
    cy.get('#loginPassword').type('123456789{enter}');
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        `Either your username was not found or your password is incorrect`,
      );
    });
  });
});
