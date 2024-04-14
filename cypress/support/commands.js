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

//Visits the homepage
Cypress.Commands.add("visitHomepage", () => {
  cy.visit("/");
  cy.wait(500);
});

// // Logged in is valid
Cypress.Commands.add("logsIn", () => {
  cy.get("#loginModal").should("be.visible");
  cy.get("#loginForm").within(() => {
    cy.get("#loginEmail").type("yawyawyaw@stud.noroff.no");
    cy.get("#loginPassword").type("Wagwanmaman122");

    cy.get("button[type=submit]").click();
  });

  cy.wait(2000);
});

// Logged in as active user
Cypress.Commands.add("loggedIn", () => {
  cy.window().then((win) => {
    const token = win.localStorage.getItem("token");
    cy.wrap(token).should("not.be.null");
    cy.wrap(token).should("be.a", "string").and("not.be.empty");
  });

  cy.get('[data-cy="profileName"]').should("contain", "testaccount");
});
