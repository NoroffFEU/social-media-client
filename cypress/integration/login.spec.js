/// login.spec.js
describe("Login porocess", () => {
  beforeEach(() => {
    /* First test */
    cy.showHome();
  });

  /* Second test */
  it("shows the register form", () => {
    cy.get("#registerForm").should("be.visible");
  });

/* Third test*/

it("shows the login form", () => {
  cy.showLoginForm();
});

it("Valid credentials (registered user) can log in", () => {
  cy.showLoginForm();

  cy.loginUser();

   cy.window().its("localStorage.token").should("exist");  /* Making sure the token exists */
   cy.url().should("not.include", "/login");  

  /* Fouth test */
  // In your login.spec.js
/* Cypress.Commands.add("loginUser", () => {
  cy.fixture("example").then((user) => {
    cy.loginForm(user.email, Cypress.env("LOGIN_PASSWORD"));
  });
}); */

});
});
