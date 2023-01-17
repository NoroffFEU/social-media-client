/* eslint-disable no-undef */
// helpers.js
const login = (email, password) => {
  cy.visit('/login');
  cy.get("input[name='email']").type(email);
  cy.get("input[name='password']").type(password);
  cy.get('form').submit();
};

export { login };
