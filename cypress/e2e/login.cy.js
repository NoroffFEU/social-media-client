const username = Cypress.env('API_USERNAME');
const password = Cypress.env('API_PASSWORD');

const testUsername = 'test123@noroff.no';
const testPassword = 'examplepassword123';

describe('login', () => {
  it('logs in and checks for the email on the profile page', () => {
    cy.visit('https://hyseh.github.io/social-media-client/');
    cy.wait(1000);
    cy.get('#registerForm .modal-footer .btn-outline-success').click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`${username}`, { delay: 200 });
    cy.wait(500);
    cy.get('#loginPassword').type(`${password}{enter}`, { delay: 200 });
    cy.wait(2000);
    cy.get('.profile-email').should('have.text', `${username}`);
  });
});

describe('invalid login', () => {
  it('logs in using invalid credentials and is shown a message', () => {
    cy.visit('https://hyseh.github.io/social-media-client/');
    cy.wait(1000);
    cy.get('#registerForm .modal-footer .btn-outline-success').click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`${testUsername}`, { delay: 200 });
    cy.wait(500);
    cy.get('#loginPassword').type(`${testPassword}{enter}`, { delay: 200 });
    cy.on('window:alert', (text) => {
      expect(text).to.contains(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
