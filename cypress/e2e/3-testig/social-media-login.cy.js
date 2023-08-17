describe('norrofsocialmedia.no', () => {
  it('the user can log in and access their profile', () => {
    cy.visit('http://127.0.0.1:8080');
    cy.wait(3000);
    cy.get('[data-bs-target="#loginModal"]').last().click();
    cy.wait(2000);
    cy.get('#loginEmail').type('emily@stud.noroff.no');
    cy.get('#loginPassword').type('123456789{enter}');
  });
});
