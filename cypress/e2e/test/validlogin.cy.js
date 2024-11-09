/* eslint-disable no-undef */
import { validEmail, validPassword } from '../../support/testdata';

describe('Login with valid credentials', () => {
  it('User can log in with valid credentials', () => {
    cy.visit('https://verpenunes.github.io/social-media-client/');
    cy.wait(5000);

    cy.get('#registerModal').then(($modal) => {
      if ($modal.is(':visible')) {
        cy.get('#registerModal').click('topRight');
      }
    });

    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').should(
      'be.visible',
    );

    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').eq(1).click();
    cy.wait(5000);
    cy.get('#loginEmail').type(validEmail);
    cy.get('#loginPassword').type(validPassword);

    cy.get('#loginForm button').contains('Login').click();

    cy.wait(4000);
    cy.get('button').contains('Logout').should('exist').should('be.visible');
  });
});
