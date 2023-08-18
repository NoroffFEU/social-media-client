describe('norrofsocialmedia.no', () => {
  it('the user can log out with the logout button', () => {
    cy.visit('http://localhost:8080');
    cy.wait(3000);
    cy.get('[data-bs-target="#loginModal"]').last().click();
    cy.wait(2000);
    cy.get('#loginEmail').type('emily@stud.noroff.no');
    cy.get('#loginPassword').type('123456789{enter}');
    cy.wait(8000);
    cy.get('[data-auth="logout"]').click();
    cy.wait(8000);
  });
});
