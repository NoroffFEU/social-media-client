Cypress.Commands.add(
  'login',
  (email = 'sindretest@stud.noroff.no', password = '12345678') => {
    cy.get('#loginModal input[name="email"]').type(email);
    cy.get('#loginModal input[name="password"]').type(password);
    cy.get('#loginModal form').submit();
  },
);
