import { apiPath } from '../../../src/js/api/constants';

describe('login user', () => {
  it('can log a user in', () => {
    /* cy.visit(`${apiPath}/social/auth/login`); */
    cy.visit('http://localhost:5500');
    cy.get('input#registerEmail').type('ThoJen84480@stud.noroff.no{enter}');
    cy.get('input#registerPassword').type('Yzems224{enter}');
    cy.contains('button', '.btn-outline-success').click;
  });
});
// Select an API route to hook onto and provide an alias
/* cy.intercept(`${apiPath}/social/auth/login`); */

/* cy.wait('@loginUser'); */
