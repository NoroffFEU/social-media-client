Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login');

  cy.get('input[name=username]').type(username);

  // {enter} causes the form to submit
  cy.get('input[name=password]').type(`${password}{enter}`, { log: false });

  // we should be redirected to /dashboard
  cy.url().should('include', '/dashboard');

  // our auth cookie should be present
  cy.getCookie('your-session-cookie').should('exist');

  // UI should reflect this user being logged in
  cy.get('h1').should('contain', username);
});

// In your spec file

it('does something on a secured page', function () {
  const { username, password } = this.currentUser;
  cy.login(username, password);

  // ...rest of test
});
