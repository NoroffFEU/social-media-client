/// cypress/support/commands.js
Cypress.Commands.add("login", () => {
    cy.visit("/");  // Visit the homepage
    
    cy.get('[data-auth="login"]').first().should("be.visible").click(); 
    cy.get("#loginModal").should("exist"); 
    
    cy.get("#loginEmail").type(Cypress.env("LOGIN_EMAIL"));
    cy.get("#loginPassword").type(Cypress.env("LOGIN_PASSWORD"));
    cy.get("#loginForm").submit(); 
    
    // Ensure login is successful
    cy.window().its("localStorage.token").should("exist");
    cy.url().should("not.include", "/login"); 
  });
  
  
///

/* First test: HomePage  */

Cypress.Commands.add("showHome", () => {
    cy.visit("/");
    cy.wait(500);
  
  });
  
  /* Second test: Go to login form */
  
  Cypress.Commands.add("showLoginForm", () => {
    cy.get("#registerForm").find("button[data-auth=login]").click();
    cy.get("#loginForm").should("be.visible");
    cy.wait(500);
  
  });
  
  /* Third test: Fill out and login with loginForm */
  
  Cypress.Commands.add("loginForm", (email, password) => {
    cy.get("#loginForm").find("input[name=email]").type(Cypress.env("LOGIN_EMAIL"));
    cy.get("#loginForm").find("input[name=password]").type(Cypress.env("LOGIN_PASSWORD"));
    cy.get("#loginForm").find("button[type=submit]").click();
    cy.wait(500);
  });
  
  
  
  /* Fourth test: Testing Log in user */
  Cypress.Commands.add("loginUser", () => { /// loginwithtestuser
    cy.fixture("example").then((user) => {
      cy.loginForm(user.email, Cypress.env("LOGIN_PASSWORD"));
    });
  });
  
  
//* Logout */

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.a("string");
  });
});

Cypress.Commands.add("logout", () => {
    cy.get("button[data-auth=logout]").click();
    cy.wait(600); 
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.null; 
  });

});

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
