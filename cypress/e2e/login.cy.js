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

  it('passes', () => {
    cy.get('#loginModal #loginEmail').type('testemail12345@noroff.no');
    cy.wait(2000);
    cy.get('#loginModal #loginPassword').type('12345678');

    cy.get("button[type='submit']:visible").click({
      multiple: true,
    });

    cy.wait(2000);

    cy.get(window.localStorage.getItem('profile')).should('not.be.empty');
    cy.get(window.localStorage.getItem('token')).should('not.be.empty');
  });

  it('Cannot login with invalid email and a message is shown', () => {
    cy.get('#loginModal #loginEmail').type('testemail12345@unknown.no');
    cy.wait(2000);
    cy.get('#loginModal #loginPassword').type('12345678');

    cy.get("button[type='submit']:visible").click({
      multiple: true,
    });

    cy.wait(2000);

    cy.get(window.localStorage.getItem('profile')).should('not.exist');
    cy.get(window.localStorage.getItem('token')).should('not.exist');
  });

  it('Cannot login with invalid email and a message is shown', () => {
    cy.get('#loginModal #loginEmail').type('testemail12345@noroff.no');
    cy.wait(2000);
    cy.get('#loginModal #loginPassword').type('wrong');

    cy.get("button[type='submit']:visible").click({
      multiple: true,
    });

    cy.wait(2000);

    cy.get(window.localStorage.getItem('profile')).should('not.be.empty');
    cy.get(window.localStorage.getItem('token')).should('not.be.empty');
  });
});
// testemail12345@noroff.no
// 12345678
