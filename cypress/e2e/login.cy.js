describe('Successful login with valid email and password', () => {
  beforeEach(() => {
    cy.visit('index.html');
    cy.clearAllLocalStorage();

    cy.wait(2000);
    cy.get('form#registerForm').within(() => {
      cy.get("button[data-bs-target='#loginModal']").click();
    });
    cy.wait(2000);
  });

  it('The user can log in with the login form with valid credentials', () => {
    cy.login('testemail12345@noroff.no', '12345678');

    cy.get(window.localStorage.getItem('profile')).should('not.be.empty');
    cy.get(window.localStorage.getItem('token')).should('not.be.empty');
  });

  it('Cannot login with invalid email', () => {
    cy.login('testemail12345@unknown.no', '12345678');

    cy.get(window.localStorage.getItem('profile')).should('not.exist');
    cy.get(window.localStorage.getItem('token')).should('not.exist');
  });

  it('Cannot login with invalid password', () => {
    cy.login('testemail12345@noroff.no', 'wrong');

    cy.get(window.localStorage.getItem('profile')).should('not.exist');
    cy.get(window.localStorage.getItem('token')).should('not.exist');
  });
});
