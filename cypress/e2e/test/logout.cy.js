/* eslint-disable no-undef */
import { validEmail, validPassword } from '../../support/testdata';

describe('Login first then logout', () => {
  it('Can login with valid credentials then logout after logout button appears', () => {
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

    cy.get('button').contains('Logout').should('be.visible');

    cy.wait(2000);

    cy.get('button[data-auth="logout"]').click();

    cy.get('button[data-auth="login"][data-bs-toggle="modal"]').should(
      'be.visible',
    );
  });
});
