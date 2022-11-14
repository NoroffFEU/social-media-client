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

// Cypress.Commands.add("login", () => {
//   cy.request({
//     method: "POST",
//     url: "https://nf-api.onrender.com/api/v1/social/auth/login",
//     body: {
//       email: "steffen@noroff.no",
//       password: "passord123",
//     },
//   }).then((resp) => {
//     cy.window().then((win) =>
//       win.localStorage.setItem("accessToken", resp.body.accessToken)
//     );
//     console.log(resp.body.accessToken);
//   });
// });

let VALID_EMAIL = "steffen@noroff.no";
let VALID_PASSWORD = "passord123";

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.wait(500);
  cy.get("button[data-auth='login']:visible").click();
  cy.wait(500);
  cy.get("input[type='email']:visible").should("exist").type(VALID_EMAIL);
  cy.get("input[type='password']:visible").should("exist").type(VALID_PASSWORD);
  cy.get(".btn-success:visible").click();
  cy.wait(2000);
});
