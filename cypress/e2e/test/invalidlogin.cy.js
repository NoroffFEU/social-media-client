/* eslint-disable no-undef */
import { invalidEmail, invalidPassword } from '../../support/testdata';

describe('Cannot login with invalid credentials', () => {
  it('cannot login with invalid credentials', () => {
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
    cy.get('#loginEmail').type(invalidEmail);
    cy.get('#loginPassword').type(invalidPassword);

    cy.get('#loginForm button').contains('Login').click();

    cy.on('window:alert', (message) => {
      expect(message).to.equal(
        'Either your username was not found or your password is incorrect',
      );
    });
  });
});
