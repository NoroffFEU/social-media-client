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

import { login } from "../../src/js/api/index";
import { logout } from "../../src/js/api/index";
import { createPost } from "../../src/js/api/index";

Cypress.Commands.add("login", async (email, password) => {
  await login(email, password);
});
Cypress.Commands.add("logout", () => {
  logout();
});
Cypress.Commands.add("create", (title, body, media, tags) => {
  createPost(title, body, media, tags);
});
