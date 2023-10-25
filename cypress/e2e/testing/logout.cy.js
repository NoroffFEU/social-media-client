describe('User Logout', () => {
  beforeEach(() => {
    cy.visit('/');
  });


  it('should successfully log out', () => {
    cy.wait(1000);
    cy.get('#btn-go-to-login').first().click();
    cy.wait(500);
    cy.get('#loginEmail').type('YngNyk98390@stud.noroff.no');
    cy.get('#loginPassword').type('Yngve1992');
    cy.get('#loginForm').submit();

    cy.get('.profile').should('be.visible');
    
    cy.wait(3000);
    cy.get('button[data-auth="logout"]').click();


  });
});
