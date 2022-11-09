describe('validate form input for login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('CAN visit the login page', () => {
    cy.visit('http://127.0.0.1:5500/');
  });
  it('CANNOT visit profile page', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile');
    cy.url().should('not.include', 'profile');
  });
  it('CAN view the register form', () => {
    cy.get(`header [data-auth='register']`).click();
  });
  //   it('CANNOT visit profile page', () => {
  //     cy.visit('http://127.0.0.1:5500/?view=profile');
  //     cy.url().should('not.include', 'profile');
  //   });
});
