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
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to close a modal if it's open
Cypress.Commands.add("closeModalIfOpen", (modalSelector) => {
  cy.get(modalSelector).then(($modal) => {
    if ($modal.is(":visible")) {
      cy.get(`${modalSelector} .btn-close`).click();
    }
  });
});

// Custom command to get an input field by name
Cypress.Commands.add("getInput", (inputName) => {
  return cy.get(`input[name="${inputName}"]`).should("have.length", 1).first();
});
