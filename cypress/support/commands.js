// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress commands for testin

Cypress.Commands.add('openLoginForm', () => {
  cy.get('#registerModal').should('be.visible');
  cy.wait(500);

  cy.get('#registerModal')
    .find('button[data-bs-toggle="modal"][data-bs-target="#loginModal"]')
    .click({ force: true });

  // Ensure the login form is now visible
  cy.get('#loginForm').should('be.visible').wait(500);
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('#loginForm').find('input[name=email]').type(email, { force: true });
  cy.get('#loginForm')
    .find('input[name=password]')
    .type(password, { force: true });
  cy.get('#loginForm').find('button[type=submit]').click({ force: true });
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.login(email, password);
});

Cypress.Commands.add('isLoggedIn', () => {
  cy.window().its('localStorage.token').should('exist');
  cy.window().its('localStorage.profile').should('exist');
  cy.log('Logged in and token and profile is located in local storage');
});

Cypress.Commands.add('isLoggedOut', () => {
  cy.window().its('localStorage.token').should('not.exist');
  cy.window().its('localStorage.profile').should('not.exist');
  cy.log('Logged out and token and profile is removed from local storage');
});

Cypress.Commands.add('create', (title, tags, media, body) => {
  cy.get('#postForm').find('input[name=title]').type(title, { force: true });
  cy.get('#postForm').find('input[name=tags]').type(tags, { force: true });
  cy.get('#postForm').find('input[name=media]').type(media, { force: true });
  cy.get('#postForm').find('textarea[name=body]').type(body, { force: true });
  cy.get('#postForm').find('button[type=submit]').click({ force: true });
});

Cypress.Commands.add('createPost', (title, tags, media, body) => {
  cy.create(title, tags, media, body);
});
