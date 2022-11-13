// Test user:
// ("gonzalo02@stud.noroff.no", "Gonzalo123")

describe('Login test', () => {
  const wait = 2500;
  const MOCK_CORRECT_EMAIL = 'gonzalo02@stud.noroff.no';
  const MOCK_CORRECT_PASS = 'Gonzalo123';
  const MOCK_WRONG_EMAIL = 'wrongmail@studorf.no';
  const MOCK_WRONG_PASS = 'wrongpasswordddr';

  function testLogin(email, password) {
    cy.get('#registerModalLabel')
      .should('have.text', 'Create Profile')
      .should('be.visible');
    cy.wait(wait);
    cy.get('#registerForm')
      .find('.btn-outline-success')
      .should('be.visible')
      .click();
    cy.get('#loginModalLabel')
      .should('have.text', 'Login')
      .should('be.visible');
    cy.wait(wait);
    cy.get('#loginEmail').type(`${email}`);
    cy.get('#loginPassword').type(`${password}`);
    cy.wait(wait);
    cy.get('#loginForm .btn-success').should('be.visible').click();
    cy.wait(wait);
  }

  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  it('should not give token when password is wrong', () => {
    testLogin(MOCK_CORRECT_EMAIL, MOCK_WRONG_PASS);
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Allowing unauthorized exception
    });
    cy.then(() => {
      expect(window.localStorage.getItem('token')).to.be.null;
    });
  });

  it('it should not give token when email is wrong', () => {
    testLogin(MOCK_WRONG_EMAIL, MOCK_CORRECT_PASS);
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Allowing unauthorized exception
    });
    cy.then(() => {
      expect(window.localStorage.getItem('token')).to.be.null;
    });
  });

  it('should give token when email and password is correct', () => {
    testLogin(MOCK_CORRECT_EMAIL, MOCK_CORRECT_PASS);
    cy.then(() => {
      expect(window.localStorage.getItem('token')).to.not.be.null;
    });
  });
});
