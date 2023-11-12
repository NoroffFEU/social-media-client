const username = Cypress.env('API_USERNAME');
const password = Cypress.env('API_PASSWORD');

describe('logout', () => {
  it('logs in to account then logs out', () => {
    cy.visit('https://hyseh.github.io/social-media-client/');
    cy.wait(1000);
    cy.get('#registerForm .modal-footer .btn-outline-success').click();
    cy.wait(1000);
    cy.get('#loginEmail').type(`${username}`, { delay: 200 });
    cy.wait(500);
    cy.get('#loginPassword').type(`${password}{enter}`, { delay: 200 });
    cy.wait(2000);
    cy.get('header .btn-outline-warning').click();
    cy.wait(1000);
    cy.get('#registerForm .modal-header .modal-title').should(
      'have.text',
      'Create Profile',
    );
  });
});
